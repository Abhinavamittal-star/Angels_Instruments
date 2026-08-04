import React from "react";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck, Factory, Settings } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import PageBackground from "@/components/reactbits/PageBackground";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { SplitText } from "@/components/reactbits/TextEffects";

export const metadata = {
  title: "Pilot Scale Plants & R&D Machinery | ANGELS INSTRUMENTS",
  description:
    "Explore our custom lab-scale continuous and batch processing plants, including Rotary Digesters, Bleaching Reactors, and continuous Fourdrinier paper maker pilot plants.",
};

export default function PilotPlantsPage() {
  const pilotPlants = PRODUCTS.filter((p) => p.categorySlug === "pilot-plants");

  const engineeringCapabilities = [
    {
      title: "Custom Sizing & Capacity",
      desc: "Autoclave capacities from 5 liters up to 50 liters. Customized heating profiles, electrical ratings, and material selection.",
      icon: Settings,
    },
    {
      title: "High Alloy Contacts",
      desc: "For chemical process safety, contact surfaces are available in electropolished SS-316, Titanium, or specialized Hastelloy C alloys.",
      icon: ShieldCheck,
    },
    {
      title: "R&D Mill Simulation",
      desc: "Simulate complex mill conditions (e.g., C-E-H-D-P bleaching sequences or continuous Fourdrinier paper forming) right in your lab.",
      icon: Factory,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Specialized R&D Machinery"
        title="Pilot Scale Plants & Reactors"
        description="High-specification laboratory scale machinery simulating industrial processing lines for pulp mills, chemical plants, and academic research institutes."
      />

      {/* Intro Overview */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <PageBackground variant="beams" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
              Bridging Laboratory Research and Industrial Production
            </h2>
            <p className="text-sm leading-relaxed text-muted-strong sm:text-base">
              <strong className="text-foreground">ANGELS INSTRUMENTS</strong> designs and manufactures pilot scale processing plants that allow mills and research bodies to test pulp processing, chemical digests, and sheet forming variables.
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Instead of running high-risk trials on full-scale commercial machinery, our pilot plants replicate industrial refining, chemical additions, bleaching sequences, and continuous forming in small, controllable, and highly monitored batches.
            </p>
            <div className="flex w-fit gap-3 rounded-xl border border-accent/20 bg-accent/10 p-3.5 text-xs font-bold text-accent-bright">
              <Award className="h-5 w-5 shrink-0 text-accent" />
              <span>Conforming to strict laboratory chemical and pressure vessel safety protocols.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel border-glow-ring relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="relative z-10 space-y-6">
                <h3 className="text-lg font-bold text-foreground">Custom Engineering Support</h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  Pilot plants are engineered to order. Contact our technical department to share your schematic drawings, required pressure/temperature ratings, and alloy requirements.
                </p>
                <Link
                  href="/contact"
                  className="glare-hover flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-bright glow-primary"
                >
                  <span>Consult Our Engineering Desk</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pilot Plants Products Grid */}
      <section className="relative overflow-hidden border-y border-border bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">Machinery Range</span>
            <SplitText as="h2" text="Standard Pilot Plant Configuration Catalog" className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-4xl" />
            <p className="text-xs text-muted sm:text-sm">
              We offer pre-configured pilot scale machinery that can be customized to support your exact chemical process parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pilotPlants.map((plant, i) => (
              <AnimatedContent key={plant.id} delay={i * 0.06}>
                <ProductCard product={plant} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <PageBackground variant="aurora" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-12">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">Manufacturing Standards</span>
            <SplitText as="h2" text="Advanced Engineering Integrations" className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-4xl" />
            <p className="text-xs text-muted sm:text-sm">
              Our pilot machinery features integrations that safeguard operators while documenting crucial test values.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {engineeringCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <AnimatedContent key={idx} delay={idx * 0.06}>
                  <SpotlightCard className="h-full space-y-4 p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                    <p className="text-xs leading-relaxed text-muted sm:text-sm">{cap.desc}</p>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
