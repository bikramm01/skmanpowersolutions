import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent"; // ✅ Add this line

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Best Staffing Solution in Gurgaon | SK Manpower Solutions",
  description: "SK Manpower Solutions offers expert staffing services in Gurgaon for hotels, hospitals, corporates, and industrial sectors. Trusted by leading brands for housekeeping, security, and facility management.",
  keywords: "Staffing solutions Gurgaon, housekeeping services, manpower agency Gurgaon, security staff, SK Manpower Solutions",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Best Staffing Solution in Gurgaon | SK Manpower Solutions",
    description: "Get reliable and professional manpower services in Gurgaon. SK Manpower offers trained staff for all your needs.",
    url: "https://skmanpower.com",
    siteName: "SK Manpower Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SK Manpower Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent /> {/* ✅ Now it will work */}
      </body>
    </html>
  );
}
