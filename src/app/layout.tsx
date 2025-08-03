import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent"; // ✅ Add this line

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "SK Manpower Solutions - Your Trusted Staffing Partner",
  description: "Expert staffing for hotels, hospitals, corporates & more",
   icons: {
    icon: '/favicon.ico',
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
