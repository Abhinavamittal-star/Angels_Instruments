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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 items-start">
      
      {/* Sidebar Filters (Desktop) */}
      <aside className="w-full lg:w-64 bg-slate-50 border border-slate-100 p-5 rounded-2xl shrink-0 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Filter className="w-4 h-4 text-blue-900" />
            <span>Search Filters</span>
          </div>
          {(selectedCategory !== "all" || searchQuery !== "") && (
            <button
              onClick={handleClearFilters}
              className="text-4xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 uppercase transition-colors"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Category List */}
        <div className="space-y-2">
          <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
            Category
          </label>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-900 text-white font-bold"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-900"
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
                  className={`text-left px-3 py-2 rounded-lg text-xs font-semibold flex justify-between items-center transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-blue-900 text-white font-bold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-900"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-3xs px-2 py-0.5 rounded-full ${
                      selectedCategory === cat.slug ? "bg-blue-800 text-blue-100" : "bg-slate-200 text-slate-500"
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
        <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-3">
          <p className="font-bold text-amber-400">Custom Testing Needs?</p>
          <p className="text-slate-300 text-3xs leading-relaxed">
            We configure capacities, specimen sizes, and standards to suit your unique R&D specifications.
          </p>
          <button
            onClick={() => openRFQ()}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-3xs py-2 rounded-lg uppercase tracking-wider transition-colors"
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
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm pl-4 pr-10 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  updateParams(selectedCategory, "");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shrink-0 transition-colors shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>

        {/* Results summary info */}
        <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-100">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span>{" "}
            instrument{filteredProducts.length === 1 ? "" : "s"}
            {selectedCategory !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-bold text-slate-900">
                  {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                </span>
              </>
            )}
          </div>
          {searchQuery && (
            <div>
              for query &ldquo;<span className="italic text-slate-900">{searchQuery}</span>&rdquo;
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
            <Search className="w-10 h-10 text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Instruments Found</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
              We couldn&apos;t find any laboratory testing machines matching your filters. Try checking your spelling or selecting another category.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleClearFilters}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
              <button
                onClick={() => openRFQ(searchQuery)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Request Custom Machine</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
