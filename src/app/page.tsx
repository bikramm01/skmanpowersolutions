'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldCheck, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
const [formData, setFormData] = useState<{
  name: string;
  phone: string;
  email: string;
  service: string;
}>({
  name: '',
  phone: '',
  email: '',
  service: '',
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
    setFormData({ name: "", phone: "", email: "", service: "" });
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <main className="bg-[#f0f4f8] text-[#003366]">
            {/* Hero Section */}
 <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-18 px-6 overflow-hidden">
  {/* Background Blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 rounded-full filter blur-3xl z-0" />
  <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-yellow-400/10 rounded-full filter blur-2xl z-0" />

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    {/* Left Content */}
    <div className="space-y-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Trusted Staffing Solutions for{" "}
        <span className="text-white">Your Business</span>
      </motion.h1>

      <motion.p
        className="text-lg text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        SK Manpower Solutions delivers trained professionals for corporate,
        hospitality, healthcare, and industrial needs. Quality, trust, and
        operational efficiency — all in one.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Get Free Quote Button */}
         <Link href="/contact" passHref>
      <Button className="bg-orange-500 text-white font-semibold hover:bg-red-600 transition px-6 py-3 rounded-full shadow-md hover:scale-105">
        Get Free Quote
      </Button>
    </Link>

        {/* Call Us Button */}
        <a
          href="tel:+918448496682"
          className="flex items-center border border-amber-500 text-amber-400 hover:bg-amber-400 hover:text-gray-900 font-medium transition px-6 py-3 rounded-full shadow-md hover:scale-105"
        >
          <motion.div
            animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-4 h-4 mr-2 inline-block"
          >
            <PhoneCall />
          </motion.div>
          Call Us
        </a>
      </motion.div>
    </div>

    {/* Right Content: Auto Sliding Cards */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden group"
    >
      <div
        className="flex gap-6 w-max"
        style={{
          animation: "slide-left 20s linear infinite",
          animationPlayState: "running",
        }}
      >
        {[
          { src: "/assets/security.png", label: "Security Guard" },
          { src: "/assets/housekeeping.png", label: "Housekeeping" },
          { src: "/assets/pantry.png", label: "Pantry Boy Services" },
          { src: "/assets/gardener.png", label: "Gardener Services" },
          { src: "/assets/staffing.png", label: "Contract Staffing" },
          { src: "/assets/maintenance.png", label: "Facility Management" },
          { src: "/assets/security.png", label: "Security Guard" },
          { src: "/assets/housekeeping.png", label: "Housekeeping" },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={(e) => {
              e.currentTarget.parentElement!.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.parentElement!.style.animationPlayState = "running";
            }}
            className="min-w-[200px] bg-white border-4 border-yellow-400 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative h-40 w-full">
              <Image
                src={service.src}
                alt={service.label}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-2 bg-blue-100 text-blue-900 font-semibold text-sm">
              {service.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Keyframe for auto sliding */}
  <style jsx>{`
    @keyframes slide-left {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

<section className="py-24 px-6 bg-white" id="services">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-gray-900 mb-6"
    >
      Why <span className="text-orange-500">Skilled Manpower </span> Matters?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-600 mb-14 max-w-xl mx-auto text-lg"
    >
      From hospitality to security, skilled professionals keep businesses running smoothly, safely, and efficiently in today’s fast-paced world.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      {[
        {
          img: '/images/workforce-hospitality.png',
          title: 'Driving the Hospitality Industry',
          desc: 'Skilled manpower ensures smooth guest experiences—from spotless rooms to exceptional service. Hotels, resorts, and restaurants rely on dependable staff daily.',
        },
        {
          img: '/images/security-personnel.png',
          title: 'Ensuring Safety & Peace of Mind',
          desc: 'Trained security professionals safeguard residential complexes, commercial properties, and events, providing peace of mind and proactive protection.',
        },
        {
          img: '/images/staffing-solutions.png',
          title: 'Boosting Business Efficiency',
          desc: 'Contract staffing enables businesses to scale operations quickly and cost-effectively, bridging gaps without long-term commitment.',
        },
        {
          img: '/images/facility-management.png',
          title: 'Maintaining Facilities Seamlessly',
          desc: 'From daily cleaning to utility management, facility management teams ensure buildings run smoothly—improving comfort, safety, and hygiene for everyone inside.',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 group"
        >
          <div className="w-full md:w-1/2 h-64 relative overflow-hidden rounded-xl">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <a
        href="/about"
        className="text-orange-500 font-semibold text-sm hover:underline"
      >
        Read More →
      </a>
    </motion.div>
  </div>
</section>

{/* Trusted Partners */}
<section className="py-16 px-6 bg-[#003366] text-white text-center overflow-hidden relative">
  <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
  <p className="text-sm mb-10 text-gray-200 max-w-xl mx-auto">
    We proudly collaborate with top hotels, hospitals, and corporate offices to deliver reliable manpower services across industries.
  </p>

  <div className="relative w-full overflow-hidden">
    <div className="flex w-max animate-scroll gap-6 px-4">
      {[
        "partner1.png",
        "partner2.png",
        "partner3.png",
        "partner4.png",
        "partner5.png",
        "partner6.png",
        "partner7.png",
        "spacecreattorheights.png",
        // Duplicate logos to make infinite loop seamless
        "partner1.png",
        "partner2.png",
        "partner3.png",
        "partner4.png",
        "partner5.png",
        "partner6.png",
        "partner7.png",
        "spacecreattorheights.png",
      ].map((logo, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-md min-w-[140px] flex justify-center items-center"
        >
          <Image
            src={`/partners/${logo}`}
            alt={`Partner ${i + 1}`}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Tailwind custom animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
  `}</style>
</section>

    {/* Contact Section */}
<section id="contact" className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">

    {/* Left Column: Text */}
    <div>
      <h2 className="text-3xl font-bold mb-4 text-[#003366]">
        Looking for Trusted Staff?
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;re ready to provide manpower solutions tailored to your needs. Fill the form to order a callback.
      </p>
      <ul className="space-y-3 text-[#003366] font-medium">
        <li>📞 +91 84484 96682</li>
        <li>📧 info@skmanpower.com</li>
      </ul>
    </div>

   {/* Right Column: Form and Image */}
<div className="w-full border rounded-1xl overflow-hidden shadow-lg bg-white flex flex-col md:flex-row relative">

  {/* Image Section */}
<div className="w-full md:w-1/2 h-64 md:h-auto relative pb-4.5 md:pb-0">
  {/* Image - bring to front using z-index */}
  <img
    src="/guard.png"
    alt="Guard"
    className="w-full h-full object-contain md:object-cover relative z-10"
  />

  {/* Ribbon Badge - lower z-index so it appears behind image */}
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 md:hidden z-0">
    <div className="bg-white border border-orange-500 text-orange-600 font-medium text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 leading-none">
      <svg
        className="w-4 h-4 text-orange-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M11.3 1.046a1 1 0 00-1.6 0l-8 11A1 1 0 002.6 14h5.9l-.8 5.4a.5.5 0 00.8.4l8-11a1 1 0 00-.8-1.6H8.2l.8-5.4a.5.5 0 00-.8-.4z" />
      </svg>
      <span className="whitespace-nowrap">Fast Response Guaranteed</span>
    </div>
  </div>
</div>

  {/* Form Section */}
  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-50">
  {submitted ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center text-green-600 font-semibold text-xl"
    >
      🎉 Thank you! Your request has been submitted.
    </motion.div>
  ) : (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
        Make an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

  {/* Name */}
  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
     <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.656 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
    <input
      type="text"
      placeholder="Your Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required
      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
    />
  </div>

  {/* Email */}
  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
    />
  </div>

  {/* Phone Number */}
  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2l2 4H8.5A1.5 1.5 0 007 8.5V10a11 11 0 0011 11h1.5A1.5 1.5 0 0021 19.5V17l-4-2v2a2 2 0 01-2 2h-1.5a13 13 0 01-13-13V7a2 2 0 012-2z" />
    </svg>
    <input
      type="tel"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      required
      className="w-full outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
    />
  </div>

  {/* Service Selection */}
  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
    <select
      value={formData.service}
      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
      required
      className="w-full bg-transparent text-gray-700 outline-none"
    >
      <option value="">Select a Service</option>
      <option value="Security">Security</option>
      <option value="Housekeeping">Housekeeping</option>
      <option value="Gardener">Gardener</option>
      <option value="Pantry Boys">Pantry Boys</option>
      <option value="Contract Staffing">Contract Staffing</option>
      <option value="Others">Others</option>
    </select>
  </div>

  {/* Submit Button */}
   <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-3 rounded-lg transition duration-200 active:scale-95 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          )}
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  )}
</div>
</div>

  </div>
</section>


    </main>
  );
}
