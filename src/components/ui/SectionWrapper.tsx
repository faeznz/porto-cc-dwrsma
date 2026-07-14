"use client";

import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <ScrollReveal className="mb-12 md:mb-16 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
