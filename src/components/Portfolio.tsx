"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: PortfolioCategory[] = ["All", "Data Analyst Intern", "Student Employee – Tim Kreatif", "Staff Humas, Publikasi, & Dokumentasi (HPD)", "Assistant Director (Visual)"];

function getItemLink(item: typeof portfolioItems[number]): string | null {
  return item.youtube || item.tiktok || item.instagram || null;
}

function getPlatform(item: typeof portfolioItems[number]): "youtube" | "tiktok" | "instagram" | null {
  if (item.youtube) return "youtube";
  if (item.tiktok) return "tiktok";
  if (item.instagram) return "instagram";
  return null;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const filtered =
    activeCategory === "All"
      ? [...portfolioItems].sort((a, b) => {
          const order: PortfolioCategory[] = ["Data Analyst Intern", "Student Employee – Tim Kreatif", "Staff Humas, Publikasi, & Dokumentasi (HPD)", "Assistant Director (Visual)"];
          return order.indexOf(a.category) - order.indexOf(b.category);
        })
      : portfolioItems.filter((item) => item.category === activeCategory);

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
            onClick={() => { setActiveCategory(cat); }}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
            >
              <div className="group relative w-full rounded-xl overflow-hidden cursor-pointer text-left">
                <button
                  onClick={() => {
                    const link = getItemLink(item);
                    if (link) window.open(link, "_blank", "noopener,noreferrer");
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
                    {getPlatform(item) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {getPlatform(item) === "tiktok" ? (
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                          ) : getPlatform(item) === "youtube" ? (
                            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5 text-red-600" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                  <p className="text-white/60 text-xs mt-1">{item.client}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getPlatform(item) === "youtube" && (
                      <a
                        href={item.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); }}
                        className="text-xs text-white bg-red-500/80 px-3 py-1 rounded-full w-fit backdrop-blur-sm hover:bg-red-500 transition-colors pointer-events-auto"
                      >
                        Watch Video
                      </a>
                    )}
                    {getPlatform(item) === "tiktok" && (
                      <a
                        href={item.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); }}
                        className="text-xs text-white bg-black/60 px-3 py-1 rounded-full w-fit backdrop-blur-sm hover:bg-black transition-colors pointer-events-auto"
                      >
                        Open TikTok
                      </a>
                    )}
                    {getPlatform(item) === "instagram" && (
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); }}
                        className="text-xs text-white bg-pink-500/80 px-3 py-1 rounded-full w-fit backdrop-blur-sm hover:bg-pink-500 transition-colors pointer-events-auto"
                      >
                        Open Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </SectionWrapper>
  );
}
