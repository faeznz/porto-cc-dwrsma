"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let rafId: number;

    async function initLenis() {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      } catch (e) {
        console.warn("Lenis smooth scroll failed to load:", e);
      }
    }

    const cleanup = initLenis();

    return () => {
      if (cleanup) cleanup.then((fn) => fn?.());
    };
  }, []);

  return <>{children}</>;
}
