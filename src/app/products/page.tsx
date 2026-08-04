import React, { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Quality Control Products Catalog | ANGELS INSTRUMENTS",
  description:
    "Browse our comprehensive list of scientific laboratory instruments for paper, pulp, corrugated board, packaging, surface coating, and pharma testing.",
};

export default function ProductsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        variant="beams"
        eyebrow="Instruments Catalog"
        title="Quality Control Testing Equipment"
        description="Find the exact laboratory equipment you need. Filter by product family or search by model name, standards, or features."
      />

      <Suspense
        fallback={
          <div className="flex w-full items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="font-mono text-xs font-semibold text-muted">Loading Catalog...</p>
            </div>
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </div>
  );
}
