"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
}

/**
 * React-Bits "Animated Content" — fades and slides its children into view the
 * first time they enter the viewport.
 */
export default function AnimatedContent({
  children,
  className = "",
  delay = 0,
  distance = 30,
  direction = "up",
}: AnimatedContentProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "down" || direction === "right" ? 1 : -1;
  const from = { opacity: 0, [axis]: sign * distance };
  const to = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={from}
      whileInView={to}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
