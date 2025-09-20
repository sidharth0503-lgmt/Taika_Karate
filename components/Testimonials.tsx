"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";

const VIDEOS = [
  { id: 1, src: "/videos/karate1.mp4", title: "Our Team" },
  { id: 2, src: "/videos/karate2.mp4", title: "Kick Boxing" },
  { id: 3, src: "/videos/karate3.mp4", title: "Training" },
  { id: 4, src: "/videos/karate4.mp4", title: "Belt Test" },
  {id: 5, src: "/videos/karate5.mp4", title: "Karate" },
  { id: 6, src: "/videos/karate6.mp4",title: "Belt Test 2025" },
];

export default function KarateVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Adjust videos per slide based on screen width
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerSlide) % VIDEOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerSlide]);

  // Navigation
  const next = () => {
    setCurrentIndex((prev) => (prev + cardsPerSlide) % VIDEOS.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - cardsPerSlide + VIDEOS.length) % VIDEOS.length
    );
    setIsAutoPlaying(false);
  };

  const getVisibleVideos = () => {
    return VIDEOS.slice(currentIndex, currentIndex + cardsPerSlide).concat(
      currentIndex + cardsPerSlide > VIDEOS.length
        ? VIDEOS.slice(0, (currentIndex + cardsPerSlide) % VIDEOS.length)
        : []
    );
  };

  return (
    <section
      className="bg-gradient-to-br from-black via-gray-900 to-gray-900
 section-padding container-padding"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-8 md:mb-16"
      >
        <motion.h2
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-section font-heading font-bold text-white mb-4"
        >
          Karate <span className="gradient-text">Video Testimonials</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
        >
          Hear from our students and watch their journey through karate
        </motion.p>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getVisibleVideos().map((video, i) => (
                <motion.div
                  key={video.id}
                  className="bg-white rounded-2xl overflow-hidden border border-red-600 shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <video className="w-full h-64 object-cover" controls muted>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div
                    className="bg-gradient-to-br from-black via-gray-900 to-red-600 
                text-white text-center py-3 font-semibold text-xl"
                  >
                    {video.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <motion.button
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mt-4 flex justify-center items-center">
          <button
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold 
             rounded-full bg-black text-red-500 border border-red-600 
             hover:bg-red-600 hover:text-white transition"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Pause auto-play
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Resume auto-play
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
