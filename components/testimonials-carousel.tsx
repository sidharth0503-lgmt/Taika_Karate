"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Pause,
  Play,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { staggerContainer, fadeInUpVariants } from "@/lib/motion";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // update cards per slide based on screen width
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // tablet
      } else {
        setCardsPerSlide(3); // laptop/desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerSlide) % TESTIMONIALS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerSlide]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + cardsPerSlide) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - cardsPerSlide + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    return TESTIMONIALS.slice(
      currentIndex,
      currentIndex + cardsPerSlide
    ).concat(
      currentIndex + cardsPerSlide > TESTIMONIALS.length
        ? TESTIMONIALS.slice(
            0,
            (currentIndex + cardsPerSlide) % TESTIMONIALS.length
          )
        : []
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-dark via-gray-900 to-dark">
      <div className="mx-auto container-padding">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-center mb-8"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            What Our <span className="gradient-text">Students Say</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-md md:text-lg text-muted max-w-2xl mx-auto"
          >
            Real stories from our karate family
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getVisibleTestimonials().map((testimonial, i) => (
                  <motion.div
                    key={i}
                    className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-red-600 transition-all duration-300"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Quote Icon */}
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="text-light italic mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center justify-center space-x-3">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div className="text-left">
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-6">
            <motion.button
              className="w-12 h-12 rounded-full bg-dark-secondary border border-white/20 flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-all duration-200"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="w-12 h-12 rounded-full bg-dark-secondary border border-white/20 flex items-center justify-center text-light hover:bg-primary hover:border-primary transition-all duration-200"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
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
      </div>
    </section>
  );
}
