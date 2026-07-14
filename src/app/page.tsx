"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="py-24 text-center text-gray-400">Loading...</div>,
});

import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
