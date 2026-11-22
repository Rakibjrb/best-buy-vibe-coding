import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

export default function Rating({ value = 5, count, size = "text-sm" }) {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.4;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-amber-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfStroke key={i} className="text-amber-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-slate-300 dark:text-slate-600" />);
    }
  }

  return (
    <div className={`flex items-center gap-1.5 ${size}`}>
      <div className="flex items-center gap-0.5">{stars}</div>
      <span className="font-semibold text-slate-700 dark:text-slate-300 ml-0.5">
        {value.toFixed(1)}
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-slate-400">({count})</span>
      )}
    </div>
  );
}
