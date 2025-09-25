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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-br from-black via-black to-gray-900"
    >
      <div className="mx-auto container-padding py-8">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 lg:gap-12">
          {/* Brand & Description */}
          <motion.div 
           variants={fadeInUpVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
          className="col-span-4 md:col-span-6 lg:col-span-4 mb-4 lg:mb-0">
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
    <p className="text-xs md:text-sm text-muted">Martial Arts Academy</p>
  </div>
</div>

            <motion.p 
            
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-muted text-sm leading-relaxed mb-4 md:mb-6">
              Empowering students through traditional karate training,
              building confidence, character, and physical fitness in [Your
              City].
            </motion.p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@taikamartialartsacademy8548?si=VrVUE0W-XK2O82k4" className="text-muted hover:text-primary transition-colors">
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
          
          className="col-span-2 md:col-span-2 mb-8 lg:mb-0">
            <h4 className="font-heading font-semibold text-white text-lg mb-4">
              Quick Links
            </h4>
            <motion.nav 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            
            className="space-y-3">
              {[
                  { name: "Home", href: "/" },
                { name: "Classes", href: "/classes" },
                { name: "Branches", href: "/branches" },
                { name: "BlackBelt", href: "/blackbelt" },
                { name: "GrandMaster", href: "/grandmaster" },
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
          className="col-span-2 md:col-span-2 lg:col-span-3">
            <h4 className="font-heading text-center md:text-start font-semibold text-white text-lg mb-4">
              Training Hours
            </h4>
            <motion.div 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-base">
                  <p className="text-white font-medium">Mon - Fri</p>
                  <p className="text-muted">6:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-base">
                  <p className="text-white font-medium">Saturday</p>
                  <p className="text-muted">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-base">
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-muted">Closed</p>
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
          className="col-span-3 md:col-span-2 lg:col-span-3 mb-8 lg:mb-0">
            <h4 className="font-heading font-semibold text-white text-lg mb-4">
              Contact Info
            </h4>
            <motion.div 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted text-base">
                  [Full Address]
                  <br />
                  [Your City], [State] [Zip]
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:[Your Phone]"
                  className="text-muted hover:text-primary text-base transition-colors"
                >
                  [Your Phone]
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:[Your Email]"
                  className="text-muted hover:text-primary text-base transition-colors"
                >
                  [Your Email]
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/[Your WhatsApp Number]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary text-base transition-colors"
                >
                  WhatsApp: [Your WhatsApp Number]
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
         initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-white/10 py-4">
          <p className="text-muted text-sm text-center">
            © {currentYear} <span className="font-semibold text-white">International <span className="text-red-500">Taika</span> Martial Arts Academy</span><br/>All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
