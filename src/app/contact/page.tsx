"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">We&apos;d love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center font-medium"
              >
                Thank you for contacting us. We’ll get back to you shortly.
              </motion.p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-500">
                    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.656 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Tarun Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-500">
                    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      placeholder="tarun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-500">
                    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2l2 4H8.5A1.5 1.5 0 007 8.5V10a11 11 0 0011 11h1.5A1.5 1.5 0 0021 19.5V17l-4-2v2a2 2 0 01-2 2h-1.5a13 13 0 01-13-13V7a2 2 0 012-2z" />
                    </svg>
                    <input
                      type="tel"
                      placeholder="+91 72****1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="flex gap-2 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-500">
                    <svg className="h-5 w-5 text-orange-500 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0-4.418-4.03-8-9-8s-9 3.582-9 8a8.962 8.962 0 003 6.708V21l3.643-2.185A9.969 9.969 0 0012 20c4.97 0 9-3.582 9-8z" />
                    </svg>
                    <textarea
                      rows={4}
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition font-medium flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              {/* Address */}
              <div className="flex items-center gap-4">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Head Office</h4>
                  <p className="text-gray-600">Gurugram, Haryana, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.6a1 1 0 01.94.658l1.2 3.27a1 1 0 01-.217 1.048l-2.2 2.2a16.001 16.001 0 007.586 7.586l2.2-2.2a1 1 0 011.048-.217l3.27 1.2A1 1 0 0121 17.4V21a2 2 0 01-2 2c-9.941 0-18-8.059-18-18z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 84484 96682</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@skmanpower.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.206350024243!2d77.04181895!3d28.45949615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b8f0f11cd3%3A0x7f4893a40aa0ce55!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647169919932!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
