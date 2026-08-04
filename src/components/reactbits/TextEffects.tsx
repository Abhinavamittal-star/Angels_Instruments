"use client";

import React from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* ShinyText — a sweeping light gradient across the text.              */
/* ------------------------------------------------------------------ */
export function ShinyText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`animate-shine bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(232,237,245,0.55) 40%, rgba(255,255,255,1) 50%, rgba(232,237,245,0.55) 60%)",
      }}
    >
      {text}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* GradientText — animated multi-color drifting gradient.              */
/* ------------------------------------------------------------------ */
export function GradientText({
  children,
  className = "",
  colors = "linear-gradient(90deg, #38bdf8, #6366f1, #f59e0b, #38bdf8)",
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string;
}) {
  return (
    <span
      className={`animate-gradient-text bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: colors }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SplitText — per-word staggered rise-in on scroll into view.         */
/* ------------------------------------------------------------------ */
export function SplitText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: delay + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* BlurText — per-word blur-to-focus fade on scroll into view.         */
/* ------------------------------------------------------------------ */
export function BlurText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ filter: "blur(10px)", opacity: 0, y: 8 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: delay + i * 0.06 }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
