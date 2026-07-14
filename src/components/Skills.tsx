"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  Globe,
  Music,
  Camera,
  Video,
  Scissors,
  Palette,
  Film,
  Clapperboard,
  Image,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  instagram: Globe,
  music: Music,
  camera: Camera,
  video: Video,
  scissors: Scissors,
  palette: Palette,
  film: Film,
  clapperboard: Clapperboard,
  image: Image,
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Tools"
      subtitle="What I bring to the table"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Camera;

          return (
            <ScrollReveal key={skill.name} delay={index * 0.05}>
              <motion.div
                className={cn(
                  "group relative p-6 rounded-xl bg-white border border-gray-100 shadow-sm",
                  "hover:border-primary/30 transition-colors duration-300",
                  "flex flex-col items-center gap-3 text-center cursor-default"
                )}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <span className="relative z-10 text-sm font-medium text-dark">
                  {skill.name}
                </span>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
