"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={profile.photo}
                alt={`${profile.name} portrait`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="space-y-6">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
            <p className="text-gray-600 italic">{profile.story}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {profile.stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
