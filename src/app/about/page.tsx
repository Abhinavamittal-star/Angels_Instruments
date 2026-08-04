import React from "react";
import { Award, ShieldCheck, CheckCircle2, Factory, Globe2, Users, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageBackground from "@/components/reactbits/PageBackground";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import CountUp from "@/components/reactbits/CountUp";

export const metadata = {
  title: "About Us / Company Profile | ANGELS INSTRUMENTS",
  description: "ANGELS INSTRUMENTS is an NS-EN ISO 9001:2008 / ISO 9001:2008 Certified Company from KVQA Norway. Manufacturers & Exporters of Pulp, Paper, Board, Packaging, Textile and Pharma Lab Testing Instruments, based in Saharanpur, U.P., India.",
};

export default function About() {
  const highlights = [
    { title: "NS-EN ISO 9001:2008 Certified", desc: "Certified by KVQA, Norway — our quality assurance system fulfills NS-EN ISO 9001:2008 / ISO 9001:2008 requirements for manufacturing, testing, and calibration.", icon: Award },
    { title: "State-of-the-Art Production", desc: "Equipped with CNC machining, precision grinding, and calibration equipment in our Saharanpur factory. All products are dimension-verified before dispatch.", icon: Factory },
    { title: "Global Export Network", desc: "We regularly export testing instruments internationally, packaged in heavy-duty sea-worthy wooden cases.", icon: Globe2 },
    { title: "R&D Expert Team", desc: "Our team of specialist engineers and technocrats is actively involved in R&D to provide more user-friendly, reliable and industry-specific instruments.", icon: Users },
  ];

  const productPortfolio = [
    "Paper Testing Instruments",
    "Pulp Testing Instruments",
    "Packaging Testing Instruments",
    "Surface Coating Instruments",
    "Environmental Testing Instruments",
    "Textile Testing Instruments",
    "Pharmacy Lab Testing Instruments",
  ];

  const qualityPoints = [
    "Verification of raw metals and electrical components prior to production.",
    "Component-level testing of load cells, encoders, and pressure transducers.",
    "Rigorous calibration cycles using reference devices traceable to national standards.",
    "72-hour continuous burn-in tests for all electronic and microprocessor components.",
    "Physical property and dimension measurements verified analytically using data-driven methods.",
  ];

  const stats: { value: number; suffix?: string; display?: string; label: string }[] = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Countries Exported" },
    { value: 0, display: "ISO", label: "KVQA Certified" },
    { value: 500, suffix: "+", label: "Active Installations" },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="About Our Company"
        title="Corporate Profile & History"
        description="A highly renowned name — ANGELS INSTRUMENTS is a reputed manufacturer of Pulp, Paper, Board, Packaging, Textile and Pharmacy Lab testing equipment."
      />

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <PageBackground variant="aurora" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-16">
          {/* About Text + Quick Stats */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">Corporate Profile</span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">Our Corporate Profile</h2>
              <p className="text-sm leading-relaxed text-muted-strong">
                <strong className="text-foreground">ANGELS INSTRUMENTS</strong> is an NS-EN ISO 9001-2008 / ISO 9001:2008 Certified Company from KVQA, Norway. We are a reputed manufacturer of Pulp, Paper, Board, Packaging, Textile and Pharmacy Lab testing equipment. We offer an exclusive range of testing equipment that is accepted and appreciated for their quality, precision and durability.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                We ensure international standards of quality in our product range, packaging, and delivery. Quality and Customer satisfaction are the two basic pillars of our company. We as manufacturers believe in creating goodwill rather than earning short-term profits, hence our products are never found to be below standard quality measures.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                We also undertake fabrication jobs as per the requirements of our clients. Ever since inception, we have always achieved a good growth rate and success — a result of our dedication, pursuance and efficient service to trade and industry.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                We are a customer-oriented company and work in close coordination with our clients to provide efficient solutions to their testing needs for Pulp, Paper, Textile, Pharmacy, Board and Packaging industries.
              </p>

              {/* Mission */}
              <div className="glass-panel space-y-3 rounded-xl border border-border p-5">
                <h3 className="text-base font-bold text-primary-bright">Our Mission</h3>
                <ul className="space-y-2 text-sm text-muted-strong">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>To ensure 100% customer satisfaction by achieving excellence in our products and services.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>To provide the highest quality testing equipment at industry leading prices, without any compromise of quality.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Stats Panel */}
            <div className="space-y-5 lg:col-span-5">
              <SpotlightCard className="p-6 sm:p-8">
                <h3 className="border-b border-border pb-3 text-lg font-bold text-foreground">Key Operations</h3>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="space-y-1">
                      <p className="text-2xl font-bold text-primary-bright">
                        {s.display ? s.display : <CountUp to={s.value} suffix={s.suffix} duration={2} />}
                      </p>
                      <p className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-1 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center text-xs">
                  <p className="font-mono font-bold uppercase tracking-wider text-accent-bright">Quality Policy</p>
                  <p className="leading-relaxed text-muted-strong">&ldquo;To manufacture, calibrate, and supply test instruments that strictly fulfill international standards, ensuring repeatable accuracy and complete client satisfaction.&rdquo;</p>
                </div>
              </SpotlightCard>

              {/* Product Portfolio */}
              <SpotlightCard className="p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <BookOpen className="h-4 w-4 text-primary-bright" /> Product Portfolio
                </h3>
                <p className="mt-2 text-xs text-muted">We are offering various kinds of testing instruments as follows:</p>
                <ul className="mt-4 space-y-1.5">
                  {productPortfolio.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-semibold text-muted-strong">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedContent key={idx} delay={idx * 0.06}>
                  <SpotlightCard className="h-full space-y-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright"><Icon className="h-5 w-5" /></div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground sm:text-base">{item.title}</h4>
                      <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>

          {/* R&D Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="glass-panel border-glow-ring relative overflow-hidden rounded-2xl p-8">
              <div className="relative z-10 space-y-3">
                <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-accent-bright">R&D Focus</span>
                <h3 className="text-xl font-bold text-foreground">Research &amp; Development</h3>
                <p className="text-xs leading-relaxed text-muted-strong sm:text-sm">
                  We have a team of specialist engineers and technocrats who are actively involved in R&D for the development of new test methods and hence to provide more user-friendly, reliable and industry specific testing instruments. Our professionals not only have vast technical knowledge but also experience in managing customer relationships.
                </p>
              </div>
            </div>

            <SpotlightCard className="space-y-4 p-8">
              <h3 className="text-xl font-bold text-foreground">Quality Assurance</h3>
              <p className="text-xs leading-relaxed text-muted">
                With the help of our experienced quality checking team, we consistently strive towards meeting the diverse needs of our clients and offer test equipment as per international production norms. We carry out various tests to check the physical property and dimension measurements of our products.
              </p>
              <div className="space-y-2.5 pt-2">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-muted-strong">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex w-fit items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-bold text-accent-bright">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>ISO 9001:2008 — KVQA, Norway</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}
