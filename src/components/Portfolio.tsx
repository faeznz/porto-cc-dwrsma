"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioCategory } from "@/types";

const categories: PortfolioCategory[] = ["Videography", "Design", "Photography"];
function getItemLink(item: typeof portfolioItems[number]): string | null {
  return item.youtube || item.tiktok || item.instagram || null;
}

function getPlatform(item: typeof portfolioItems[number]): boolean {
  return Boolean(item.youtube || item.tiktok || item.instagram);
}

function getItemImage(item: typeof portfolioItems[number]): string {
  if (item.tiktokThumbnail && item.tiktok) {
    return `/api/tiktok-thumbnail?url=${encodeURIComponent(item.tiktok)}`;
  }
  return item.image;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Videography");
  const filtered = portfolioItems
    .filter((item) => item.category === activeCategory)
    .sort((a, b) => b.id - a.id);
  if (activeCategory === "Photography") {
    const existingImages = filtered.filter((item) => item.id <= 51);
    const addedImages = filtered.filter((item) => item.id > 51).sort((a, b) => a.id - b.id);
    filtered.splice(0, filtered.length, ...existingImages, ...addedImages);
  }
  const gridClass = activeCategory === "Videography"
    ? "portfolio-video-grid"
    : activeCategory === "Design"
      ? "portfolio-design-grid"
      : "portfolio-photography-grid";
  if (activeCategory === "Videography") {
    const profileVideo = filtered.find((item) => item.id === 8);
    const p2kVideos = filtered.filter((item) => [5, 10, 40, 41].includes(item.id));
    const prioritizedIds = new Set([5, 8, 10, 40, 41]);
    const remaining = filtered.filter((item) => !prioritizedIds.has(item.id));
    const talentIndex = remaining.findIndex((item) => item.id === 42);
    const insertAt = talentIndex >= 0 ? talentIndex + 1 : remaining.length;

    if (profileVideo) remaining.splice(insertAt, 0, profileVideo);
    remaining.splice(insertAt + (profileVideo ? 1 : 0), 0, ...p2kVideos);
    filtered.splice(0, filtered.length, ...remaining);
  }

  return (
    <section id="portfolio" className="portfolio-showcase">
      <div className="portfolio-showcase-inner">
        <header className="portfolio-showcase-header">
          <h2>Portfolio</h2>
          <h3>Selected works I&apos;m proud of</h3>
        </header>

        <div className="portfolio-categories" role="tablist" aria-label="Portfolio categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => { setActiveCategory(category); }}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className={gridClass}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const link = getItemLink(item);
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.25 }}
                  className="portfolio-video-card"
                >
                  {activeCategory === "Videography" ? (
                    <a
                      className="portfolio-phone"
                      href={link ?? undefined}
                      target={link ? "_blank" : undefined}
                      rel={link ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${item.title}`}
                    >
                      <span className="portfolio-phone-camera" />
                      <span className="portfolio-phone-screen">
                        <Image
                          src={getItemImage(item)}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 15vw"
                        />
                        {getPlatform(item) && <span className="portfolio-play" aria-hidden="true">▶</span>}
                      </span>
                    </a>
                  ) : (
                    <a
                      className={activeCategory === "Design" ? "portfolio-design-image" : `portfolio-photography-image ${item.orientation ?? "landscape"}`}
                      style={activeCategory === "Photography" && item.imageAspectRatio ? { aspectRatio: item.imageAspectRatio } : undefined}
                      href={link ?? undefined}
                      target={link ? "_blank" : undefined}
                      rel={link ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${item.title}`}
                    >
                      <Image
                        src={getItemImage(item)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 33vw"
                      />
                    </a>
                  )}
                  {activeCategory !== "Photography" && <h3>{item.title}</h3>}
                  {activeCategory !== "Photography" && <p className="portfolio-client">{item.client}</p>}
                  {activeCategory === "Videography" && <p className="portfolio-card-description">{item.description}</p>}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
