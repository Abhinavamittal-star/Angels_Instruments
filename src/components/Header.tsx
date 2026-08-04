"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  CornerDownLeft,
} from "lucide-react";
import AngelsLogo from "@/components/AngelsLogo";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { useRFQ } from "@/context/RFQContext";
import StarBorder from "@/components/reactbits/StarBorder";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { openRFQ } = useRFQ();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setDesktopSearchOpen(false);
    setMobileSearchOpen(false);
  }, [pathname]);

  // Live search across ALL instruments — including pilot plant units — updated
  // on every keystroke. Ranked so name matches surface before category matches.
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return PRODUCTS.map((p) => {
      const name = p.name.toLowerCase();
      let score = -1;
      if (name.startsWith(q)) score = 0;
      else if (name.includes(q)) score = 1;
      else if (p.tagline.toLowerCase().includes(q)) score = 2;
      else if (p.category.toLowerCase().includes(q)) score = 3;
      else if (p.description.toLowerCase().includes(q)) score = 4;
      return { product: p, score };
    })
      .filter((r) => r.score >= 0)
      .sort((a, b) => a.score - b.score)
      .slice(0, 8)
      .map((r) => r.product);
  }, [searchQuery]);

  const goToProduct = (id: string) => {
    setSearchQuery("");
    setDesktopSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileMenuOpen(false);
    router.push(`/products/${id}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    // Enter on a single match jumps straight to that instrument.
    if (searchResults.length === 1) {
      goToProduct(searchResults[0].id);
      return;
    }
    router.push(`/products?search=${encodeURIComponent(q)}`);
    setSearchQuery("");
    setDesktopSearchOpen(false);
    setMobileSearchOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Pilot Plants", href: "/pilot-plants" },
    { name: "Clientele", href: "/clientele" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-40 w-full">
        {/* Top Info Bar */}
        <div className="border-b border-border/60 bg-surface/80 px-4 py-2 text-xs text-muted backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
            <div className="flex items-center gap-1.5 font-medium text-accent-bright">
              <Award className="h-3.5 w-3.5" />
              <span className="font-mono tracking-wide">An ISO 9001:2008 Certified Company</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
              <a href="tel:+919760577862" className="flex items-center gap-1 transition-colors hover:text-foreground">
                <Phone className="h-3 w-3 text-accent" />
                <span>+91-97605-77862</span>
              </a>
              <a href="mailto:info@angelsinstruments.in" className="flex items-center gap-1 transition-colors hover:text-foreground">
                <Mail className="h-3 w-3 text-accent" />
                <span>info@angelsinstruments.in</span>
              </a>
              <a
                href="https://wa.me/919760577862"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <MessageSquare className="h-3 w-3 fill-emerald-400/20" />
                <span>WhatsApp Live</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full border-b transition-all duration-300 ${
            scrolled
              ? "border-border bg-background/85 py-2.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-border/40 bg-background/60 py-3.5 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="Angels Instruments home">
              <AngelsLogo size="md" onDark />
            </Link>

            {/* Search (Desktop) */}
            <div className="relative hidden max-w-md flex-1 md:block">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search lab instruments..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setDesktopSearchOpen(true);
                  }}
                  onFocus={() => setDesktopSearchOpen(true)}
                  onBlur={() => setTimeout(() => setDesktopSearchOpen(false), 150)}
                  className="w-full rounded-full border border-border bg-surface/70 py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary-bright focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-primary-bright"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>

              <AnimatePresence>
                {desktopSearchOpen && searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="glass-panel absolute left-0 right-0 top-full z-50 mt-2 max-h-[26rem] overflow-y-auto rounded-xl py-2 shadow-2xl"
                  >
                    {searchResults.length > 0 ? (
                      <>
                        <div className="border-b border-border px-4 pb-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                          {searchResults.length} instrument{searchResults.length === 1 ? "" : "s"} found
                        </div>
                        {searchResults.map((p) => (
                          <button
                            key={p.id}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => goToProduct(p.id)}
                            className="flex w-full items-center justify-between gap-3 px-4 py-2 text-left transition-colors hover:bg-surface-2"
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-xs font-bold text-foreground">{p.name}</span>
                              <span className="block truncate font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                                {p.category}
                              </span>
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary-bright" />
                          </button>
                        ))}
                        <div className="mt-1 border-t border-border pt-1">
                          <button
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleSearchSubmit}
                            className="flex w-full items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-primary-bright transition-colors hover:bg-primary/10"
                          >
                            <CornerDownLeft className="h-3.5 w-3.5" />
                            View all results for &ldquo;{searchQuery.trim()}&rdquo;
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-4 text-center text-xs text-muted">
                        No instruments match &ldquo;{searchQuery.trim()}&rdquo;.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pill Nav (Desktop) */}
            <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface/50 p-1 xl:flex">
              {navLinks.map((link) => {
                const active = link.hasDropdown ? pathname.startsWith("/products") : isLinkActive(link.href);
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
                        className={`relative flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                          active ? "text-primary-foreground" : "text-muted-strong hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-primary glow-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {link.name}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>

                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                          >
                            <div className="glass-panel overflow-hidden rounded-xl py-2 shadow-2xl">
                              <div className="mb-1 border-b border-border px-4 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                                Browse by Category
                              </div>
                              {CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  href={`/products?category=${cat.slug}`}
                                  className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-muted-strong transition-colors hover:bg-surface-2 hover:text-primary-bright"
                                >
                                  <span>{cat.name}</span>
                                  <ArrowRight className="h-3.5 w-3.5 text-muted" />
                                </Link>
                              ))}
                              <div className="mt-1 border-t border-border pt-1">
                                <Link
                                  href="/products"
                                  className="block px-4 py-2 text-center text-xs font-bold text-primary-bright transition-colors hover:bg-primary/10"
                                >
                                  View All Products
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      active ? "text-primary-foreground" : "text-muted-strong hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary glow-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <StarBorder
                onClick={() => openRFQ()}
                className="hidden sm:inline-flex"
              >
                <span className="glare-hover inline-flex w-full items-center justify-center rounded-[calc(0.5rem-1px)] bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-colors group-hover:bg-accent-bright">
                  Quick Quote
                </span>
              </StarBorder>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-lg p-2 text-muted-strong transition-colors hover:bg-surface-2 hover:text-foreground xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex xl:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="glass-panel relative ml-auto flex h-full w-full max-w-xs flex-col justify-between px-5 py-6 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-6">
                  <AngelsLogo size="sm" onDark />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg p-1 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Search instruments..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setMobileSearchOpen(true);
                      }}
                      className="w-full rounded-lg border border-border bg-surface/70 py-2 pl-3 pr-8 text-xs text-foreground placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted" aria-label="Search">
                      <Search className="h-4 w-4" />
                    </button>
                  </form>

                  {mobileSearchOpen && searchQuery.trim() && (
                    <div className="mt-2 max-h-56 overflow-y-auto rounded-lg border border-border bg-surface-2/60 py-1">
                      {searchResults.length > 0 ? (
                        searchResults.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => goToProduct(p.id)}
                            className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left transition-colors hover:bg-surface-2"
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-xs font-bold text-foreground">{p.name}</span>
                              <span className="block truncate font-mono text-[0.55rem] uppercase tracking-wider text-muted">
                                {p.category}
                              </span>
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary-bright" />
                          </button>
                        ))
                      ) : (
                        <p className="px-3 py-3 text-center text-[0.7rem] text-muted">No instruments found.</p>
                      )}
                    </div>
                  )}
                </div>

                <nav className="mt-6 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-1.5 text-sm font-bold transition-colors ${
                          isLinkActive(link.href) ? "text-primary-bright" : "text-muted-strong hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <div className="mt-1.5 flex flex-col gap-2 border-l border-border pl-3">
                          {CATEGORIES.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products?category=${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-semibold text-muted transition-colors hover:text-primary-bright"
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

              <div className="space-y-4 border-t border-border pt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRFQ();
                  }}
                  className="w-full rounded-lg bg-accent py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground glow-accent"
                >
                  Request Quote
                </button>
                <div className="space-y-1 font-mono text-[0.65rem] text-muted">
                  <p className="font-semibold text-muted-strong">ANGELS INSTRUMENTS</p>
                  <p>ISO 9001:2008 Certified Company</p>
                  <p>info@angelsinstruments.in</p>
                  <p>+91-97605-77862</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
