"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, MessageSquare } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";
import AngelsLogo from "@/components/AngelsLogo";
import Magnet from "@/components/reactbits/Magnet";

export default function Footer() {
  const { openRFQ } = useRFQ();

  return (
    <footer className="relative mt-auto border-t border-border bg-surface text-muted-strong">
      {/* Top Banner CTA */}
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-r from-primary/15 via-surface to-surface px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-fade opacity-60" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="mb-2 text-xl font-bold text-foreground text-balance">
              Need a Custom Testing Solution or Urgent Quote?
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              We design and manufacture customized test equipment conforming to specific TAPPI, ASTM, ISO, and SCAN standards. Contact our engineering team for support.
            </p>
          </div>
          <Magnet>
            <button
              onClick={() => openRFQ()}
              className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent-bright glow-accent"
            >
              Get a Quote Now
            </button>
          </Magnet>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <AngelsLogo size="md" onDark />
          <p className="text-xs leading-relaxed text-muted">
            Manufacturer &amp; Exporter of Pulp, Paper, Board, Packaging, Surface Coating, Textile, and Pharma Lab Testing Instruments. An NS-EN ISO 9001:2008 Certified Company from KVQA, Norway.
          </p>
          <div className="flex w-fit items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 p-2.5 text-xs font-semibold text-accent-bright">
            <Award className="h-4 w-4 shrink-0" />
            <span>ISO 9001:2008 Certified</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 border-l-2 border-accent pl-2 text-sm font-bold uppercase tracking-wider text-foreground">
            Product Categories
          </h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products?category=${cat.slug}`} className="text-muted transition-colors hover:text-primary-bright">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 border-l-2 border-accent pl-2 text-sm font-bold uppercase tracking-wider text-foreground">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              { label: "Home Page", href: "/" },
              { label: "About Us / Profile", href: "/about" },
              { label: "Full Product Catalog", href: "/products" },
              { label: "Pilot Scale Plants", href: "/pilot-plants" },
              { label: "Clientele / Reputed Clients", href: "/clientele" },
              { label: "Achievements & ISO", href: "/achievements" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted transition-colors hover:text-primary-bright">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="mb-4 border-l-2 border-accent pl-2 text-sm font-bold uppercase tracking-wider text-foreground">
            Contact Us
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex gap-2 text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                11-B/2902, Lane No. 15,<br />
                Sahin Bagh, Saharanpur<br />
                247001 (U.P.) India
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <div className="space-y-0.5">
                <a href="tel:+919760577862" className="block text-muted transition-colors hover:text-primary-bright">+91-97605-77862</a>
                <a href="tel:+919412131200" className="block text-muted transition-colors hover:text-primary-bright">+91-94121-31200</a>
              </div>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <div className="space-y-0.5">
                <a href="mailto:info@angelsinstruments.in" className="block text-muted transition-colors hover:text-primary-bright">info@angelsinstruments.in</a>
                <a href="mailto:angelsinstruments@gmail.com" className="block text-muted transition-colors hover:text-primary-bright">angelsinstruments@gmail.com</a>
              </div>
            </li>
            <li className="flex gap-2">
              <MessageSquare className="h-4 w-4 shrink-0 text-emerald-400" />
              <a href="https://wa.me/919760577862" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
                WhatsApp: +91-97605-77862
              </a>
            </li>
          </ul>

          <div className="space-y-0.5 rounded-xl border border-border bg-card p-3 text-xs">
            <p className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted">Contact Person</p>
            <p className="font-bold text-foreground">SALEHEEN SIDDIQUI</p>
            <p className="text-muted">Sales &amp; Technical Support</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-background px-4 py-6 text-center text-xs text-muted">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Angels Instruments. All Rights Reserved.</p>
          <p className="font-mono text-muted-strong">Saharanpur, U.P. India | info@angelsinstruments.in</p>
        </div>
      </div>
    </footer>
  );
}
