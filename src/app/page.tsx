import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Target, Globe2, Phone, Mail, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import { CATEGORIES } from "@/data/products";

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

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                Welcome to Angels Instruments
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                High-Precision Scientific Testing Instruments for Global Industries
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For over a decade, **ANGELS INSTRUMENTS** has stood as a trusted manufacturer and exporter
              of laboratory testing equipment. An **ISO 9001:2008 Certified Company**, we design,
              engineer, and calibrate instruments that evaluate the mechanical, physical, and optical
              properties of Pulp, Paper, Board, Packaging, Surface Coatings, Textile, and Pharmaceuticals.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our products are used by R&D laboratories, paper mills, packaging plants, printing presses,
              and pharmaceutical laboratories across India and international markets to enforce strict quality
              controls and verify performance standards.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-5 py-3 rounded-lg shadow transition-all uppercase tracking-wider"
              >
                Read Corporate Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs px-5 py-3 rounded-lg hover:bg-slate-50 transition-all uppercase tracking-wider"
              >
                Contact Our Engineers
              </Link>
            </div>
          </div>

          {/* Quick Contact / Overview Panel */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-lg">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />

            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <span className="text-amber-400 text-2xs font-extrabold uppercase tracking-widest">
                  Quick Connect
                </span>
                <h3 className="text-xl font-bold text-white">Direct Sales Desk</h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our sales or technical engineering desk to request a catalog, discuss custom specifications, or check standard delivery timelines.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+9198100XXXXX"
                  className="flex items-center gap-3.5 group p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/50 text-amber-400 flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-3xs text-slate-400 font-semibold uppercase">Call Technical Support</p>
                    <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      +91-98100-XXXXX
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sales@angelsinstruments.com"
                  className="flex items-center gap-3.5 group p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/50 text-amber-400 flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-3xs text-slate-400 font-semibold uppercase">Email Specifications</p>
                    <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      sales@angelsinstruments.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-2 text-center border-t border-slate-800 text-3xs text-slate-400">
                ANGELS INSTRUMENTS • ISO 9001:2008 Certified Company
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900">
              Product Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Select Your Quality Testing Discipline
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We engineer advanced scientific solutions across seven major testing domains, guaranteeing
              accurate results and durable performance.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900">
              Why Angels Instruments
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Built for Heavy-Duty Lab Operations
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our machinery is designed to withstand the rigorous routines of continuous industrial labs while
              supplying researchers with accurate data points.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-bold text-xs tracking-widest uppercase">
              <Award className="w-4 h-4" />
              <span>ISO 9001:2008 Certified Quality System</span>
            </div>
            <p className="text-sm text-slate-300 max-w-xl">
              Our manufacturing facilities run on strict ISO standard operating procedures, ensuring material
              traceability and rigorous calibration verification.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0 flex-wrap justify-center">
            <span className="text-2xs font-extrabold border border-slate-700 bg-slate-800/40 text-slate-300 px-3 py-1.5 rounded">
              TAPPI CONFORMANT
            </span>
            <span className="text-2xs font-extrabold border border-slate-700 bg-slate-800/40 text-slate-300 px-3 py-1.5 rounded">
              ASTM COMPLIANT
            </span>
            <span className="text-2xs font-extrabold border border-slate-700 bg-slate-800/40 text-slate-300 px-3 py-1.5 rounded">
              ISO COMPATIBLE
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
