import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Animated from '@/components/animate';


// Load fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Taika Martial Arts Academy - Premier Karate School in Hyderabad',
  description:
    'Train at Taika Martial Arts Academy in Hyderabad. Traditional karate classes for kids, teens, and adults. Build confidence, fitness, and discipline with expert instruction.',
  keywords:
    'karate classes Hyderabad, martial arts Hyderabad, self defense, kids karate, adult karate, Taika Martial Arts Academy, traditional karate',
  authors: [{ name: 'Taika Martial Arts Academy' }],
  creator: 'Taika Martial Arts Academy',
  publisher: 'Taika Martial Arts Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taikakarate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Taika Martial Arts Academy - Premier Karate School',
    description:
      'Traditional karate training in Hyderabad. Learn from experienced instructors. Classes for all ages.',
    url: 'https://taikakarate.com',
    siteName: 'Taika Martial Arts Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taika Martial Arts Academy Dojo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taika Martial Arts Academy - Premier Karate School',
    description:
      'Join Taika Martial Arts Academy in Hyderabad. Karate classes for kids, teens, and adults.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/images/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', 
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Animated/>
        <Footer />
      </body>
    </html>
  );
}