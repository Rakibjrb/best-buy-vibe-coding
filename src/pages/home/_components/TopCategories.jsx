import React from "react";
import { Link } from "react-router-dom";
import {
  FiCpu,
  FiHeadphones,
  FiWatch,
  FiMonitor,
  FiHardDrive,
  FiArrowRight,
} from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

export default function TopCategories() {
  const categories = [
    {
      name: "Laptops & Computers",
      slug: "computers",
      desc: "M3 MacBooks, Ultrabooks & Desktops",
      itemsCount: "250+ Items",
      icon: FiMonitor,
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50 dark:bg-blue-950/40",
    },
    {
      name: "Smart Electronics",
      slug: "electronics",
      desc: "Smartphones, iPads & 4K OLED TVs",
      itemsCount: "420+ Items",
      icon: FiCpu,
      color: "from-purple-500 to-violet-600",
      bgLight: "bg-purple-50 dark:bg-purple-950/40",
    },
    {
      name: "Gaming & Consoles",
      slug: "gaming",
      desc: "PS5 Pro, ROG OLED, Switch & Gear",
      itemsCount: "180+ Items",
      icon: IoGameControllerOutline,
      color: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50 dark:bg-rose-950/40",
    },
    {
      name: "Audio & Headphones",
      slug: "audio",
      desc: "Noise-cancelling Over-Ear & Earbuds",
      itemsCount: "150+ Items",
      icon: FiHeadphones,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 dark:bg-amber-950/40",
    },
    {
      name: "Wearables & Watches",
      slug: "wearables",
      desc: "Apple Watch Ultra, Garmin & Trackers",
      itemsCount: "95+ Items",
      icon: FiWatch,
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
      name: "Accessories & Storage",
      slug: "accessories",
      desc: "Extreme SSDs, MX 3S & Fast Chargers",
      itemsCount: "310+ Items",
      icon: FiHardDrive,
      color: "from-cyan-500 to-blue-600",
      bgLight: "bg-cyan-50 dark:bg-cyan-950/40",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Browse By Departments
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Top Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group"
          >
            <span>View All Departments</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform shrink-0`}
                >
                  <Icon />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {cat.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>{cat.itemsCount}</span>
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
