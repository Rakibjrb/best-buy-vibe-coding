import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaFire } from "react-icons/fa6";
import ProductCard from "../../../components/ui/ProductCard";
import { PRODUCTS } from "../../../data/products";

export default function TopProducts() {
  // Select 8 curated top/featured products for the landing page
  const topProducts = PRODUCTS.slice(0, 8);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
              <FaFire className="text-sm" />
              <span>Trending Best Sellers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Top Products
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Hand-picked best-performing devices and tech essentials trusted by
              thousands of customers.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group"
          >
            <span>See Full Store</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Prominent "More" Button */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>
              More Products ({PRODUCTS.length - topProducts.length}+ More)
            </span>
            <FiArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
