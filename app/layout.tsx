import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Animated from "@/components/animate";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// ✅ SEO + Social Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://internationaltaikamartialartsacademy.com"),
  title:
    "International Taika Martial Arts Academy – Premier Karate School in Hyderabad",
  description:
    "Train with the experts at International Taika Martial Arts Academy, Hyderabad. Traditional karate classes for kids, teens, and adults — build confidence, fitness, and discipline.",
  openGraph: {
    title: "International Taika Martial Arts Academy – Premier Karate School",
    description:
      "Join International Taika Martial Arts Academy in Hyderabad for world-class karate training for all ages.",
    url: "https://internationaltaikamartialartsacademy.com",
    siteName: "International Taika Martial Arts Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "International Taika Martial Arts Academy Dojo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Taika Martial Arts Academy – Premier Karate School",
    description:
      "Karate classes for all ages at International Taika Martial Arts Academy, Hyderabad.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Animated />
        <Footer />
      </body>
    </html>
  );
}
