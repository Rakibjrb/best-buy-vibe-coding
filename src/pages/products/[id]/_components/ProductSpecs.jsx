import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function ProductSpecs({ specs = [] }) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
        Technical Specifications & Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
          >
            <FiCheckCircle className="text-blue-600 text-lg shrink-0" />
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {spec}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
