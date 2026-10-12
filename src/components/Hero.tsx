"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="editorial-hero">
      <nav className="editorial-nav" aria-label="Main navigation">
        <a href="#home" className="brand">DEWI RISMAWATI<span>✳</span></a>
        <div className="flex flex-wrap gap-5 md:gap-9">
          <a href="#about">About</a><a href="#experience">Experience</a>
          <a href="#portfolio">My work</a>
        </div>
      </nav>
      <div className="hero-composition">
        <p className="hero-note">Membuat cerita melalui video, desain, dan konten kreatif yang bermakna.</p>
        <h1 className="hero-headline">CREATIVE PORTFOLIO<span aria-hidden="true">✳</span></h1>
        <div className="hero-cutout">
          <Image src="/images/risma-hero-pp1.webp" alt={profile.name} fill priority sizes="(max-width: 640px) 75vw, 35vw" className="object-contain object-bottom" />
        </div>
        <svg className="hero-signature" viewBox="0 0 500 120" role="img" aria-label="Dewi Rismawati">
          <defs>
            <path id="hero-signature-curve" d="M 35 18 Q 250 112 465 18" />
          </defs>
          <text>
            <textPath href="#hero-signature-curve" startOffset="50%" textAnchor="middle">Dewi Rismawati</textPath>
          </text>
        </svg>
        <a className="hero-work-link" href="#portfolio">Explore my work <ArrowUpRight size={18} /></a>
      </div>
      <div className="hero-bottom">
        <span className="hidden sm:block">BASED IN CILACAP, INDONESIA</span>
        <div className="flex gap-5">
          <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={19} /></a>
          <a href={profile.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok size={19} /></a>
          <a href={`mailto:${profile.socials.email}`} aria-label="Email"><FaEnvelope size={19} /></a>
          <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={19} /></a>
        </div>
      </div>
    </section>
  );
}
