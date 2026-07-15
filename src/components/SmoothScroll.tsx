"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let rafId: number;
    let destroy: (() => void) | null = null;

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

        destroy = () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      } catch (e) {
        console.warn("Lenis smooth scroll failed to load:", e);
      }
    }

    void initLenis();

    return () => {
      destroy?.();
    };
  }, []);

  return <>{children}</>;
}
