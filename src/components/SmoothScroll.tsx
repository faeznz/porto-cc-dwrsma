"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const rafId = { current: 0 as number };

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
          rafId.current = requestAnimationFrame(raf);
        }

        rafId.current = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId.current);
          lenis.destroy();
        };
      } catch (e) {
        console.warn("Lenis smooth scroll failed to load:", e);
      }
    }

    const cleanupPromise = initLenis();

    return () => {
      cleanupPromise.then((cleanup) => { if (cleanup) cleanup(); }).catch(() => {});
    };
  }, []);

  return <>{children}</>;
}
