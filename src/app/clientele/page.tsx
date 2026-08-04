import React from "react";
import Image from "next/image";
import { Users, Building2, FlaskConical, Factory, GraduationCap, Landmark, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageBackground from "@/components/reactbits/PageBackground";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import CountUp from "@/components/reactbits/CountUp";
import { SplitText, GradientText } from "@/components/reactbits/TextEffects";

export const metadata = {
  title: "Clientele / Reputed Clients | ANGELS INSTRUMENTS",
  description:
    "ANGELS INSTRUMENTS is trusted by reputed clients across India including National Test House, CPPRI, NIRJAFT, IIT Roorkee, ITC, L&T, BILT, Cadila, Marico, Reliance Industries, TNPL, Indian Institute of Packaging and many more paper mills, research institutes and pharmaceutical companies.",
};

export default function ClientelePage() {
  const clients: { name: string; location: string; type: keyof typeof typeMeta }[] = [
    { name: "Vikas College of Engineering & Technology", location: "Vijaywada, A.P.", type: "education" },
    { name: "Maghan Paper Mills (P) Ltd.", location: "Saharanpur, Punjab", type: "mill" },
    { name: "Larsen & Toubro (L&T)", location: "Surat, Gujarat", type: "industry" },
    { name: "ITC Limited", location: "India", type: "industry" },
    { name: "Indian Institute of Packaging (I.I.P.)", location: "Mumbai", type: "govt" },
    { name: "Cadila Pharmaceuticals Limited", location: "Gujarat", type: "pharma" },
    { name: "Forest Research Institute (F.R.I.)", location: "Dehradun, Uttarakhand", type: "research" },
    { name: "Govt. of India Stationery Office, Ministry of Urban Development", location: "Kolkata", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Kolkata", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Mumbai", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Jaipur", type: "govt" },
    { name: "National Test House, Ministry of Consumer Affairs, Govt. of India", location: "Chennai", type: "govt" },
    { name: "Tamil Nadu Newsprint & Paper Limited (TNPL)", location: "A Govt. of Tamil Nadu Enterprise", type: "mill" },
    { name: "National Institute of Research on Jute & Allied Fibre Technology (NIRJAFT)", location: "Kolkata", type: "research" },
    { name: "Central Pulp & Paper Research Institute (CPPRI), Ministry of Commerce & Industry", location: "Saharanpur, U.P.", type: "research" },
    { name: "Star Paper Mills Ltd.", location: "Saharanpur, U.P.", type: "mill" },
    { name: "Century Paper Mills", location: "India", type: "mill" },
    { name: "Sri Venkata Posavi Engineering Works", location: "Hyderabad", type: "industry" },
    { name: "Multani Pharmaceuticals Ltd.", location: "Bhagwanpur – Roorkee, Uttarakhand", type: "pharma" },
    { name: "Galpha Laboratories Ltd.", location: "Baddi, H.P.", type: "pharma" },
    { name: "Marico Ltd. (B-2, SIDCUL)", location: "Selaqui, Dehradun, Uttarakhand", type: "industry" },
    { name: "Marico Ltd.", location: "Paonta Sahib, H.P.", type: "industry" },
    { name: "Rusi Pharma Pvt Ltd.", location: "Roorkee, Uttarakhand", type: "pharma" },
    { name: "Cheema Printpac Limited", location: "Mohali, Punjab", type: "industry" },
    { name: "Sameera Papers Private Limited", location: "Andhra Pradesh", type: "mill" },
    { name: "Gemini Graphics Pvt Ltd.", location: "Bidar, Karnataka", type: "industry" },
    { name: "Naini Tissues Limited (Naini Group of Industries)", location: "Kashipur, Uttarakhand", type: "mill" },
    { name: "Ruby Macons Limited (Paper Division)", location: "Vapi, Gujarat", type: "mill" },
    { name: "J. K. Paper Ltd.", location: "Gujarat", type: "mill" },
    { name: "Cosboard Industries Limited", location: "Cuttack, Orissa", type: "mill" },
  ];

  const typeMeta = {
    govt: { label: "Govt. / National Lab", icon: Landmark },
    research: { label: "Research Institute", icon: FlaskConical },
    mill: { label: "Paper / Pulp Mill", icon: Factory },
    pharma: { label: "Pharmaceuticals", icon: Building2 },
    industry: { label: "Industry", icon: Building2 },
    education: { label: "Academic Institute", icon: GraduationCap },
  };

  const stats = [
    { value: 4, suffix: "", label: "National Test Houses Served" },
    { value: 15, suffix: "+", label: "Leading Paper & Pulp Mills" },
    { value: 10, suffix: "+", label: "Pharma & Research Labs" },
    { value: 500, suffix: "+", label: "Active Installations" },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        variant="waves"
        eyebrow="Clientele / Reputed Clients"
        title="Trusted by India's Leading Institutions"
        description="We take pride in having a long list of satisfied customers who always look up to us for their various requirements. Below are the names of a few of our major clients who reflect the goodwill we have generated over the years."
      />

      {/* Stats Bar */}
      <section className="relative overflow-hidden border-b border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-dot-fade opacity-50" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedContent key={s.label} delay={i * 0.08}>
              <div className="space-y-1 text-center">
                <p className="text-3xl font-bold sm:text-4xl">
                  <GradientText>
                    <CountUp to={s.value} suffix={s.suffix} duration={4.5} />
                  </GradientText>
                </p>
                <p className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted sm:text-xs">{s.label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <PageBackground variant="waves" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-16">
          {/* Marquee Brands Wall */}
          <div className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-2 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">Marquee Clients</span>
              <SplitText as="h2" text="Names That Trust Our Instruments" className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl" />
              <p className="text-xs text-muted sm:text-sm">
                From national testing houses and premier research institutes to leading paper mills and pharmaceutical majors — our equipment powers quality control across industries.
              </p>
            </div>
            <SpotlightCard className="p-4 sm:p-6">
              <div className="overflow-hidden rounded-lg bg-foreground/95 p-4">
                <Image
                  src="/clients/client-logos.png"
                  alt="Logo wall of Angels Instruments clients including BILT, Cadila Pharmaceuticals, ITC Limited, Indoco Remedies, Larsen & Toubro, Forest Research Institute, Star Paper Mills, CPPRI, B K Birla Group, Marico, Three M Paper, TNPL, Reliance Industries and Indian Institute of Packaging"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </SpotlightCard>
          </div>

          {/* Full Client List */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Our Valued Clients</h2>
                <p className="text-xs text-muted sm:text-sm">A representative list of organizations we proudly serve.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, idx) => {
                const meta = typeMeta[client.type];
                const Icon = meta.icon;
                return (
                  <SpotlightCard key={idx} className="flex gap-3 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-bright">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-sm font-bold leading-snug text-foreground text-pretty">{client.name}</h3>
                      <p className="text-[0.7rem] font-semibold text-muted">{client.location}</p>
                      <span className="inline-block rounded border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-wider text-accent-bright">
                        {meta.label}
                      </span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            <p className="pt-2 text-center text-xs font-semibold italic text-muted">
              …and so many other satisfied clients across India and international markets.
            </p>
          </div>

          {/* Trust Callout */}
          <div className="glass-panel border-glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-accent-bright">Why Clients Choose Us</span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">Long-Term Relationships Built on Quality</h2>
              <p className="text-xs leading-relaxed text-muted-strong sm:text-sm">
                Most of our customers are satisfied with our products and services, and as a result we receive repeat orders. Our instruments are installed, calibrated, and certified working satisfactorily at India&apos;s most demanding research and industrial laboratories.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2 text-xs font-semibold text-muted-strong sm:grid-cols-2">
                {[
                  "Repeat orders from national testing houses",
                  "Certified installations at CPPRI & IIT Roorkee",
                  "Serving paper mills nationwide",
                  "Trusted by leading pharma manufacturers",
                ].map((pt) => (
                  <div key={pt} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
