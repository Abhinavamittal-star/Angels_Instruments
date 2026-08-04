import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, BookOpen, Star, Building } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageBackground from "@/components/reactbits/PageBackground";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { SplitText } from "@/components/reactbits/TextEffects";

export const metadata = {
  title: "Achievements & ISO 9001:2008 Certifications | ANGELS INSTRUMENTS",
  description: "Review our corporate achievements including certificates from CPPRI and IIT Roorkee, ISO 9001:2008 certification from KVQA Norway, and standards compliance for lab testing instruments.",
};

export default function AchievementsPage() {
  const credentials = [
    { title: "NS-EN ISO 9001:2008 Certified", desc: "Certified by KVQA, Norway. Our quality system fulfills NS-EN ISO 9001-2008/ISO 9001:2008 requirements for manufacturing, calibration, assembly, and post-sales support.", icon: Award },
    { title: "Central Pulp & Paper Research Institute", desc: "Our Paper & Pulp Lab Testing Instruments supplied, installed & calibrated at CPPRI, Saharanpur (U.P.) India are working satisfactorily.", icon: Building },
    { title: "IIT Roorkee – Department of Paper Technology", desc: "Our Pulp Lab Testing Instruments supplied at IIT Roorkee (Saharanpur Campus) are certified and working satisfactorily per their assessment.", icon: BookOpen },
    { title: "High Domestic Market Recognition", desc: "Strong recognition in the domestic market with focus on quality compliance of paper testing equipment, headed by a qualified team of professionals.", icon: Star },
  ];

  const certificates = [
    { src: "/certificates/cppri.png", title: "Central Pulp & Paper Research Institute (CPPRI)", org: "Paper Making Lab · Saharanpur, U.P." },
    { src: "/certificates/iit-roorkee.png", title: "Indian Institute of Technology Roorkee", org: "Department of Paper Technology" },
    { src: "/certificates/nth-kolkata.png", title: "National Test House (ER), Kolkata", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-mumbai.png", title: "National Test House (WR), Mumbai", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-chennai.png", title: "National Test House (SR), Chennai", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/nth-jaipur.png", title: "National Test House (NWR), Jaipur", org: "Smoothness & Porosity Tester" },
    { src: "/certificates/rajasthan-barytes.png", title: "Rajasthan Barytes Limited, Udaipur", org: "Abrasion Tester Performance Report" },
  ];

  const standardsMatrix = [
    { standard: "TAPPI T-403 / T-804", application: "Bursting Strength & Box Compression", status: "Fully Compliant" },
    { standard: "ISO 2758 / 535 / 5267", application: "Paper Burst, Cobb Absorption, Pulp Freeness", status: "Fully Compliant" },
    { standard: "ASTM D3786 / D642", application: "Diaphragm Burst & Carton Stacking Test", status: "Fully Compliant" },
    { standard: "SCAN P-11 / C-21 / C-25", application: "Elmendorf Tear, Canadian Freeness, Valley Refining", status: "Fully Compliant" },
    { standard: "DIN 53142 / 50021", application: "Puncture Resistance & Salt Spray Corrosion", status: "Fully Compliant" },
    { standard: "USP Chapter <711> / <701>", application: "Pharma Dissolution and Disintegration", status: "Fully Compliant" },
  ];

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow="Corporate Credentials"
        title="Quality Certifications & Achievements"
        description="Trusted by leading research institutions like CPPRI and IIT Roorkee. ISO 9001:2008 certified by KVQA, Norway."
      />

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <PageBackground variant="grid" />
        <div className="relative z-10 mx-auto max-w-7xl space-y-16">
          {/* Credentials Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <AnimatedContent key={idx} delay={idx * 0.06}>
                  <SpotlightCard className="flex h-full flex-col justify-between p-6">
                    <div className="space-y-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright"><Icon className="h-5 w-5" /></div>
                      <h3 className="text-base font-bold text-foreground">{cred.title}</h3>
                      <p className="text-xs leading-relaxed text-muted">{cred.desc}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-primary-bright">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Verified</span>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>

          {/* Certificate Highlights */}
          <div className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-2 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-bright">Client Recognition</span>
              <SplitText as="h2" text="Certificates from Esteemed Institutions" className="block text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl" />
              <p className="text-xs text-muted sm:text-sm">Our instruments are installed and certified working satisfactorily at India&apos;s premier research laboratories.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, i) => (
                <AnimatedContent key={cert.src} delay={i * 0.05}>
                  <SpotlightCard className="flex h-full flex-col">
                    <div className="glare-hover relative aspect-[3/4] w-full overflow-hidden border-b border-border bg-surface-2">
                      <Image
                        src={cert.src || "/placeholder.svg"}
                        alt={`Installation and performance certificate from ${cert.title}`}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="space-y-1 p-4">
                      <div className="flex items-center gap-1.5 text-accent-bright">
                        <ShieldCheck className="h-4 w-4 shrink-0" />
                        <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted">Verified Certificate</span>
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-foreground text-pretty">{cert.title}</h3>
                      <p className="text-[0.7rem] font-semibold text-muted">{cert.org}</p>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              ))}
            </div>
          </div>

          {/* ISO Certification Highlight */}
          <div className="glass-panel border-glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="space-y-5 lg:col-span-7">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-bright">
                  <Award className="h-5 w-5 shrink-0" />
                  <span>Quality Assurance Standard</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">NS-EN ISO 9001:2008 Quality Framework</h2>
                <p className="text-xs leading-relaxed text-muted-strong sm:text-sm">
                  Certified by <strong className="text-accent-bright">KVQA, Norway</strong> — our operation manuals demand complete traceability of metals, electronic parts, and calibration devices. We maintain a log sheet for every machine assembled, indexing load tests, calibration certificates, and inspection clearances.
                </p>
                <div className="grid grid-cols-1 gap-3 pt-2 text-xs font-semibold text-muted-strong sm:grid-cols-2">
                  {["Traceable Calibration Standards", "Raw Material Quality Control", "Documentation Traceability", "72-Hour Stress Inspections", "Physical Dimension Verification", "Analytical Data Methods"].map((pt) => (
                    <div key={pt} className="flex gap-2">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:col-span-5">
                <div className="animate-pulse-ring flex h-52 w-52 flex-col items-center justify-center space-y-2 rounded-2xl border border-border-strong bg-surface-2 p-6 text-center">
                  <Award className="h-14 w-14 text-accent" />
                  <div>
                    <p className="text-sm font-bold leading-none text-foreground">NS-EN ISO 9001:2008</p>
                    <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-widest text-muted">KVQA Certified – Norway</p>
                  </div>
                  <p className="font-mono text-[0.55rem] font-bold uppercase tracking-wider text-muted">ANGELS INSTRUMENTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Standards Compliance Table */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Global Testing Standards Compliance Matrix</h2>
              <p className="text-xs text-muted sm:text-sm">Lab results from our instruments align with requirements established by these international bodies.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-2 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    <th className="w-1/3 px-4 py-3 font-bold">International Standards</th>
                    <th className="w-1/2 px-4 py-3 font-bold">Application & Instrument Lines</th>
                    <th className="w-1/6 px-4 py-3 text-right font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {standardsMatrix.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-surface/40"}>
                      <td className="px-4 py-3 font-bold text-foreground">{item.standard}</td>
                      <td className="px-4 py-3 font-semibold text-muted-strong">{item.application}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-block rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-wider text-emerald-400">{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
