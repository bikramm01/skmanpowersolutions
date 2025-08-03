"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Youtube
} from "lucide-react";

export const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // show for 2s
  }, 5000); // every 5s

  return () => clearInterval(interval);
}, []);


  return (
    <>
      {/* WhatsApp Floating Button */}
     <a
  href="https://wa.me/8448496682"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  {/* Ping Effect */}
  <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 blur-md animate-ping z-[-1]"></span>

  {/* Button */}
  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300">
    {/* WhatsApp Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 text-white"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.005 2.003a14 14 0 00-12.073 21.121L2 30l7.124-1.922A14 14 0 1016.005 2.003zm0 25.375c-2.282 0-4.523-.61-6.484-1.762l-.464-.273-4.222 1.14 1.128-4.136-.293-.478a11.826 11.826 0 1110.335 5.509zm6.333-8.509c-.348-.173-2.05-1.016-2.37-1.134-.319-.116-.55-.173-.78.174-.229.347-.899 1.133-1.104 1.362-.202.229-.407.26-.754.086-.347-.174-1.464-.539-2.787-1.717-1.03-.916-1.725-2.049-1.928-2.396-.202-.347-.021-.536.151-.709.155-.155.347-.4.52-.608.174-.21.23-.362.347-.579.116-.22.058-.416-.029-.608-.087-.191-.754-1.82-1.036-2.481-.274-.658-.553-.569-.754-.579h-.647c-.202 0-.526.075-.8.36-.276.288-1.05 1.024-1.05 2.496 0 1.472 1.075 2.898 1.225 3.096.148.198 2.116 3.234 5.12 4.534 1.792.774 2.494.84 3.382.725.546-.073 1.678-.686 1.917-1.348.239-.661.239-1.21.168-1.333-.07-.12-.272-.191-.573-.334z" />
    </svg>

    {/* Tooltip */}
    <span
      className={`absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs px-3 py-1 rounded-lg shadow-md whitespace-nowrap transition-opacity duration-500 ${
        showTooltip ? "opacity-100" : "opacity-0"
      } group-hover:opacity-100`}
    >
      Need help?
    </span>
  </div>
</a>

      {/* Main Footer */}
     <footer className="bg-[#003366] text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
{/* Company Info */}
<div className="flex flex-col justify-start">
  <img
    src="/logo2.png"
    alt="S K Manpower Solutions Logo"
    className="w-20 h-20 object-contain"
  />
  <p className="text-sm leading-snug text-gray-200 mt-0.1">
    SK Manpower Solutions providing trusted manpower for hotels, hospitals, and corporates across India.
  </p>
</div>




  {/* Quick Links with Working SVG Icons */}
<div className="flex flex-col items-start">
  <h4 className="text-xl font-bold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-sm text-gray-200">
    <li className="flex items-center gap-2">
      <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2L2 9h3v8h4v-5h2v5h4V9h3L10 2z" />
      </svg>
      <Link href="/" className="hover:text-amber-400 transition">Home</Link>
    </li>

    <li className="flex items-center gap-2">
      <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4c-1.1 0-2 .9-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
      <Link href="/services" className="hover:text-amber-400 transition">Services</Link>
    </li>

    <li className="flex items-center gap-2">
      <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 0012 22a10 10 0 007.07-2.93A10 10 0 0012 2z" />
      </svg>
      <Link href="/about" className="hover:text-amber-400 transition">About Us</Link>
    </li>
  </ul>
</div>

{/* Social Media */}
<div>
  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
  <ul className="space-y-3 text-sm text-gray-200">
    <li className="flex items-center gap-2">
      <Facebook size={16} className="text-blue-400" />
      <a
        href="https://www.facebook.com/skmanpowersolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition"
      >
        Facebook
      </a>
    </li>
    <li className="flex items-center gap-2">
      <Instagram size={16} className="text-pink-400" />
      <a
        href="https://www.instagram.com/skmanpowersolutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition"
      >
        Instagram
      </a>
    </li>
    <li className="flex items-center gap-2">
      <Youtube size={16} className="text-red-500" />
      <a
        href="https://www.youtube.com/@skmanpowersolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition"
      >
        YouTube
      </a>
    </li>
  </ul>
</div>

    {/* Contact Info */}
    <div>
      <h4 className="text-xl font-bold mb-4">Contact Us</h4>
      <ul className="space-y-3 text-sm text-gray-200">
        <li className="flex items-center gap-2">
          <PhoneCall size={16} /> +91 95822 01277 / +91 90442 66161
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} /> info@skmanpower.com
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={16} /> Sec 59, Behrampur, Gurugram, Haryana
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Footer */}
<div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-300">
  <p>&copy; 2025 SK Manpower Solutions. Website design & development by <a href="https://betazu.com" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Betazu Technologies</a>.</p>
</div>

</footer>

    </>
  );
};
