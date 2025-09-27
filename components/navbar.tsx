"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Branches", href: "/branches" },
  { name: "BlackBelt", href: "/blackbelt" },
  { name: "GrandMaster", href: "/grandmaster" },
  { name: "BlackBelt Gallery", href: "/blackbelt-gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressValue = window.scrollY / totalHeight;
      setProgress(progressValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-[#FF0000] origin-left"
        style={{ scaleX: progress }}
      />

      <motion.nav
        className={cn(
          "relative transition-all duration-300 backdrop-blur-md",
          scrolled ? "bg-dark/90 shadow-lg  border-white/10" : "bg-dark/60"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="mx-auto container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo + Branding */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full overflow-hidden flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h1 className="font-heading font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white leading-tight">
                  International <span className="text-primary">TAIKA</span>
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted leading-none">
                  Martial Arts Academy
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center md:space-x-6">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative font-medium transition-colors text-sm md:text-base lg:text-lg hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-white"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Call Now CTA (Desktop) */}
            <div className="flex gap-4">
              <motion.a
                href="tel:+919100844333"
                className="hidden xl:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-primary border-2 border-primary bg-black text-xs sm:text-sm md:text-base"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 5px rgba(248,113,113,0.5)",
                    "0 0 15px rgba(248,113,113,0.7)",
                    "0 0 5px rgba(248,113,113,0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/919100844333?text=Hello%2C%20I%20went%20through%20your%20website.%20I%20am%20interested%20to%20join%20and%20I%20have%20a%20few%20questions%20to%20discuss%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-green-500 border-2 border-green-500 bg-black text-xs sm:text-sm md:text-base"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 5px rgba(248,113,113,0.5)",
                    "0 0 15px rgba(248,113,113,0.7)",
                    "0 0 5px rgba(248,113,113,0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-500">WhatsApp</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              // variant="outline"
              // size="icon"
              className="xl:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              // animate={false}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="min-h-screen justify-center fixed xl:hidden left-0 right-0 bg-dark/95 backdrop-blur-md  border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 flex flex-col space-y-5">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block font-medium text-base sm:text-lg py-2 border-b border-white/10",
                        pathname === item.href
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Call Now in mobile */}
                <div className="flex flex-col">
                  <motion.a
                    href="tel:+919100844333"
                    className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-full font-semibold text-primary border-2 border-primary bg-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>

                  <motion.a
                    href="https://wa.me/919100844333?text=Hello%2C%20I%20went%20through%20your%20website.%20I%20am%20interested%20to%20join%20and%20I%20have%20a%20few%20questions%20to%20discuss%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-full font-semibold text-green-500 border-2 border-green-500 bg-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
