import React from "react";

export default function Badge({
  children,
  variant = "blue",
  className = "",
  size = "md"
}) {
  const variantStyles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900",
    amber: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900",
    rose: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900",
    slate: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-medium rounded-md",
    md: "text-xs px-2.5 py-1 font-semibold rounded-lg"
  };

  return (
    <span
      className={`inline-flex items-center gap-1 border ${
        variantStyles[variant] || variantStyles.blue
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
}
