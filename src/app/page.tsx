import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Target, Globe2, Phone, Mail, ArrowRight, Boxes, Building2, Container } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import { CATEGORIES } from "@/data/products";
import CountUp from "@/components/reactbits/CountUp";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { SplitText, GradientText } from "@/components/reactbits/TextEffects";

export default function Home() {
  const whyChooseUsFeatures = [
    {
      title: "International Standards Compliance",
      description:
        "All our instruments are designed and calibrated to conform strictly to global testing standards including TAPPI, ISO, SCAN, ASTM, DIN, BS, and IS.",
      icon: Award,
    },
    {
      title: "Heavy-Duty & Durable Build",
      description:
        "Engineered for industrial lab environments. We use structural cast-iron bases, stainless steel contact surfaces, and corrosion-resistant finishes.",
      icon: ShieldCheck,
    },
    {
      title: "High Precision Calibration",
      description:
        "Equipped with advanced microprocessor control units, high-linearity load cells, and digital encoders to ensure repeatable and accurate test results.",
      icon: Target,
    },
    {
      title: "Nationwide & Global Delivery",
      description:
        "With a robust export network, we ship and install testing systems globally. All shipments are packaged in heavy-duty sea-worthy wooden cases.",
      icon: Globe2,
    },
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years Experience", icon: Building2 },
    { value: 40, suffix: "+", label: "Countries Exported", icon: Globe2 },
    { value: 150, suffix: "+", label: "Instrument Models", icon: Boxes },
    { value: 500, suffix: "+", label: "Active Installations", icon: Container },
  ];

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <HeroCarousel />

      {/* Animated Stats Strip */}
      <section className="relative overflow-hidden border-y border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-dot-fade opacity-60" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedContent key={s.label} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    <GradientText>
                      <CountUp to={s.value} suffix={s.suffix} duration={2} />
                    </GradientText>
                  </p>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-muted sm:text-xs">
                    {s.label}
                  </p>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </section>

      {/* Introduction */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                Welcome to Angels Instruments
              </span>
              <SplitText
                as="h2"
                text="High-Precision Scientific Testing Instruments for Global Industries"
                className="block text-2xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-strong sm:text-base">
              For over a decade, ANGELS INSTRUMENTS has stood as a trusted manufacturer and exporter of laboratory
              testing equipment. An ISO 9001:2008 Certified Company, we design, engineer, and calibrate instruments that
              evaluate the mechanical, physical, and optical properties of Pulp, Paper, Board, Packaging, Surface
              Coatings, Textile, and Pharmaceuticals.
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Our products are used by R&D laboratories, paper mills, packaging plants, printing presses, and
              pharmaceutical laboratories across India and international markets to enforce strict quality controls and
              verify performance standards.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-bright glow-primary"
              >
                Read Corporate Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary-bright hover:bg-surface-2"
              >
                Contact Our Engineers
              </Link>
            </div>
          </div>

          {/* Quick Connect Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel border-glow-ring relative overflow-hidden rounded-2xl p-8">
              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-bright">
                    Quick Connect
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Direct Sales Desk</h3>
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  Connect directly with our sales or technical engineering desk to request a catalog, discuss custom
                  specifications, or check standard delivery timelines.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href="tel:+919760577862"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-surface-2/60 p-3 transition-all hover:border-primary-bright hover:bg-surface-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent-bright">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] font-semibold uppercase text-muted">Call Technical Support</p>
                      <p className="text-sm font-bold text-foreground transition-colors group-hover:text-accent-bright">
                        +91 97605 77862
                      </p>
                      <p className="text-[0.7rem] font-bold text-muted-strong">+91 94121 31200</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@angelsinstruments.in"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-surface-2/60 p-3 transition-all hover:border-primary-bright hover:bg-surface-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent-bright">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] font-semibold uppercase text-muted">Email Specifications</p>
                      <p className="text-sm font-bold text-foreground transition-colors group-hover:text-accent-bright">
                        info@angelsinstruments.in
                      </p>
                      <p className="text-[0.7rem] font-bold text-muted-strong">angelsinstruments@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="border-t border-border pt-3 text-center font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                  ANGELS INSTRUMENTS • ISO 9001:2008 Certified Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative border-y border-border bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">
              Product Categories
            </span>
            <SplitText
              as="h2"
              text="Select Your Quality Testing Discipline"
              className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
            />
            <p className="text-xs text-muted sm:text-sm">
              We engineer advanced scientific solutions across seven major testing domains, guaranteeing accurate
              results and durable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category, i) => (
              <AnimatedContent key={category.slug} delay={i * 0.06}>
                <CategoryCard category={category} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">
              Why Angels Instruments
            </span>
            <SplitText
              as="h2"
              text="Built for Heavy-Duty Lab Operations"
              className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
            />
            <p className="text-xs text-muted sm:text-sm">
              Our machinery is designed to withstand the rigorous routines of continuous industrial labs while supplying
              researchers with accurate data points.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {whyChooseUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedContent key={index} delay={index * 0.06}>
                  <SpotlightCard className="h-full">
                    <div className="flex gap-4 p-6 sm:gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                        <p className="text-xs leading-relaxed text-muted sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations Banner */}
      <section className="relative overflow-hidden border-t border-border bg-surface px-4 py-12">
        <div className="pointer-events-none absolute inset-0 bg-dot-fade opacity-50" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-bright md:justify-start">
              <Award className="h-4 w-4" />
              <span>ISO 9001:2008 Certified Quality System</span>
            </div>
            <p className="max-w-xl text-sm text-muted">
              Our manufacturing facilities run on strict ISO standard operating procedures, ensuring material
              traceability and rigorous calibration verification.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["TAPPI CONFORMANT", "ASTM COMPLIANT", "ISO COMPATIBLE"].map((b) => (
              <span
                key={b}
                className="rounded border border-border bg-card px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted-strong"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
