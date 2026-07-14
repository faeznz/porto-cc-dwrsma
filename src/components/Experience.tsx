"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/profile";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey"
      className="bg-white"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <ScrollReveal
              key={`${exp.year}-${exp.title}`}
              direction={isLeft ? "left" : "right"}
              delay={index * 0.15}
            >
              <div className="relative mb-12 last:mb-0">
                {/* Mobile view */}
                <div className="md:hidden flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md ring-4 ring-white z-10">
                    <Briefcase size={16} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">
                      {exp.year}
                    </span>
                    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mt-2">
                      <h3 className="text-base font-bold text-dark">{exp.title}</h3>
                      <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:flex items-center">
                  <div className={`w-1/2 ${isLeft ? "pr-10 text-right" : "pl-10"}`}>
                    {isLeft ? (
                      <>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                          {exp.year}
                        </span>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                          <h3 className="text-lg font-bold text-dark">{exp.title}</h3>
                          <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">{exp.description}</p>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md ring-4 ring-white z-10">
                    <Briefcase size={18} />
                  </div>

                  <div className={`w-1/2 ${isLeft ? "pl-10" : "pl-10"}`}>
                    {!isLeft ? (
                      <>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                          {exp.year}
                        </span>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                          <h3 className="text-lg font-bold text-dark">{exp.title}</h3>
                          <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">{exp.description}</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
