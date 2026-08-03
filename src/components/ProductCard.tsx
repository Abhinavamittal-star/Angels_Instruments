"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, Award } from "lucide-react";
import { Product } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openRFQ } = useRFQ();

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Visual Header / Gradient Accent */}
      <div className="h-3 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-700" />

      {/* Product Image (when available) */}
      {product.image && (
        <div className="relative w-full aspect-video bg-white border-b border-slate-100 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2.5">
          {/* Category Tag */}
          <span className="inline-block text-4xs font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-blue-900/90 text-xs font-semibold line-clamp-1">
            {product.tagline}
          </p>

          {/* Description */}
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Standards badges */}
        {product.standards && product.standards.length > 0 && (
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center gap-1 text-4xs font-bold uppercase tracking-wider text-slate-400">
              <Award className="w-3 h-3 text-amber-500" />
              <span>Compliance Standards</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.standards.slice(0, 3).map((std) => (
                <span
                  key={std}
                  className="text-4xs font-extrabold bg-blue-50 text-blue-900 border border-blue-100 px-2 py-0.5 rounded"
                >
                  {std}
                </span>
              ))}
              {product.standards.length > 3 && (
                <span className="text-4xs font-extrabold bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded">
                  +{product.standards.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-50 grid grid-cols-2 gap-3 bg-slate-50/50">
        <Link
          href={`/products/${product.id}`}
          className="flex items-center justify-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs py-2.5 rounded-lg hover:bg-slate-50 transition-all text-center"
        >
          <span>Specs Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => openRFQ(product.name)}
          className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs py-2.5 rounded-lg shadow-sm hover:shadow transition-all uppercase tracking-wider"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-slate-900/10" />
          <span>RFQ</span>
        </button>
      </div>
    </div>
  );
}
