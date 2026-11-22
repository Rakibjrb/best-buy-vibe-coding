import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock
} from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Get in Touch
        </h3>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">
          We are committed to providing premium customer service and rapid resolutions for all orders, hardware questions, and warranties.
        </p>
      </div>

      <div className="space-y-4">
        {/* Location */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl shrink-0">
            <FiMapPin />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Flagship Retail & HQ
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              450 Market Street, Suite 900<br />San Francisco, CA 94105, United States
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl shrink-0">
            <FiPhone />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Phone Support Line
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Toll Free: +1 (800) 237-8289<br />International: +1 (415) 890-3411
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl shrink-0">
            <FiMail />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Email Channels
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Sales & Orders: sales@bestbuy-store.com<br />Support: support@bestbuy-store.com
            </p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl shrink-0">
            <FiClock />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Working Hours
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Monday – Friday: 9:00 AM – 8:00 PM EST<br />Saturday: 10:00 AM – 6:00 PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
