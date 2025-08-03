"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="S K Manpower Logo"
            width={70}
            height={70}
            className="object-contain sm:w-[70px] w-[60px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <nav className="hidden md:flex space-x-3 md:space-x-5 text-base md:text-lg font-medium text-gray-700">
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} scroll={link.href.startsWith("/#")}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="hover-underline-animation">{link.label}</span>
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Request Call CTA */}
          <Link href="/#contact" scroll={true}>
            <motion.span
              className="flex items-center bg-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-medium text-sm sm:text-base cursor-pointer"
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.293.707l-1.414 1.414a16.97 16.97 0 006.586 6.586l1.414-1.414A1 1 0 0116 14h3a1 1 0 011 1v2a2 2 0 01-2 2h-1C9.716 19 5 14.284 5 8V7a2 2 0 01-2-2z"
                />
              </svg>
              Make an Appoinment
            </motion.span>
          </Link>

          {/* Hamburger Icon */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none ml-2"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-3xl text-gray-600">
              {menuOpen ? "×" : "☰"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-20 right-4 w-[85%] bg-white border border-gray-200 rounded-xl shadow-lg px-6 py-4 z-40"
          >
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} scroll={link.href.startsWith("/#")}>
                <motion.span
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-semibold text-gray-800 hover:text-orange-500 border-b last:border-b-0 border-gray-200 cursor-pointer"
                  whileHover={{ x: 6 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover underline animation */}
      <style jsx>{`
        .hover-underline-animation {
          display: inline-block;
          position: relative;
        }

        .hover-underline-animation::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #f97316;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </header>
  );
};
