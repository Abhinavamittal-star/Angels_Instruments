"use client";

import React from "react";
import ParticleField from "@/components/reactbits/ParticleField";

/**
 * The single, site-wide futuristic backdrop. Rendered once in the root layout
 * as a fixed, full-viewport layer so every page shares the exact same
 * sci-fi background: React-Bits style "Magic Rings" concentric arcs, aurora
 * glows, a dot field, laser bars, and a linked particle field ("Magnet Lines").
 * pointer-events are disabled and all motion respects prefers-reduced-motion.
 */
export default function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Deep radial base tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(37,99,235,0.18),transparent_60%)]" />

      {/* Magic Rings — concentric glowing arcs */}
      <div className="magic-rings" />
      <div className="magic-rings-arc" />

      {/* Vertical laser bars */}
      <div className="laser-bars" />

      {/* Aurora glows */}
      <div className="animate-aurora absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-glow-b/20 blur-[130px]" />
      <div className="animate-aurora absolute -right-28 top-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-[130px] [animation-delay:-7s]" />
      <div className="animate-aurora absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-glow-a/12 blur-[140px] [animation-delay:-13s]" />

      {/* Dot field + linked particles ("magnet lines") */}
      <ParticleField color="99, 102, 241" density={46} linked interactive={false} />
      <div className="bg-dot-fade absolute inset-0 opacity-40" />

      {/* Subtle top vignette so the header stays readable */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
