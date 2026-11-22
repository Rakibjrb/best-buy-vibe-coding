import React from "react";
import { FiSearch, FiSliders } from "react-icons/fi";

export default function ProductSearchSort({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Filter by product name or brand..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-xl pl-10 pr-4 py-2.5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
        />
        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
      </div>

      {/* Counter & Sort Select */}
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="text-xs text-slate-500 font-medium">
          Showing <strong className="text-slate-900 dark:text-white font-bold">{totalResults}</strong> products
        </span>

        <div className="flex items-center gap-2">
          <FiSliders className="text-slate-400 text-sm hidden sm:block" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl px-3 py-2.5 border border-transparent focus:border-blue-500 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}
