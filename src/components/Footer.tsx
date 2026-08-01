"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, MessageSquare } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";
import AngelsLogo from "@/components/AngelsLogo";

export default function Footer() {
  const { openRFQ } = useRFQ();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-auto">
      {/* Top Banner CTA */}
      <div className="bg-gradient-to-r from-blue-950 to-slate-900 border-b border-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Testing Solution or Urgent Quote?</h3>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              We design and manufacture customized test equipment conforming to specific TAPPI, ASTM, ISO, and SCAN standards. Contact our engineering team for support.
            </p>
          </div>
          <button
            onClick={() => openRFQ()}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wider shrink-0"
          >
            Get a Quote Now
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <AngelsLogo size="md" showText={true} />
          <p className="text-slate-400 text-xs leading-relaxed">
            Manufacturer &amp; Exporter of Pulp, Paper, Board, Packaging, Surface Coating, Textile, and Pharma Lab Testing Instruments. An NS-EN ISO 9001:2008 Certified Company from KVQA, Norway.
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold bg-blue-950/50 border border-blue-900/50 p-2.5 rounded-lg w-fit">
            <Award className="w-4 h-4 shrink-0 text-amber-400" />
            <span>ISO 9001:2008 Certified</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Product Categories</h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products?category=${cat.slug}`} className="text-slate-400 hover:text-white transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {[
              { label: "Home Page", href: "/" },
              { label: "About Us / Profile", href: "/about" },
              { label: "Full Product Catalog", href: "/products" },
              { label: "Pilot Scale Plants", href: "/pilot-plants" },
              { label: "Achievements & ISO", href: "/achievements" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">Contact Us</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                11-B/2902, Lane No. 15,<br />
                Sahin Bagh, Saharanpur<br />
                247001 (U.P.) India
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="space-y-0.5">
                <a href="tel:+919760577862" className="block text-slate-400 hover:text-white transition-colors">+91-97605-77862</a>
                <a href="tel:+919412131200" className="block text-slate-400 hover:text-white transition-colors">+91-94121-31200</a>
              </div>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="space-y-0.5">
                <a href="mailto:info@angelsinstruments.in" className="block text-slate-400 hover:text-white transition-colors">info@angelsinstruments.in</a>
                <a href="mailto:angelsinstruments@gmail.com" className="block text-slate-400 hover:text-white transition-colors">angelsinstruments@gmail.com</a>
              </div>
            </li>
            <li className="flex gap-2">
              <MessageSquare className="w-4 h-4 text-green-400 shrink-0" />
              <a href="https://wa.me/919760577862" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                WhatsApp: +91-97605-77862
              </a>
            </li>
          </ul>

          {/* Contact Person */}
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs space-y-0.5">
            <p className="text-slate-400 font-bold uppercase tracking-wider text-4xs">Contact Person</p>
            <p className="font-bold text-white">SALEHEEN SIDDIQUI</p>
            <p className="text-slate-400">Sales & Technical Support</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 py-6 px-4 border-t border-slate-900 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Angels Instruments. All Rights Reserved.</p>
          <p className="text-slate-400">Saharanpur, U.P. India | info@angelsinstruments.in</p>
        </div>
      </div>
    </footer>
  );
}
