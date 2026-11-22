import React from "react";
import { FiFilter, FiRotateCcw, FiCheck } from "react-icons/fi";
import { CATEGORIES } from "../../../data/products";

export default function ProductFilter({
  selectedCategory,
  onSelectCategory,
  maxPrice,
  onPriceChange,
  minRating,
  onRatingChange,
  onResetFilters
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-7 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <FiFilter className="text-blue-600" />
          <span>Filters</span>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <FiRotateCcw className="text-xs" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Categories
        </h4>
        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>{cat.name}</span>
                {isSelected && <FiCheck className="text-sm" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Max Price
          </h4>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            ${maxPrice}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="4000"
          step="50"
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>$100</span>
          <span>$4,000</span>
        </div>
      </div>

      {/* Minimum Rating */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Minimum Rating
        </h4>
        <div className="grid grid-cols-4 gap-2">
          {[0, 4.0, 4.5, 4.8].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => onRatingChange(rate)}
              className={`py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                minRating === rate
                  ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500"
                  : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {rate === 0 ? "All" : `${rate}+ ★`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
