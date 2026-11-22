import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCheck,
  FiShoppingBag,
  FiZap,
  FiHeart,
  FiShare2,
  FiTruck,
  FiShield,
  FiRotateCcw
} from "react-icons/fi";
import Rating from "../../../../components/ui/Rating";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAddToCart = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Category & Action icons */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {product.category}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer ${
              isWishlisted
                ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40 border-rose-300"
                : "text-slate-500 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
            title="Add to Wishlist"
          >
            <FiHeart className="text-lg" />
          </button>
          <button
            type="button"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Share"
          >
            <FiShare2 className="text-lg" />
          </button>
        </div>
      </div>

      {/* Product Title */}
      <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        {product.name}
      </h1>

      {/* Rating & Stock */}
      <div className="flex items-center gap-4">
        <Rating value={product.rating} count={product.reviewCount} size="text-base" />
        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full">
          <FiCheck className="text-sm" /> In Stock & Ready to Ship
        </span>
      </div>

      {/* Price Block */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-baseline gap-3">
        <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-base text-slate-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-xs font-semibold text-emerald-600 ml-auto">
          Free Delivery
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {product.description}
      </p>

      {/* Quantity & CTA Buttons */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Quantity:
          </span>
          <div className="inline-flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer"
            >
              -
            </button>
            <span className="px-4 py-1.5 text-sm font-bold text-slate-900 dark:text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <FiShoppingBag className="text-lg" />
            <span>Add to Cart</span>
          </button>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <FiZap className="text-lg text-amber-400" />
            <span>Buy Now</span>
          </Link>
        </div>

        {addedNotice && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <FiCheck className="text-emerald-500 text-sm" />
            <span>{quantity} item(s) successfully added to your shopping cart!</span>
          </div>
        )}
      </div>

      {/* Highlights / Trust Cards */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <FiTruck className="text-blue-600 mx-auto text-lg mb-1" />
          <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Express Delivery</h5>
          <p className="text-[10px] text-slate-400">1-2 Business Days</p>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <FiShield className="text-blue-600 mx-auto text-lg mb-1" />
          <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Official Warranty</h5>
          <p className="text-[10px] text-slate-400">2-Year Full Coverage</p>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <FiRotateCcw className="text-blue-600 mx-auto text-lg mb-1" />
          <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Easy Returns</h5>
          <p className="text-[10px] text-slate-400">30 Days Money Back</p>
        </div>
      </div>
    </div>
  );
}
