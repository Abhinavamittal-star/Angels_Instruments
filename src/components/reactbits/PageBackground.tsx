"use client";

import React from "react";

type Variant = "aurora" | "waves" | "beams" | "grid" | "particles" | "dots";

interface PageBackgroundProps {
  /** Each page passes a distinct variant so its body sections have their own look. */
  variant?: Variant;
  className?: string;
}

/**
 * Per-section backdrop. Each `variant` renders a DISTINCT, lightweight CSS-only
 * look so different pages don't share the same background. Intentionally free
 * of the "magic rings" (those are reserved as a single subtle accent on the
 * home hero) to avoid visual clutter.
 */
export default function PageBackground({ variant = "aurora", className = "" }: PageBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {variant === "aurora" && (
        <>
          <div className="animate-aurora absolute -left-24 -top-32 h-[30rem] w-[30rem] rounded-full bg-glow-b/18 blur-[130px]" />
          <div className="animate-aurora absolute -right-20 top-16 h-[26rem] w-[26rem] rounded-full bg-primary/16 blur-[130px] [animation-delay:-6s]" />
          <div className="bg-dot-fade absolute inset-0 opacity-25" />
        </>
      )}

      {variant === "waves" && (
        <>
          <div className="bg-gradient-waves absolute inset-0 opacity-60" />
          <div className="animate-aurora absolute -bottom-32 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px]" />
        </>
      )}

      {variant === "beams" && (
        <>
          <div className="bg-beams absolute inset-0 opacity-50" />
          <div className="animate-aurora absolute -right-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/14 blur-[130px]" />
        </>
      )}

      {variant === "grid" && (
        <>
          <div className="bg-grid-fade absolute inset-0 opacity-40" />
          <div className="scan-line absolute inset-0 opacity-60" />
        </>
      )}

      {variant === "particles" && (
        <>
          <div className="bg-dot-fade absolute inset-0 opacity-35" />
          <div className="animate-aurora absolute -left-20 top-1/3 h-[24rem] w-[24rem] rounded-full bg-glow-a/12 blur-[130px]" />
        </>
      )}

      {variant === "dots" && <div className="bg-dot-fade absolute inset-0 opacity-40" />}
    </div>
  );
}
