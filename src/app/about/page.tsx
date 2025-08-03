'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-orange-50 py-16 px-6 md:px-20">
        <div className="absolute top-0 left-0">
          <svg className="w-32 h-32 text-orange-100" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            At SK Manpower Solutions, we believe in professionalism, discipline, and dignity in every service we offer.
          </p>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              We aim to provide reliable and skilled manpower, including security guards, gardeners, pantry boys, and housekeeping staff,
              to ensure smooth and secure operations for your organization.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/images/about-1.jpeg"
              alt="About our team"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-orange-50 py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80 order-2 md:order-1">
            <Image
              src="/images/about-2.jpeg"
              alt="Why choose us"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-gray-800">Why Choose SK Manpower?</h2>
            <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
              <li>Well-trained and experienced personnel</li>
              <li>Prompt and professional services</li>
              <li>Custom solutions to fit your business needs</li>
              <li>Round-the-clock support and supervision</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our dedicated team of professionals ensures that our clients receive the best service with commitment and integrity.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { name: "Kameshwari Tiwari", role: "Founder & CEO", img: "/images/team1.jpeg" },
            { name: "Mr. Sarvesh Tiwari", role: "Co-Founder", img: "/images/team2.jpeg" },
            { name: "Mr. Satosh Tiwari", role: "Operations Manager", img: "/images/team3.jpeg" },
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-700">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200 py-16 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Let&apos;s Work Together</h2>
          <p className="mt-3 text-gray-600">Looking for reliable manpower solutions? We&apos;re just a message away.</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-700 transition"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
