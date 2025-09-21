"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Section } from "./ui/section";

const GALLERY_IMAGES = [
  { src: "/images/karate1.jpg", cols: 2, rows: 2 },
  { src: "/images/karate2.jpg", cols: 1, rows: 2 },
  { src: "/images/karate24.jpeg", cols: 1, rows: 2 },
  { src: "/images/karate26.jpg", cols: 1, rows: 2 },
  { src: "/images/karate27.jpg", cols: 1, rows: 2 },
  { src: "/images/karate25.png", cols: 2, rows: 2 },
  { src: "/images/karate28.jpg", cols: 1, rows: 1 },
  { src: "/images/karate29.jpg", cols: 1, rows: 1 },
  { src: "/images/gimage11.jpg", cols: 1, rows: 1 },
  { src: "/images/karate30.jpg", cols: 1, rows: 1 },
];

const fadeInUpVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function KarateGallery() {
  return (
    <Section>
      {/* Heading */}
    <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="text-center mb-6 md:mb-12"
      >
        <motion.h2
          variants={fadeInUpVariants}
          className="text-section font-heading font-bold text-white mb-4"
        >
          Our <span className="gradient-text">Karate</span> Gallery
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
        >
          A collection of memorable moments and achievements from our karate classes, showcasing dedication, training, and progress.
        </motion.p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 auto-rows-[150px] sm:auto-rows-[150px] md:auto-rows-[180px]">
          {GALLERY_IMAGES.map(({ src, cols, rows }, idx) => (
            <GalleryImage key={idx} src={src} cols={cols} rows={rows} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// Individual image with loader
function GalleryImage({ src, cols = 1, rows = 1 }: any) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer bg-gray-700"
      style={{
        gridColumn: `span ${cols > 1 ? cols : 1}`,
        gridRow: `span ${rows > 1 ? rows : 1}`,
      }}
    >
      {/* Loader Overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-700">
          <AiOutlineLoading3Quarters className="text-white animate-spin text-3xl mb-2" />
          <span className="text-gray-300 text-sm">Loading...</span>
        </div>
      )}

      <Image
        src={src}
        alt="Karate gallery"
        fill
        style={{ objectFit: "cover" }}
        onLoadingComplete={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </motion.div>
  );
}
