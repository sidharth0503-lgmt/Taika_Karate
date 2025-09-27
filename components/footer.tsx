"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { fadeInUpVariants } from "@/lib/motion";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-black via-black to-gray-900">
      <div className="mx-auto container-padding py-8">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 lg:gap-12">
          {/* Brand & Description */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="col-span-4 md:col-span-6 lg:col-span-4 mb-4 lg:mb-0"
          >
            <div className="flex items-center space-x-1 mb-4">
              <div className="h-10 w-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-md md:text-lg text-white">
                  International <span className="text-primary">TAIKA</span>
                </h3>
                <p className="text-xs md:text-sm text-muted">
                  Martial Arts Academy
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-muted text-sm md:text-[15px] leading-relaxed mb-4 md:mb-6"
            >
              Empowering students through traditional karate training, building
              confidence, character, and physical fitness in{" "}
              <span className="text-primary">Hyderabad</span>.
            </motion.p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/taika_martial_arts_academy?igsh=MTU4aTExNXRlbmh3bg=="
                className="text-muted hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@taikamartialartsacademy8548?si=VrVUE0W-XK2O82k4"
                className="text-muted hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="col-span-2 md:col-span-2 mb-8 lg:mb-0"
          >
            <h4 className="font-heading font-semibold text-white tex-md tmd:text-lg mb-2 md:mb-4">
              Quick Links
            </h4>
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-3"
            >
              {[
                { name: "Home", href: "/" },
                { name: "Classes", href: "/classes" },
                { name: "Branches", href: "/branches" },
                { name: "BlackBelt", href: "/blackbelt" },
                { name: "GrandMaster", href: "/grandmaster" },
                { name: "BlackBelt Gallery", href: "/blackbelt-gallery" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted hover:text-primary transition-colors text-base"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          </motion.div>

          {/* Contact Info */}

          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="col-span-2 md:col-span-2 lg:col-span-3"
          >
            <h4 className="font-heading text-center md:text-start font-semibold text-white text-md mb-2 md:text-lg md:mb-4">
              Training Hours
            </h4>
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="space-y-4 mb-8"
>
  {/* Monday to Saturday */}
  <div className="flex items-center space-x-4">
    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
    <div className="text-base">
      <p className="text-white text-md md:text-lg">Mon – Sat</p>
      <p className="text-muted text-sm mb-1">Morning: 6:00 AM – 12:00 PM</p>
      <p className="text-muted text-sm">Evening: 4:00 PM – 8:00 PM</p>
    </div>
  </div>

  {/* Sunday */}
  <div className="flex items-center space-x-4">
    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
    <div className="text-base">
      <p className="text-white text-md md:text-lg">Sun</p>
      <p className="text-muted text-sm">Closed</p>
    </div>
  </div>
</motion.div>

          </motion.div>

          {/* Training Hours */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="col-span-4 md:col-span-2 lg:col-span-3 mb-8 lg:mb-0"
          >
            <h4 className="font-heading font-semibold text-white text-md md:text-lg mb-2 md:mb-4">
              Contact Info
            </h4>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted text-sm md:text-md">
                  Plot No. 92, near Venkateswara Swamy Temple, Gayatri Nagar,
                  Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-md w-full h-[120px]">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse">
                    <div className="w-8 h-8 border border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.259455333538!2d78.4067001!3d17.495123799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160a4a7f18d%3A0xc180e0b2890f068e!2sINTERNATIONAL%20TAIKA%20MARTIAL%20ARTS%20ACADEMY%20(Corporate%20Branch)!5e0!3m2!1sen!2sin!4v1758948730662!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Small Map"
                  onLoad={() => setMapLoaded(true)}
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-white/10 py-4"
        >
          <p className="text-muted text-sm text-center">
            © {currentYear}{" "}
            <span className="font-semibold text-white">
              International <span className="text-red-500">Taika</span> Martial
              Arts Academy
            </span>
            <br />
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
