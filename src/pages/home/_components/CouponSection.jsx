import React, { useState } from "react";
import { FiTag, FiCopy, FiCheck, FiGift } from "react-icons/fi";
import { COUPONS } from "../../../data/products";

export default function CouponSection() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <FiGift className="text-sm" />
            <span>Special Member Discounts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Claim Exclusive Coupons
          </h2>
          <p className="text-slate-300 text-sm">
            Copy any promo code below and apply it directly during checkout to
            slash your total order price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COUPONS.map((coupon) => (
            <div
              key={coupon.code}
              className="relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-blue-500 transition-all backdrop-blur-md shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-amber-400 tracking-tight">
                    {coupon.discount}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-700/50">
                    Min: {coupon.minSpend}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-1">
                  {coupon.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {coupon.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiTag className="text-blue-400 text-sm" />
                  <span className="font-mono font-bold text-sm text-slate-200 tracking-wider">
                    {coupon.code}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(coupon.code)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    copiedCode === coupon.code
                      ? "bg-emerald-500 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                >
                  {copiedCode === coupon.code ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
