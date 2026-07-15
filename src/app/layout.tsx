import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dewi Rismawati | Content Creator Portfolio",
  description:
    "Content Creator berpengalaman dalam pembuatan konten video, desain visual, dan pengembangan konsep kreatif untuk institusi pendidikan dan instansi pemerintah.",
  openGraph: {
    title: "Dewi Rismawati | Content Creator Portfolio",
    description:
      "Content Creator berpengalaman dalam pembuatan konten video, desain visual, dan pengembangan konsep kreatif untuk institusi pendidikan dan instansi pemerintah.",
    type: "website",
    locale: "id_ID",
    siteName: "Dewi Rismawati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dewi Rismawati | Content Creator Portfolio",
    description:
      "Content Creator berpengalaman dalam pembuatan konten video, desain visual, dan pengembangan konsep kreatif untuk institusi pendidikan dan instansi pemerintah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dewi Rismawati",
              givenName: "Dewi",
              familyName: "Rismawati",
              jobTitle: "Content Creator",
              description:
                "Content Creator berpengalaman dalam pembuatan konten video, desain visual, dan pengembangan konsep kreatif.",
              email: "dewirismawati9702@gmail.com",
              url: "https://dewirismawati.vercel.app",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
