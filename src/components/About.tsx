"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";

function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-dark">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <SectionWrapper
      id="about"
       title="Who am I"
      subtitle="Get to know me better"
    >
       <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#fffaf0] border border-primary/40">
              <Image
                src="/images/risma-about.webp"
                alt={`${profile.name} portrait`}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span aria-hidden="true" className="absolute -bottom-5 -right-3 text-secondary text-7xl">✳</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="space-y-6">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {renderRichText(paragraph)}
            </p>
          ))}

          <div className="border-l-4 border-primary pl-4 py-3 bg-primary/5 rounded-r-lg">
            <p className="text-gray-600 italic text-sm leading-relaxed">{profile.story}</p>
          </div>

        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
