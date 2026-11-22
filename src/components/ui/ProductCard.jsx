import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiEye, FiShoppingBag } from "react-icons/fi";
import Rating from "./Rating";
import Badge from "./Badge";

export default function ProductCard({ product }) {
  const discountPercent =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : null;

  return (
    <div className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {discountPercent && discountPercent > 0 && (
            <Badge variant="rose">-{discountPercent}% OFF</Badge>
          )}
          {product.isNew && <Badge variant="blue">NEW</Badge>}
        </div>

        {/* Quick Actions (Floating) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            title="Add to Wishlist"
            className="p-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-md text-slate-700 dark:text-slate-200 hover:text-rose-600 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <FiHeart className="text-base" />
          </button>
          <Link
            to={`/products/${product.id}`}
            title="Quick View"
            className="p-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-md text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <FiEye className="text-base" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          {product.category}
        </div>

        <Link
          to={`/products/${product.id}`}
          className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2.5 mb-4">
          <Rating value={product.rating} count={product.reviewCount} />
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 dark:text-blue-300 dark:hover:text-white rounded-xl text-xs font-semibold transition-colors duration-200"
          >
            <FiShoppingBag className="text-sm" />
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
