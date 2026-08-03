import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  FileText,
  MessageSquare,
  Globe2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate Static Params for build pre-rendering
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | ANGELS INSTRUMENTS",
    };
  }

  return {
    title: `${product.name} | ANGELS INSTRUMENTS`,
    description: `${product.tagline}. Calibrated to conform to standards: ${product.standards.join(
      ", "
    )}.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  // To trigger RFQ dynamically on the client side, we need a wrapper client component or a global state handler.
  // Since we already have a global context that triggers on clicking a button, we can create a client component button.
  // Let's import a client component button inline or write a reusable Client-side CTA component.
  // Wait, let's create a small client-side component or just write a small client button that we import.
  // Let's create a Client Button: we can build it inline since we can use "use client" on subcomponents, or we can make a dedicated Client Button file or put it in a separate helper. Let's make a small helper button: `RFQTriggerButton.tsx`.

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3.5 px-4 sm:px-6 lg:px-8 text-2xs sm:text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500 font-semibold">
          <Link href="/" className="hover:text-blue-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-900 transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="hover:text-blue-900 transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Content Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (Main Specs) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Title & Tagline */}
            <div className="space-y-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-500 transition-colors mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Catalog
              </Link>

              <div className="space-y-1.5">
                <span className="inline-block text-4xs font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-blue-900 text-sm sm:text-lg font-bold leading-relaxed">
                  {product.tagline}
                </p>
              </div>
            </div>

            {/* Product Image (when available) */}
            {product.image && (
              <div className="relative w-full aspect-[4/3] sm:aspect-video bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Overview & Description
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Key Product Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Technical Specifications
                </h2>
                <div className="border border-slate-100 rounded-xl overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-500 uppercase text-4xs tracking-wider border-b border-slate-100">
                        <th className="px-4 py-3 font-extrabold w-1/2">Parameter</th>
                        <th className="px-4 py-3 font-extrabold w-1/2">Standard Spec Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">{key}</td>
                          <td className="px-4 py-3 text-slate-600 font-semibold">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Standards Compliance */}
            {product.standards && product.standards.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Compliance Testing Standards
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed">
                  This instrument meets and exceeds quality guidelines stipulated by international standardization bodies. Verify conformity for the following indices:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.standards.map((std) => (
                    <span
                      key={std}
                      className="text-xs font-bold bg-blue-50 text-blue-900 border border-blue-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Sidebar RFQ Form) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* RFQ Box */}
            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-md relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-blue-950/50" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-amber-400 text-2xs font-extrabold uppercase tracking-widest">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white">Request Quotation</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Contact our technical sales engineers to receive a customized quote, schematic blueprints, and operational datasheets.
                </p>
              </div>

              {/* Client Component Trigger for Quote Modal */}
              <div className="relative z-10 space-y-3 pt-2">
                <RFQPageButton productName={product.name} />
                
                <div className="text-3xs text-center text-slate-400">
                  Response within 24 business hours.
                </div>
              </div>

              {/* Specs download or ISO notice */}
              <div className="relative z-10 pt-4 border-t border-slate-800 space-y-3.5">
                <div className="flex gap-3 text-xs">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">ISO 9001:2008 Quality</p>
                    <p className="text-slate-400 text-3xs">Guarantees material grade & compliance validation.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs">
                  <Globe2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Global Exports Support</p>
                    <p className="text-slate-400 text-3xs">Packaged in customized sea-worthy wooden cases.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contacts */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Need Help with Specs?</h4>
              <div className="space-y-3 text-xs text-slate-600">
                <a
                  href="tel:+919760577862"
                  className="flex items-center gap-2.5 hover:text-blue-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>+91 97605 77862 / +91 94121 31200</span>
                </a>
                <a
                  href="mailto:info@angelsinstruments.in"
                  className="flex items-center gap-2.5 hover:text-blue-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>info@angelsinstruments.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline client component to trigger RFQ
import RFQPageButton from "./RFQPageButton";
