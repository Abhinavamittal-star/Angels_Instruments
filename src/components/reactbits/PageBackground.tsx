"use client";

import React from "react";

type Variant = "aurora" | "waves" | "beams" | "grid" | "particles" | "dots";

interface PageBackgroundProps {
  /** Kept for backwards compatibility — every page now shares one unified backdrop. */
  variant?: Variant;
  className?: string;
}

/**
 * The unified per-section backdrop. To keep a single consistent look across
 * every page, this now always renders the same futuristic stack — React-Bits
 * "Magic Rings" arcs, aurora glows, laser bars and a fading dot grid — layered
 * over the site-wide fixed SiteBackground. The `variant` prop is accepted for
 * backwards compatibility but no longer changes the appearance.
 *
 * It is CSS-only (no canvas) so it stays cheap even when several sections use
 * it; the animated particle field lives once in the global SiteBackground.
 */
export default function PageBackground({ className = "" }: PageBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Magic Rings — concentric glowing arcs */}
      <div className="magic-rings opacity-70" />
      <div className="magic-rings-arc opacity-80" />

      {/* Laser bars */}
      <div className="laser-bars" />

      {/* Aurora glows */}
      <div className="animate-aurora absolute -left-24 -top-32 h-[30rem] w-[30rem] rounded-full bg-glow-b/20 blur-[120px]" />
      <div className="animate-aurora absolute -right-20 top-10 h-[26rem] w-[26rem] rounded-full bg-primary/18 blur-[120px] [animation-delay:-6s]" />

      {/* Fading dot grid */}
      <div className="bg-dot-fade absolute inset-0 opacity-30" />
      <div className="bg-grid-fade absolute inset-0 opacity-25" />
    </div>
  );
}
