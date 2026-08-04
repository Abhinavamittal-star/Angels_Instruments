"use client";

import React, { useCallback, useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
}

/**
 * React-Bits "Click Spark" — a global overlay that emits a burst of radial
 * sparks wherever the user clicks. Mount once near the app root.
 */
export default function ClickSpark({
  color = "#38bdf8",
  size = 14,
  count = 8,
  duration = 420,
}: {
  color?: string;
  size?: number;
  count?: number;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<Spark[]>([]);
  const raf = useRef(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    resize();
    window.addEventListener("resize", resize);

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const loop = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.current = sparks.current.filter((s) => now - s.start < duration);
      for (const s of sparks.current) {
        const t = (now - s.start) / duration;
        const eased = ease(t);
        const dist = eased * size * 2.4;
        const x1 = s.x + Math.cos(s.angle) * dist;
        const y1 = s.y + Math.sin(s.angle) * dist;
        const x2 = s.x + Math.cos(s.angle) * (dist + size);
        const y2 = s.y + Math.sin(s.angle) * (dist + size);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1 - t;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const now = performance.now();
      for (let i = 0; i < count; i++) {
        sparks.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / count,
          start: now,
        });
      }
    };
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
    };
  }, [color, size, count, duration, resize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  );
}
