"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";
import ParticleField from "@/components/reactbits/ParticleField";
import Magnet from "@/components/reactbits/Magnet";
import { GradientText, ShinyText } from "@/components/reactbits/TextEffects";

export default function HeroCarousel() {
  const { openRFQ } = useRFQ();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ISO 9001:2008 Certified Quality Instruments",
      subtitle:
        "Manufacturing & exporting high-precision lab testing equipment for global pulp, paper, and packaging industries.",
      badge: "ISO 9001:2008 CERTIFIED",
      primaryCTA: "Explore Catalog",
      primaryHref: "/products",
    },
    {
      title: "Precision Paper & Pulp Testing Equipment",
      subtitle:
        "Ensure compliance with TAPPI, ISO, SCAN, and ASTM standards using our advanced tensile, freeness, and bursting testers.",
      badge: "STANDARDS CONFORMANCE",
      primaryCTA: "Paper Testing Range",
      primaryHref: "/products?category=paper-testing",
    },
    {
      title: "Industrial Packaging & Carton Strength Testers",
      subtitle:
        "Evaluate stacking capacity and drop resistance with Box Compression, Ring Crush, and Puncture testers.",
      badge: "B2B LOGISTICS ASSURANCE",
      primaryCTA: "Packaging Testing Range",
      primaryHref: "/products?category=packaging-testing",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const slide = slides[currentSlide];

  return (
    <div className="relative flex h-[560px] w-full items-center overflow-hidden bg-background sm:h-[640px]">
      {/* Animated particle field + aurora glows */}
      <ParticleField color="56, 189, 248" density={80} />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-70" />
      <div className="animate-aurora pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-aurora pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-glow-b/20 blur-[120px] [animation-delay:-9s]" />

      {/* Slide content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-accent-bright sm:text-xs">
                <span className="animate-pulse-ring inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {slide.badge}
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
                <GradientText>{slide.title}</GradientText>
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-strong sm:text-lg">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
            <Magnet>
              <Link
                href={slide.primaryHref}
                className="group flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent-bright glow-accent"
              >
                {slide.primaryCTA}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnet>
            <button
              onClick={() => openRFQ()}
              className="rounded-lg border border-border-strong bg-surface/50 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary-bright hover:bg-surface"
            >
              <ShinyText text="Request a Quote" />
            </button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border bg-surface/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:border-primary-bright hover:bg-surface sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border bg-surface/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:border-primary-bright hover:bg-surface sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-accent" : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
