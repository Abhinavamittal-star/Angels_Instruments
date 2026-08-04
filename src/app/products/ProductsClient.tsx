"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, Filter, RefreshCw, MessageSquare } from "lucide-react";
import { CATALOG_PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useRFQ } from "@/context/RFQContext";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openRFQ } = useRFQ();

  // Read query params
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync state with URL params
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  // Update URL params helper
  const updateParams = (category: string, search: string) => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (search.trim()) params.set("search", search.trim());
    
    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ""}`);
  };

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    updateParams(slug, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams(selectedCategory, searchQuery);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    router.push("/products");
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;

      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanSearch === "" ||
        product.name.toLowerCase().includes(cleanSearch) ||
        product.tagline.toLowerCase().includes(cleanSearch) ||
        product.description.toLowerCase().includes(cleanSearch) ||
        product.standards.some((std) => std.toLowerCase().includes(cleanSearch)) ||
        product.category.toLowerCase().includes(cleanSearch);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">

      {/* Sidebar Filters */}
      <aside className="w-full shrink-0 space-y-6 rounded-2xl border border-border bg-surface p-5 lg:w-64">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Filter className="h-4 w-4 text-primary-bright" />
            <span>Search Filters</span>
          </div>
          {(selectedCategory !== "all" || searchQuery !== "") && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1 font-mono text-[0.6rem] font-bold uppercase text-primary-bright transition-colors hover:text-accent-bright"
            >
              <RefreshCw className="h-2.5 w-2.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Category List */}
        <div className="space-y-2">
          <label className="mb-1 block font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted">
            Category
          </label>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`rounded-lg px-3 py-2 text-left text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-primary font-bold text-primary-foreground glow-primary"
                  : "text-muted-strong hover:bg-surface-2 hover:text-foreground"
              }`}
            >
              All Categories ({CATALOG_PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = CATALOG_PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-primary font-bold text-primary-foreground glow-primary"
                      : "text-muted-strong hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.6rem] ${
                      selectedCategory === cat.slug ? "bg-primary-bright/40 text-primary-foreground" : "bg-surface-2 text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Contact Box */}
        <div className="space-y-3 rounded-xl border border-border bg-card p-4 text-xs">
          <p className="font-bold text-accent-bright">Custom Testing Needs?</p>
          <p className="text-[0.7rem] leading-relaxed text-muted">
            We configure capacities, specimen sizes, and standards to suit your unique R&D specifications.
          </p>
          <button
            onClick={() => openRFQ()}
            className="w-full rounded-lg bg-accent py-2 text-[0.7rem] font-bold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent-bright"
          >
            Inquire Details
          </button>
        </div>
      </aside>

      {/* Product List Content */}
      <section className="flex-1 space-y-6">

        {/* Search Bar / Input Form */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search instruments (e.g. Bursting Strength Tester)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-xl border border-border bg-surface py-2.5 pl-4 pr-10 text-sm text-foreground placeholder:text-muted transition-all focus:border-primary-bright focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  updateParams(selectedCategory, "");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-bright sm:text-sm"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>

        {/* Results summary info */}
        <div className="flex items-center justify-between border-b border-border pb-2 text-xs text-muted">
          <div>
            Showing <span className="font-bold text-foreground">{filteredProducts.length}</span>{" "}
            instrument{filteredProducts.length === 1 ? "" : "s"}
            {selectedCategory !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-bold text-foreground">
                  {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                </span>
              </>
            )}
          </div>
          {searchQuery && (
            <div>
              for query &ldquo;<span className="italic text-foreground">{searchQuery}</span>&rdquo;
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border-strong bg-surface px-4 py-16 text-center">
            <Search className="mb-3 h-10 w-10 text-muted" />
            <h3 className="mb-1 text-lg font-bold text-foreground">No Instruments Found</h3>
            <p className="mb-6 max-w-md text-xs leading-relaxed text-muted sm:text-sm">
              We couldn&apos;t find any laboratory testing machines matching your filters. Try checking your spelling or selecting another category.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleClearFilters}
                className="rounded-lg border border-border-strong px-4 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-surface-2"
              >
                Clear All Filters
              </button>
              <button
                onClick={() => openRFQ(searchQuery)}
                className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent-bright"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Request Custom Machine</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
