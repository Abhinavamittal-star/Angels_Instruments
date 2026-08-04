"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Activity, Box, Layers, ThermometerSun, FlaskConical, Cpu } from "lucide-react";
import { Category } from "@/data/products";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Activity,
  Box,
  Layers,
  ThermometerSun,
  FlaskConical,
  Cpu,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.iconName] || FileText;

  return (
    <SpotlightCard className="h-full">
      <Link
        href={`/products?category=${category.slug}`}
        className="flex h-full flex-col justify-between p-6 sm:p-8"
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-bright/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-bright transition-all duration-300 group-hover:border-primary-bright group-hover:text-accent-bright group-hover:shadow-[0_0_20px_-4px_var(--primary)]">
            <IconComponent className="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary-bright">
              {category.name}
            </h3>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">{category.description}</p>
          </div>
        </div>

        <div className="relative z-10 mt-6 flex items-center gap-1 text-xs font-bold text-primary-bright transition-all group-hover:gap-2">
          <span>Browse Products</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </Link>
    </SpotlightCard>
  );
}
