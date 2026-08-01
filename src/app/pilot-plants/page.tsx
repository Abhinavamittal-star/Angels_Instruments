import React from "react";
import Link from "next/link";
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Factory, Settings } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Pilot Scale Plants & R&D Machinery | ANGELS INSTRUMENTS",
  description:
    "Explore our custom lab-scale continuous and batch processing plants, including Rotary Digesters, Bleaching Reactors, and continuous Fourdrinier paper maker pilot plants.",
};

export default function PilotPlantsPage() {
  // Filter for pilot plant items
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
    <div className="w-full bg-white flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">
            Specialized R&D Machinery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Pilot Scale Plants & Reactors
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            High-specification laboratory scale machinery simulating industrial processing lines for pulp mills, chemical plants, and academic research institutes.
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Bridging Laboratory Research and Industrial Production
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              **ANGELS INSTRUMENTS** designs and manufactures pilot scale processing plants that allow mills and research bodies to test pulp processing, chemical digests, and sheet forming variables.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instead of running high-risk trials on full-scale commercial machinery, our pilot plants replicate industrial refining, chemical additions, bleaching sequences, and continuous forming in small, controllable, and highly monitored batches.
            </p>
            <div className="flex gap-3 text-xs text-amber-600 font-bold bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl w-fit">
              <Award className="w-5 h-5 shrink-0" />
              <span>Conforming to strict laboratory chemical and pressure vessel safety protocols.</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Custom Engineering Support</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Pilot plants are engineered to order. Contact our technical department to share your schematic drawings, required pressure/temperature ratings, and alloy requirements.
            </p>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs py-3 rounded-lg shadow uppercase tracking-wider transition-colors"
            >
              <span>Consult Our Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Pilot Plants Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900">
              Machinery Range
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Standard Pilot Plant Configuration Catalog
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We offer pre-configured pilot scale machinery that can be customized to support your exact chemical process parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {pilotPlants.map((plant) => (
              <ProductCard key={plant.id} product={plant} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900">
              Manufacturing Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Advanced Engineering Integrations
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our pilot machinery features integrations that safeguard operators while documenting crucial test values.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engineeringCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
