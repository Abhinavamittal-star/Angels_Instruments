import React from "react";
import ParticleField from "@/components/reactbits/ParticleField";
import { GradientText, SplitText } from "@/components/reactbits/TextEffects";

type HeroVariant = "aurora" | "waves" | "beams" | "grid" | "particles";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Render title with an animated gradient instead of split reveal. */
  gradientTitle?: boolean;
  /** Distinct backdrop per page so each hero has its own look. */
  variant?: HeroVariant;
}

/**
 * Shared dark, futuristic page header. Each page passes a distinct `variant`
 * so the hero backdrop differs from page to page (aurora, waves, beams, grid,
 * particles). No "magic rings" here — those are reserved as a single subtle
 * accent on the home hero only.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  gradientTitle = false,
  variant = "aurora",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {variant === "aurora" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-dot-fade opacity-40" />
          <div className="animate-aurora pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />
          <div className="animate-aurora pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-glow-b/16 blur-[110px] [animation-delay:-7s]" />
        </>
      )}

      {variant === "waves" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-waves opacity-70" />
          <div className="animate-aurora pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent/12 blur-[110px]" />
        </>
      )}

      {variant === "beams" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-beams opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
          <div className="animate-aurora pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/18 blur-[110px]" />
        </>
      )}

      {variant === "grid" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-scan opacity-60" />
          <div className="scan-line pointer-events-none absolute inset-0" />
          <div className="animate-aurora pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/16 blur-[110px]" />
        </>
      )}

      {variant === "particles" && (
        <>
          <ParticleField color="99, 102, 241" density={60} />
          <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />
          <div className="animate-aurora pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-accent/10 blur-[110px] [animation-delay:-7s]" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-accent-bright sm:text-xs">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
          {gradientTitle ? <GradientText>{title}</GradientText> : <SplitText text={title} className="block" />}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-strong sm:text-base">{description}</p>
        )}
      </div>
    </section>
  );
}
