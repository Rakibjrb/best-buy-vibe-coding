import React, { useState } from "react";
import { FiMail, FiCheckCircle, FiShield } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
          <FiMail className="text-3xl text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
          Never Miss a Flash Deal
        </h2>
        <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Subscribe to the official BEST BUY newsletter to receive VIP coupon codes, product drop announcements, and weekly tech discounts directly in your inbox.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm font-semibold backdrop-blur-md animate-in fade-in">
            <FiCheckCircle className="text-xl text-emerald-400" />
            <span>Thank you for subscribing! Your 20% discount code has been sent.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your personal or work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-xl text-sm shadow-xl transition-all hover:scale-105 cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-blue-200">
          <FiShield className="text-sm" />
          <span>No spam guaranteed. Unsubscribe at any time with one click.</span>
        </div>
      </div>
    </section>
  );
}
