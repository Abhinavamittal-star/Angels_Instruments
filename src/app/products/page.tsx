import React, { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Quality Control Products Catalog | ANGELS INSTRUMENTS",
  description:
    "Browse our comprehensive list of scientific laboratory instruments for paper, pulp, corrugated board, packaging, surface coating, and pharma testing.",
};

export default function ProductsPage() {
  return (
    <div className="w-full bg-white flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">
            Instruments Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Quality Control Testing Equipment
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Find the exact laboratory equipment you need. Filter by product family or search by model
            name, standards, or features.
          </p>
        </div>
      </section>

      {/* Main Interactive Directory */}
      <Suspense
        fallback={
          <div className="w-full py-20 flex justify-center items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-slate-500 font-semibold">Loading Catalog...</p>
            </div>
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </div>
  );
}
