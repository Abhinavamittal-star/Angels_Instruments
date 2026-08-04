"use client";

import React, { useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  /** Pixel radius within which the element reacts to the cursor. */
  padding?: number;
  /** 0-1, higher = stronger pull. */
  strength?: number;
  className?: string;
}

/**
 * React-Bits "Magnet" — the wrapped element is gently pulled toward the cursor
 * while it hovers within range, then springs back on leave.
 */
export default function Magnet({
  children,
  padding = 80,
  strength = 0.4,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < Math.max(rect.width, rect.height) / 2 + padding) {
      setOffset({ x: dx * strength, y: dy * strength });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {children}
    </div>
  );
}
