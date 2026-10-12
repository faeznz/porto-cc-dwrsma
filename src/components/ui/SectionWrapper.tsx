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
    <section id={id} className={`editorial-section py-12 md:py-16 px-5 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <ScrollReveal className="section-heading mb-8 md:mb-10">
            {title && (
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-primary mb-2 uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-script text-secondary text-4xl md:text-5xl">
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
