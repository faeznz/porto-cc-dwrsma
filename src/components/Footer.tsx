"use client";

import { Camera, Video, Music2, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { icon: Camera, href: profile.socials.instagram, label: "Instagram" },
  { icon: Video, href: profile.socials.youtube, label: "YouTube" },
  { icon: Music2, href: profile.socials.tiktok, label: "TikTok" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading">
              {profile.name}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">{profile.role}</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
