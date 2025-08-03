'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamic icon imports
const FaShieldAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaShieldAlt));
const FaBroom = dynamic(() => import("react-icons/fa").then(mod => mod.FaBroom));
const FaUsersCog = dynamic(() => import("react-icons/fa").then(mod => mod.FaUsersCog));
const FaPhoneAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaPhoneAlt));
const FaUserTie = dynamic(() => import("react-icons/fa").then(mod => mod.FaUserTie));
const FaLeaf = dynamic(() => import("react-icons/fa").then(mod => mod.FaLeaf));
const FaUserCheck = dynamic(() => import("react-icons/fa").then(mod => mod.FaUserCheck));
const FaCogs = dynamic(() => import("react-icons/fa").then(mod => mod.FaCogs));
const FaHeadset = dynamic(() => import("react-icons/fa").then(mod => mod.FaHeadset));
const FaIdBadge = dynamic(() => import("react-icons/fa").then(mod => mod.FaIdBadge));

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-orange-50 py-16 px-6 md:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-orange-100 opacity-70" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide reliable, verified and efficient manpower solutions across multiple industries.
          </p>
        </div>
      </section>

      {/* Services with Image Overlays */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, image }, index) => (
            <div
              key={index}
              className="relative h-72 rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
              <div className="absolute bottom-0 p-5 z-20 text-white">
                <Icon className="text-3xl mb-2 text-orange-400" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f1f5f9] to-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-orange-500">SK Manpower</span> Solutions?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Empowering your business with reliable staffing services tailored for hotels, hospitals, and more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyUs.map(({ title, description, icon: Icon, bg }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow border border-gray-100 hover:shadow-md transition"
            >
              <div className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${bg} shadow-sm`}>
                <Icon className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4">Looking for dependable manpower?</h2>
          <p className="text-gray-700 mb-6">
            Contact us today to get custom solutions tailored to your business needs. Our team is ready to help.
          </p>
          <Link href="/contact">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-full text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

// Services with image overlays
const services = [
  {
    icon: FaShieldAlt,
    title: "Security Guards",
    description: "Trained and background-verified security professionals for residential, commercial and event security.",
    image: "/assets/security.png",
  },
  {
    icon: FaBroom,
    title: "Housekeeping Staff",
    description: "Experienced cleaners and housekeeping staff to maintain hygiene and cleanliness across premises.",
    image: "/assets/housekeeping.png",
  },
  {
    icon: FaUserTie,
    title: "Pantry Boys",
    description: "Efficient pantry support staff for corporate offices, co-working spaces and events.",
    image: "/assets/pantry.png",
  },
  {
    icon: FaUsersCog,
    title: "Admin Support",
    description: "Back-office and front-desk admin professionals to streamline your operations.",
    image: "/assets/admin.png",
  },
  {
    icon: FaLeaf,
    title: "Gardeners",
    description: "Well-trained gardeners and landscape staff to maintain your green spaces beautifully.",
    image: "/assets/gardener.png",
  },
  {
    icon: FaPhoneAlt,
    title: "Helpdesk & Reception",
    description: "Front-office executives to manage calls, visitors, and client communication.",
    image: "/assets/helpdesk.png",
  },
];

// Why Choose Us
const whyUs = [
  {
    title: "Experienced Workforce",
    description: "Well-trained professionals with years of experience across various service domains.",
    icon: FaUserCheck,
    bg: "bg-blue-600",
  },
  {
    title: "Customized Solutions",
    description: "Services tailored to meet the specific needs of your industry or space.",
    icon: FaCogs,
    bg: "bg-orange-500",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available round-the-clock to assist your business.",
    icon: FaHeadset,
    bg: "bg-green-600",
  },
  {
    title: "Strict Background Checks",
    description: "Every staff member undergoes thorough background verification before deployment.",
    icon: FaIdBadge,
    bg: "bg-purple-600",
  },
];
