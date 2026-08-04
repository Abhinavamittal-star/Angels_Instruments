"use client";

import React from "react";
import ParticleField from "@/components/reactbits/ParticleField";

type Variant = "aurora" | "waves" | "beams" | "grid" | "particles" | "dots";

interface PageBackgroundProps {
  variant?: Variant;
  className?: string;
}

/**
 * A collection of dark, futuristic full-bleed backdrops (React-Bits "Aurora",
 * "Gradient Waves", "Beams", "Grid Scan", "Particles", "Dot Field"). Each page
 * picks a different variant so the site feels dynamic and distinct per route.
 * All variants are pointer-events-none and respect prefers-reduced-motion via
 * the global CSS animation guard.
 */
export default function PageBackground({ variant = "aurora", className = "" }: PageBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-0 overflow-hidden ${className}`} aria-hidden="true">
      {variant === "aurora" && (
        <>
          <div className="animate-aurora absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-glow-b/25 blur-[120px]" />
          <div className="animate-aurora absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px] [animation-delay:-6s]" />
          <div className="animate-aurora absolute -bottom-32 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/12 blur-[130px] [animation-delay:-11s]" />
          <div className="bg-grid-fade absolute inset-0 opacity-40" />
        </>
      )}

      {variant === "waves" && (
        <>
          <div className="bg-gradient-waves absolute inset-0" />
          <div className="animate-aurora absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-glow-b/25 blur-[130px]" />
          <div className="bg-dot-fade absolute inset-0 opacity-30" />
        </>
      )}

      {variant === "beams" && (
        <>
          <div className="bg-beams absolute inset-0" />
          <div className="bg-grid-fade absolute inset-0 opacity-50" />
          <div className="animate-aurora absolute -right-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/20 blur-[120px]" />
        </>
      )}

      {variant === "grid" && (
        <>
          <div className="bg-grid-scan absolute inset-0 opacity-50" />
          <div className="scan-line absolute inset-x-0 top-0 h-40" />
          <div className="animate-aurora absolute -left-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-glow-a/15 blur-[120px]" />
        </>
      )}

      {(variant === "particles" || variant === "dots") && (
        <>
          <ParticleField
            color={variant === "dots" ? "99, 102, 241" : "56, 189, 248"}
            density={variant === "dots" ? 55 : 75}
            linked={variant === "particles"}
          />
          <div className="bg-grid-fade absolute inset-0 opacity-40" />
        </>
      )}
    </div>
  );
}
