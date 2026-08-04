import React from "react";
import ParticleField from "@/components/reactbits/ParticleField";
import { GradientText, SplitText } from "@/components/reactbits/TextEffects";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Render title with an animated gradient instead of split reveal. */
  gradientTitle?: boolean;
}

/**
 * Shared dark, futuristic page header with an interactive particle field,
 * fading grid, and aurora glows. Used across all inner pages.
 */
export default function PageHero({ eyebrow, title, description, gradientTitle = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ParticleField color="99, 102, 241" density={60} />
      <div className="magic-rings pointer-events-none opacity-70" />
      <div className="magic-rings-arc pointer-events-none" />
      <div className="laser-bars pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />
      <div className="animate-aurora pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />
      <div className="animate-aurora pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-accent/10 blur-[110px] [animation-delay:-7s]" />

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
