"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  Award,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import AngelsLogo from "@/components/AngelsLogo";
import { CATEGORIES } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { openRFQ } = useRFQ();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us / Profile", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Pilot Scale Plants", href: "/pilot-plants" },
    { name: "Clientele", href: "/clientele" },
    { name: "Achievements / ISO", href: "/achievements" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full z-40">
        {/* Top Info Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Certifications */}
            <div className="flex items-center gap-1.5 font-medium text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>An ISO 9001:2008 Certified Company</span>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1">
              <a
                href="tel:+919760577862"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-500" />
                <span>+91-97605-77862</span>
              </a>
              <a
                href="mailto:info@angelsinstruments.in"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-amber-500" />
                <span>info@angelsinstruments.in</span>
              </a>
              <a
                href="https://wa.me/919760577862"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageSquare className="w-3 h-3 fill-green-400/20" />
                <span>WhatsApp Live</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <div
          className={`w-full bg-white transition-all duration-300 ${
            scrolled
              ? "sticky top-0 shadow-md border-b border-slate-100 py-3"
              : "py-4 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <AngelsLogo size="md" showText={true} />
            </Link>

            {/* Search Bar (Desktop) */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center flex-1 max-w-md relative"
            >
              <input
                type="text"
                placeholder="Search lab instruments (e.g. Bursting Strength)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-900"
                aria-label="Search button"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      <button
                        onClick={() => router.push(link.href)}
                        className={`flex items-center gap-1 text-sm font-bold transition-colors py-2 ${
                          pathname.startsWith("/products")
                            ? "text-blue-900"
                            : "text-slate-600 hover:text-blue-900"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {productsDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="px-3 py-1 text-2xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50 mb-1">
                            Browse by Category
                          </div>
                          {CATEGORIES.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products?category=${cat.slug}`}
                              className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                            >
                              <span>{cat.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-1 pt-1">
                            <Link
                              href="/products"
                              className="block px-4 py-2 text-xs font-bold text-center text-blue-900 hover:bg-blue-50 transition-colors"
                            >
                              View All Products
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive =
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold transition-colors py-2 ${
                      isActive ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-600 hover:text-blue-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => openRFQ()}
                className="hidden sm:inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all uppercase tracking-wider shrink-0"
              >
                Quick Quote
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between py-6 px-5 border-l border-slate-100 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <AngelsLogo size="sm" showText={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search instruments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs pl-3 pr-8 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-bold py-1.5 transition-colors ${
                        pathname === link.href ? "text-blue-900" : "text-slate-600 hover:text-blue-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-3 mt-1.5 border-l border-slate-100 flex flex-col gap-2">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products?category=${cat.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs font-semibold text-slate-500 hover:text-blue-900"
                          >
                            • {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom contact info inside drawer */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openRFQ();
                }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-3xs py-2.5 rounded-lg uppercase tracking-wider"
              >
                Request Quote
              </button>

              <div className="text-3xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-500">ANGELS INSTRUMENTS</p>
                <p>ISO 9001:2008 Certified Company</p>
                <p>Email: info@angelsinstruments.in</p>
                <p>Tel: +91-97605-77862</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
