"use client";

import { useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useSpring(0, { stiffness: 50, damping: 20 });

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl md:text-4xl font-bold font-heading text-primary"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isInView ? `${displayValue}${suffix}` : `0${suffix}`}
      </motion.div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
