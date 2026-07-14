"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: PortfolioCategory[] = ["All", "Data Analyst Intern", "Student Employee – Tim Kreatif", "Staff Humas, Publikasi, & Dokumentasi (HPD)", "Assistant Director (Visual)"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filtered.map((item) => ({
    src: item.image,
    title: item.title,
  }));

  return (
    <SectionWrapper
      id="portfolio"
      title="Portfolio"
      subtitle="Selected works I'm proud of"
      className="bg-white"
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid"
            >
              <div className="group relative w-full rounded-xl overflow-hidden cursor-pointer text-left">
                <button
                  onClick={() => {
                    const idx = filtered.findIndex((f) => f.id === item.id);
                    setLightboxIndex(idx);
                  }}
                  className="w-full"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {item.youtube && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5 text-red-600" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                  <p className="text-white/60 text-xs mt-1">{item.client}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-white bg-white/20 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
                      View Detail
                    </span>
                    {item.youtube && (
                      <a
                        href={item.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-white bg-red-500/80 px-3 py-1 rounded-full w-fit backdrop-blur-sm hover:bg-red-500 transition-colors pointer-events-auto"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {lightboxIndex !== null && (
        <Lightbox
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={lightboxImages}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
          }}
        />
      )}
    </SectionWrapper>
  );
}
