import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";

export default function NotFoundPage() {
  return (
    <div className="py-24 max-w-lg mx-auto text-center px-4 space-y-5">
      <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex items-center justify-center text-3xl mx-auto">
        <FiAlertCircle />
      </div>
      <h1 className="text-4xl font-black text-slate-900 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="text-sm text-slate-500 leading-relaxed">
        The page you are looking for doesn't exist or has been moved to another location.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
      >
        <FiArrowLeft />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
