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
  Globe2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Metadata } from "next";
import RFQPageButton from "./RFQPageButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return { title: "Product Not Found | ANGELS INSTRUMENTS" };
  }

  return {
    title: `${product.name} | ANGELS INSTRUMENTS`,
    description: `${product.tagline}. Calibrated to conform to standards: ${product.standards.join(", ")}.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) notFound();

  return (
    <div className="flex w-full flex-col">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface px-4 py-3.5 text-[0.7rem] sm:px-6 sm:text-xs lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 font-semibold text-muted">
          <Link href="/" className="transition-colors hover:text-primary-bright">Home</Link>
          <span>/</span>
          <Link href="/products" className="transition-colors hover:text-primary-bright">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.categorySlug}`} className="transition-colors hover:text-primary-bright">
            {product.category}
          </Link>
          <span>/</span>
          <span className="max-w-[200px] truncate font-bold text-foreground sm:max-w-none">{product.name}</span>
        </div>
      </div>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

          {/* Left column */}
          <div className="space-y-10 lg:col-span-8">
            <div className="space-y-3">
              <Link
                href="/products"
                className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary-bright transition-colors hover:text-accent-bright"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Catalog
              </Link>

              <div className="space-y-1.5">
                <span className="inline-block rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-muted">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
                  {product.name}
                </h1>
                <p className="text-sm font-bold leading-relaxed text-primary-bright sm:text-lg">{product.tagline}</p>
              </div>
            </div>

            {product.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface-2 sm:aspect-video">
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

            <div className="space-y-4">
              <h2 className="border-b border-border pb-2 text-lg font-bold text-foreground">Overview &amp; Description</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-strong">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="border-b border-border pb-2 text-lg font-bold text-foreground">Key Product Features</h2>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-muted-strong sm:text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-4">
                <h2 className="border-b border-border pb-2 text-lg font-bold text-foreground">Technical Specifications</h2>
                <div className="overflow-hidden rounded-xl border border-border">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-border bg-surface-2 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                        <th className="w-1/2 px-4 py-3 font-bold">Parameter</th>
                        <th className="w-1/2 px-4 py-3 font-bold">Standard Spec Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-surface/40"}>
                          <td className="px-4 py-3 font-bold text-foreground">{key}</td>
                          <td className="px-4 py-3 font-semibold text-muted-strong">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {product.standards && product.standards.length > 0 && (
              <div className="space-y-4">
                <h2 className="border-b border-border pb-2 text-lg font-bold text-foreground">Compliance Testing Standards</h2>
                <p className="text-xs leading-relaxed text-muted">
                  This instrument meets and exceeds quality guidelines stipulated by international standardization bodies. Verify conformity for the following indices:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.standards.map((std) => (
                    <span
                      key={std}
                      className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary-bright"
                    >
                      <Award className="h-3.5 w-3.5 text-accent" />
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="glass-panel border-glow-ring relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-bright">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-foreground">Request Quotation</h3>
                <p className="text-xs leading-relaxed text-muted">
                  Contact our technical sales engineers to receive a customized quote, schematic blueprints, and operational datasheets.
                </p>
              </div>

              <div className="relative z-10 space-y-3 pt-4">
                <RFQPageButton productName={product.name} />
                <div className="text-center font-mono text-[0.65rem] text-muted">Response within 24 business hours.</div>
              </div>

              <div className="relative z-10 space-y-3.5 border-t border-border pt-4">
                <div className="flex gap-3 text-xs">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">ISO 9001:2008 Quality</p>
                    <p className="text-[0.65rem] text-muted">Guarantees material grade &amp; compliance validation.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs">
                  <Globe2 className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Global Exports Support</p>
                    <p className="text-[0.65rem] text-muted">Packaged in customized sea-worthy wooden cases.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
              <h4 className="text-sm font-bold text-foreground">Need Help with Specs?</h4>
              <div className="space-y-3 text-xs text-muted-strong">
                <a href="tel:+919760577862" className="flex items-center gap-2.5 transition-colors hover:text-primary-bright">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span>+91 97605 77862 / +91 94121 31200</span>
                </a>
                <a href="mailto:info@angelsinstruments.in" className="flex items-center gap-2.5 transition-colors hover:text-primary-bright">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
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
