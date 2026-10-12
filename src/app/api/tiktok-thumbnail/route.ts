import { NextRequest, NextResponse } from "next/server";

const FALLBACK_PATH = "/images/portfolio/project-thumb.svg";
const REVALIDATE_SECONDS = 86400;
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function isTikTokUrl(value: string): boolean {
  try {
    const { hostname } = new URL(value);
    return /(^|\.)tiktok\.com$/i.test(hostname);
  } catch {
    return false;
  }
}

async function resolveThumbnailUrl(videoUrl: string): Promise<string | null> {
  const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
  const res = await fetch(oembedUrl, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { thumbnail_url?: string };
  return data.thumbnail_url ?? null;
}

export async function GET(request: NextRequest) {
  const videoUrl = request.nextUrl.searchParams.get("url");
  const fallback = () =>
    NextResponse.redirect(new URL(FALLBACK_PATH, request.nextUrl.origin), 302);

  if (!videoUrl || !isTikTokUrl(videoUrl)) {
    return fallback();
  }

  try {
    const thumbnailUrl = await resolveThumbnailUrl(videoUrl);
    if (!thumbnailUrl) return fallback();

    const imageRes = await fetch(thumbnailUrl, {
      headers: { "User-Agent": USER_AGENT },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!imageRes.ok) return fallback();

    const buffer = await imageRes.arrayBuffer();
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": imageRes.headers.get("content-type") ?? "image/jpeg",
        "Cache-Control": `public, max-age=${String(REVALIDATE_SECONDS)}, s-maxage=604800, stale-while-revalidate=${String(REVALIDATE_SECONDS)}`,
      },
    });
  } catch {
    return fallback();
  }
}
