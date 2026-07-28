"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => { window.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-gradient-animated opacity-20" />

      <div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${String(mousePos.x * 30)}px, ${String(mousePos.y * 30)}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${String(mousePos.x * -20)}px, ${String(mousePos.y * -20)}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${String(-50 + mousePos.x * 40)}%, ${String(-50 + mousePos.y * 40)}%)`,
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 hidden"
          variants={itemVariants}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          <div
            className="absolute -right-4 -bottom-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl animate-float"
          >
            ✨
          </div>
        </motion.div>

        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <motion.p
            className="text-lg text-primary font-medium mb-2"
            variants={itemVariants}
          >
            Hi!
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-dark mb-3"
            variants={itemVariants}
          >
            I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-500 mb-2"
            variants={itemVariants}
          >
            {profile.role}
          </motion.p>
          <motion.p
            className="text-base text-gray-400 mb-8"
            variants={itemVariants}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View Portfolio
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dark text-dark rounded-full font-medium hover:bg-dark hover:text-white transition-colors"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        <ArrowDown className="text-gray-400" />
      </motion.div>
    </section>
  );
}
