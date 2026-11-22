import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiShoppingBag,
  FiSearch,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
  FiPhoneCall,
  FiMapPin,
  FiShield,
} from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-150 ${
      isActive
        ? "text-blue-600 dark:text-blue-400 font-bold"
        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <FiPhoneCall className="text-blue-400" /> +1 (800) 237-8289
            </span>
            <span className="flex items-center gap-1.5 sm:hidden xl:flex">
              <FiMapPin className="text-blue-400" /> Worldwide Delivery
              Available
            </span>
          </div>
          <div className=" flex items-center gap-4">
            <span className="text-amber-400 font-medium">
              Use code BESTBUY20 for 20% off!
            </span>
            <Link
              to="/contact"
              className="hover:text-white transition-colors sm:hidden lg:block"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <FiShoppingBag className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                BEST<span className="text-blue-600">BUY</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                Tech & Gadgets
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-lg mx-6 relative"
          >
            <input
              type="text"
              placeholder="Search products, brands, or tech categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-full pl-11 pr-24 py-2.5 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              All Products
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact & Support
            </NavLink>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              title="Wishlist"
              className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all relative"
            >
              <FiHeart className="text-xl" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </Link>

            <Link
              to="/products"
              title="Cart"
              className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all relative"
            >
              <FiShoppingBag className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            <button
              type="button"
              title="User Account"
              className="hidden sm:flex items-center gap-2 p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
            >
              <FiUser className="text-xl" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-xl pl-10 pr-20 py-2 border border-transparent focus:border-blue-500 focus:outline-none"
            />
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              All Products
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={navLinkClass}
            >
              Contact Us
            </NavLink>
          </div>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-1">
            <p>Hotline: +1 (800) 237-8289</p>
            <p>Email: support@bestbuy-store.com</p>
          </div>
        </div>
      )}
    </header>
  );
}
