"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, Award } from "lucide-react";
import { Product } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openRFQ } = useRFQ();

  return (
    <SpotlightCard className="flex h-full flex-col">
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-glow-b to-accent" />

      {product.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
        <div className="space-y-2.5">
          <span className="inline-block rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-muted">
            {product.category}
          </span>

          <h3 className="line-clamp-1 text-base font-bold text-foreground transition-colors group-hover:text-primary-bright sm:text-lg">
            {product.name}
          </h3>

          <p className="line-clamp-1 text-xs font-semibold text-primary-bright/90">{product.tagline}</p>

          <p className="line-clamp-3 text-xs leading-relaxed text-muted">{product.description}</p>
        </div>

        {product.standards && product.standards.length > 0 && (
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center gap-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted">
              <Award className="h-3 w-3 text-accent" />
              <span>Compliance Standards</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.standards.slice(0, 3).map((std) => (
                <span
                  key={std}
                  className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.6rem] font-bold text-primary-bright"
                >
                  {std}
                </span>
              ))}
              {product.standards.length > 3 && (
                <span className="rounded border border-border bg-surface-2 px-2 py-0.5 text-[0.6rem] font-bold text-muted">
                  +{product.standards.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-border bg-surface/50 p-5 pt-4 sm:p-6 sm:pt-4">
        <Link
          href={`/products/${product.id}`}
          className="flex items-center justify-center gap-1.5 rounded-lg border border-border-strong py-2.5 text-center text-xs font-bold text-foreground transition-all hover:border-primary-bright hover:bg-surface-2"
        >
          <span>Specs</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <button
          onClick={() => openRFQ(product.name)}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-accent py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent-bright"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>RFQ</span>
        </button>
      </div>
    </SpotlightCard>
  );
}
