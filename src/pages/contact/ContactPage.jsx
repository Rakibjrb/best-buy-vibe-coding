import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import ContactFAQ from "./_components/ContactFAQ";

export default function ContactPage() {
  return (
    <div className="py-14 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Connect With Our Team
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact & Support
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
            Whether you need product advice, shipping updates, or business
            partnerships, we are here to help.
          </p>
        </div>

        {/* Content: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>

        {/* FAQ Section */}
        <ContactFAQ />
      </div>
    </div>
  );
}
