import React from "react";
import ProductCard from "../../../components/ui/ProductCard";
import { FiPackage, FiRotateCcw } from "react-icons/fi";

export default function ProductGrid({ products, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <FiPackage className="text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          No Products Match Your Filter
        </h3>
        <p className="text-sm text-slate-500 max-w-md">
          We couldn't find any devices matching your exact search criteria or price range. Try broadening your filter parameters.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
        >
          <FiRotateCcw />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
