"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Activity, Box, Layers, ThermometerSun, FlaskConical, Cpu } from "lucide-react";
import { Category } from "@/data/products";

const iconMap: Record<string, React.ComponentType<any>> = {
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
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-900/10 transition-all duration-300 overflow-hidden"
    >
      {/* Blue Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 group-hover:bg-blue-900 transition-colors" />

      {/* Decorative background shape */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-slate-50 group-hover:bg-blue-50/50 transition-colors duration-300" />

      <div className="relative z-10 space-y-4">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
            {category.name}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-1 text-xs font-bold text-blue-900 mt-6 group-hover:gap-2 transition-all">
        <span>Browse Products</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}
