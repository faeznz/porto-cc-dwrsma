"use client";

import Image from "next/image";
import { Camera, Video, Scissors, Palette, Film, Clapperboard, Image as ImageIcon, type LucideIcon } from "lucide-react";
import { SiCanvas, SiFigma, SiNotion } from "react-icons/si";
import { BsFiletypeXlsx } from "react-icons/bs";
import { TbScissors } from "react-icons/tb";
import type { IconType } from "react-icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  camera: Camera, video: Video, scissors: Scissors, palette: Palette,
  film: Film, clapperboard: Clapperboard, image: ImageIcon,
};

const toolIcons: Record<string, IconType> = {
  Canva: SiCanvas,
  CapCut: TbScissors,
  Figma: SiFigma,
  Notion: SiNotion,
  Spreadsheet: BsFiletypeXlsx,
};

export default function Skills() {
  const abilities = skills.filter((skill) => skill.category === "Skill");
  const tools = skills.filter((skill) => skill.category === "Tool");

  return (
    <SectionWrapper id="skills" title="Skills & Tools" subtitle="My creative qualifications">
      <div className="qualifications-layout">
        <ScrollReveal direction="left" className="qualification-abilities">
          <span className="qualification-star" aria-hidden="true">✳</span>
          <p className="text-xs uppercase tracking-[0.2em] mb-4">Creative capabilities</p>
          {abilities.map((skill) => {
            const Icon = icons[skill.icon] ?? Camera;
            return (
              <div key={skill.name} className="qualification-skill">
                <Icon size={19} className="text-secondary shrink-0" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </ScrollReveal>

        <ScrollReveal className="qualification-portrait">
          <Image src="/images/risma-skills-source.png" alt="Dewi Rismawati" fill unoptimized sizes="(max-width: 640px) 70vw, 30vw" className="object-contain object-bottom" />
          <span className="qualification-signature font-script">Made with creativity</span>
        </ScrollReveal>

        <ScrollReveal direction="right" className="qualification-tools">
          <div className="qualification-tool-panel">
            <p className="qualification-tool-heading text-xs uppercase tracking-[0.2em]">
              The Creative Toolkit <span aria-hidden="true">✦</span>
            </p>
            <div className="qualification-tool-list" aria-label="Creative tools">
              {tools.map((tool) => {
                const Icon = toolIcons[tool.name] ?? ImageIcon;
                return (
                  <div key={tool.name} className="qualification-tool-item">
                    <span className="qualification-tool-logo"><Icon size={19} /></span>
                    <span>{tool.name}</span>
                    <span className="qualification-tool-sparkle" aria-hidden="true">✳</span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
