import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductFilter from "./_components/ProductFilter";
import ProductSearchSort from "./_components/ProductSearchSort";
import ProductGrid from "./_components/ProductGrid";
import { PRODUCTS } from "../../data/products";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Query Sync
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");

  // Handle category change
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catId);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setMaxPrice(4000);
    setMinRating(0);
    setSortBy("featured");
    setSearchParams({});
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (
        selectedCategory !== "all" &&
        item.categorySlug !== selectedCategory
      ) {
        return false;
      }
      // Search filter
      if (
        searchQuery.trim() &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      // Rating filter
      if (item.rating < minRating) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // Default: featured first, then newest
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, minRating, sortBy]);

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Page Banner */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore All Products
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Browse our complete catalog of 20 high-performance smart gadgets,
            laptops, audio systems, and accessories.
          </p>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              maxPrice={maxPrice}
              onPriceChange={setMaxPrice}
              minRating={minRating}
              onRatingChange={setMinRating}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Main Area */}
          <div className="lg:col-span-3 space-y-6">
            <ProductSearchSort
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filteredProducts.length}
            />

            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
