"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";
import { motion } from "framer-motion";


const BLACK_BELT_IMAGES = [
  { id: 1, src: "/images/gimage1.jpg" },
  { id: 2, src: "/images/gimage4.jpg"},
  { id: 3, src: "/images/karate16.jpg"},
  { id: 4, src: "/images/karate26.jpg" },
  { id: 5, src: "/images/karate28.jpg"},
  { id: 6, src: "/images/gimage5.jpg"},
   { id: 7, src: "/images/karate10.jpg"},
     { id: 8, src: "/images/karate5.jpg"},
];

export default function BlackBeltGallery() {
  return (
    <section className="bg-black py-4 md:py-12 px-6 md:px-12 lg:px-20">
     <motion.div
  variants={containerVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: false }}
  className="text-center mb-10"
>
  <motion.h2
    variants={fadeInUpVariants}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
    className="text-3xl md:text-4xl font-bold font-heading text-white mb-4"
  >
    <span className="gradient-text">Black Belt</span> Gallery
  </motion.h2>

  <motion.p
    variants={fadeInUpVariants}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: false }}
    className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
  >
    A collection that celebrates the spirit of the{" "}
    <span className="text-primary font-semibold">Black Belt</span> —
    showcasing discipline, perseverance, and the milestones of martial
    arts mastery.
  </motion.p>
</motion.div>


     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {BLACK_BELT_IMAGES.map((item) => (
          <GalleryImage key={item.id} src={item.src} />
        ))}
      </div>
    </section>
  );
}


function GalleryImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg h-56 w-full bg-gray-900">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <AiOutlineLoading3Quarters className="text-white animate-spin text-2xl" />
        </div>
      )}

      <Image
        src={src}
        alt="Black Belt"
        fill
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}