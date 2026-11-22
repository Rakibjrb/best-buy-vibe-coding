import React from "react";
import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

export default function ContactFAQ() {
  const faqs = [
    {
      q: "How fast is shipping, and do you ship worldwide?",
      a: "We offer worldwide expedited shipping. Orders placed before 2 PM EST ship the same day and typically arrive within 1-3 business days.",
      icon: FiTruck
    },
    {
      q: "What does the 2-Year Warranty cover?",
      a: "Every brand-new device comes with a full 2-year manufacturer and store warranty covering defects, internal hardware failures, and factory issues.",
      icon: FiShield
    },
    {
      q: "What is your return policy?",
      a: "You have 30 days from delivery to return or exchange any product in its original packaging with zero restocking fees.",
      icon: FiRefreshCw
    }
  ];

  return (
    <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Quick answers to our most common shopping and policy inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqs.map((faq, idx) => {
          const Icon = faq.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 text-lg">
                <Icon />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {faq.q}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {faq.a}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
