"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** rgba/hex color of the cursor glow. */
  glowColor?: string;
  className?: string;
}

/**
 * React-Bits "Spotlight Card" + "Border Glow" combined. A pointer-following
 * radial highlight plus an animated gradient border that reveals on hover.
 */
export default function SpotlightCard({
  children,
  glowColor = "rgba(56, 189, 248, 0.35)",
  className = "",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-border-strong ${className}`}
      {...rest}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
