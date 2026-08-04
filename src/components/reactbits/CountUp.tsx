"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  delay?: number; // seconds
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  className?: string;
}

/**
 * React-Bits style CountUp. Animates from `from` to `to` the first time the
 * element scrolls into view, using an easeOutExpo curve. Supports thousands
 * separators, prefix / suffix, and fixed decimals.
 */
export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  decimals = 0,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let startTime: number | null = null;
    const durationMs = duration * 1000;
    const delayMs = delay * 1000;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime - delayMs;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(from + (to - from) * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, from, to, duration, delay]);

  const formatted = value
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
