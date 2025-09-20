"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";

const GrandMasterPage = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-900 section-padding container-padding">
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
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          The Wisdom of the{" "}
          <span className="gradient-text">Grand Master</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl text-muted-dark max-w-3xl mx-auto"
        >
          The Grand Master in karate is a guiding light, carrying wisdom,
          humility, and the spirit of martial arts. Beyond techniques, they
          teach philosophy, discipline, and respect.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-8 md:mb-14"
      >
        <div className="w-full">
          <Image
            src="/images/IMG_0468.jpg"
            alt="Karate Grand Master"
            width={600}
            height={300}
            className="rounded-2xl shadow-xl border-2 border-primary mx-auto md:mx-0 w-full max-h-[300px] md:max-h-[350px] object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Beyond Rank, A Legacy
          </h2>
          <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
            A Grand Master’s role is not measured only by belts, but by the
            impact left on generations of students. Their teachings extend
            beyond the dojo—into everyday life.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <span className="text-primary font-semibold">Mentorship:</span>{" "}
              Guiding students with patience and wisdom.
            </li>
            <li>
              <span className="text-primary font-semibold">Tradition:</span>{" "}
              Preserving karate’s culture and spirit.
            </li>
            <li>
              <span className="text-primary font-semibold">Balance:</span>{" "}
              Teaching harmony between body, mind, and heart.
            </li>
            <li>
              <span className="text-primary font-semibold">Legacy:</span>{" "}
              Inspiring future generations through discipline and honor.
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-14 px-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
          Philosophy
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          The Grand Master teaches that karate is not simply about combat—it is
          about cultivating humility, respect, and self-control. Through decades
          of practice, they embody the balance of strength and compassion.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            The Legacy They Leave
          </h2>
          <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
            Grand Masters inspire by example. Their greatest victory is not in
            the dojo, but in the lives they shape and the respect they earn
            through wisdom and humility.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Every teaching becomes a seed planted for the future—one that
            blossoms in the strength, character, and discipline of the next
            generation.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/images/gimage5.jpg"
            alt="Grand Master Legacy"
            width={600}
            height={250}
            className="rounded-2xl shadow-xl border-2 border-primary mx-auto md:mx-0 w-full max-h-[280px] md:max-h-[320px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GrandMasterPage;
