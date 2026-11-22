import React from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FiShoppingBag className="text-xl" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                BEST<span className="text-blue-500">BUY</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your destination for frontier consumer electronics, next-gen
              gaming battlestations, pro creator laptops, and immersive audio
              gear. Built for technology lovers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-700 transition-all"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore Store
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=gaming"
                  className="hover:text-white transition-colors"
                >
                  Gaming Consoles
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=computers"
                  className="hover:text-white transition-colors"
                >
                  Laptops & Desktops
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=audio"
                  className="hover:text-white transition-colors"
                >
                  Audio & Headphones
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Warranty & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Shipping Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  FAQ & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Reach Out
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-blue-500 shrink-0 mt-0.5" />
                <span>450 Market Street, Suite 900, San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-blue-500 shrink-0" />
                <span>+1 (800) 237-8289</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-blue-500 shrink-0" />
                <span>support@bestbuy-store.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiClock className="text-blue-500 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 BEST BUY Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="hover:text-slate-400 transition-colors"
            >
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
