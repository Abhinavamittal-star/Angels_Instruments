"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";

export default function HeroCarousel() {
  const { openRFQ } = useRFQ();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ISO 9001:2008 Certified Quality Instruments",
      subtitle: "Manufacturing & exporting high-precision lab testing equipment for global pulp, paper, and packaging industries.",
      badge: "ISO 9001:2008 CERTIFIED",
      primaryCTA: "Explore Catalog",
      primaryHref: "/products",
      bgGradient: "from-blue-900/95 via-slate-900/90 to-slate-950/80",
    },
    {
      title: "Precision Paper & Pulp Testing Equipment",
      subtitle: "Ensure compliance with TAPPI, ISO, SCAN, and ASTM standards using our advanced tensile, freeness, and bursting testers.",
      badge: "STANDARDS CONFORMANCE",
      primaryCTA: "Paper Testing Range",
      primaryHref: "/products?category=paper-testing",
      bgGradient: "from-blue-950/95 via-slate-900/90 to-blue-900/80",
    },
    {
      title: "Industrial Packaging & Carton Strength Testers",
      subtitle: "Evaluate stacking capacity and drop resistance with Box Compression, Ring Crush, and Puncture testers.",
      badge: "B2B LOGISTICS ASSURANCE",
      primaryCTA: "Packaging Testing Range",
      primaryHref: "/products?category=packaging-testing",
      bgGradient: "from-slate-900/95 via-blue-950/90 to-slate-900/80",
    },
  ];

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] bg-slate-950 overflow-hidden flex items-center">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Dynamic slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />

          {/* Slide Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
            <div className="max-w-3xl space-y-6">
              {/* Badge */}
              <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-2xs sm:text-xs font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                {slide.badge}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl">
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href={slide.primaryHref}
                  className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-900 font-extrabold text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group uppercase tracking-wider"
                >
                  {slide.primaryCTA}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={() => openRFQ()}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-extrabold text-sm px-6 py-3.5 rounded-lg transition-all uppercase tracking-wider text-center"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/40 hover:bg-slate-900/80 border border-white/10 hover:border-white/30 text-white p-2 rounded-full transition-colors hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/40 hover:bg-slate-900/80 border border-white/10 hover:border-white/30 text-white p-2 rounded-full transition-colors hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-amber-500 w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
