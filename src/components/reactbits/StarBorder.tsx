"use client";

import React from "react";

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Tailwind classes for the inner button surface. */
  className?: string;
  /** Base color of the two sweeping star trails. */
  color?: string;
  /** As a link-style element instead of a button. */
  as?: "button" | "span";
}

/**
 * React-Bits "Star Border" — an animated glowing border that sweeps two light
 * trails around the element WITHOUT displacing it (a stable replacement for the
 * Magnet effect). The element itself only reacts on hover with a subtle lift.
 */
export default function StarBorder({
  children,
  className = "",
  color = "var(--accent-bright)",
  as = "button",
  ...rest
}: StarBorderProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={`star-border group relative inline-flex overflow-hidden rounded-lg p-[1.5px] ${className}`}
      {...rest}
    >
      {/* Two sweeping star trails */}
      <span
        aria-hidden="true"
        className="star-border-trail absolute inset-[-200%] opacity-80"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 70%, ${color} 85%, transparent 100%)`,
        }}
      />
      <span
        aria-hidden="true"
        className="star-border-trail-2 absolute inset-[-200%] opacity-60"
        style={{
          background: `conic-gradient(from 180deg, transparent 0 70%, var(--glow-a) 85%, transparent 100%)`,
        }}
      />
      {children}
    </Tag>
  );
}
