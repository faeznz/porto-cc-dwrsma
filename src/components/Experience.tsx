"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/profile";

function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : <span key={index}>{part}</span>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My creative journey">
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ScrollReveal key={experience.title} delay={index * 0.08}>
            <article className="border-b border-primary/30 pb-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl text-primary leading-none">{experience.title}</h3>
                <span className="text-xs text-dark border border-secondary px-2 py-1">{experience.year}</span>
              </div>
              <p className="text-xs uppercase tracking-wider mt-2 mb-3">{experience.company}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{renderRichText(experience.description)}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
