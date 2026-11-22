import React, { useState } from "react";
import {
  FiSend,
  FiCheckCircle,
  FiUser,
  FiMail,
  FiFileText,
  FiMessageSquare
} from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Have an order inquiry or custom bulk quotation request? Fill out the form and our team will get back to you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3 animate-in fade-in">
          <FiCheckCircle className="text-4xl text-emerald-500 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
            Message Sent Successfully!
          </h4>
          <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-sm mx-auto">
            Thank you for reaching out. A dedicated customer support representative will review your message and reply via email shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Your Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
                />
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
                />
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                name="subject"
                required
                placeholder="Product Inquiry / Order Status"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
              />
              <FiFileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
              Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your detailed questions or instructions here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all resize-none"
              ></textarea>
              <FiMessageSquare className="absolute left-3.5 top-4 text-slate-400 text-base" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <FiSend />
            <span>Send Message</span>
          </button>
        </form>
      )}
    </div>
  );
}
