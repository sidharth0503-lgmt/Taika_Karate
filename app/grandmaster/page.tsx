'use client';

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
          viewport={{ once: false }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-section font-heading font-bold text-white mb-4"
          >
             The Wisdom of <span className="gradient-text">Grand Master</span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto mb-4"
          >
             A Grand Master embodies mastery, discipline, and the spirit of karate.
          Beyond techniques, they inspire philosophy, respect, and a lifelong pursuit of excellence.
          </motion.p>
        </motion.div>

      {/* Image + Introduction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-8 md:mb-14"
      >
        <div className="w-full">
          <Image
            src="/images/IMG_0468.jpg"
            alt="Grand Master Portrait"
            width={600}
            height={300}
            className="rounded-2xl shadow-xl border-2 border-primary mx-auto md:mx-0 w-full max-h-[350px] object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            Beyond Rank, A Lasting Legacy
          </h2>
          <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
            The measure of a Grand Master lies not in belts, but in the generations they shape.
            Their teachings extend far beyond the dojo, influencing lives through guidance, discipline, and integrity.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <span className="text-primary font-semibold">Mentorship:</span> Guiding students with patience, wisdom, and inspiration.
            </li>
            <li>
              <span className="text-primary font-semibold">Tradition:</span> Preserving karate’s culture, values, and spirit.
            </li>
            <li>
              <span className="text-primary font-semibold">Balance:</span> Teaching harmony of body, mind, and heart.
            </li>
            <li>
              <span className="text-primary font-semibold">Legacy:</span> Inspiring generations through discipline, respect, and honor.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Biography + Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-14 px-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
          Grandmaster Shihan Dr. Ashok Chakravarti
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-4">
          With over 25 years of martial arts expertise, Grandmaster Shihan Dr. Ashok Chakravarti is the founder of the International Taika Academy,
          a leading karate institution in South India.
        </p>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-4">
          <span className="text-primary font-semibold">Achievements:</span> Blackbelt 5th Dan, 2nd World Martial Arts Championship Gold Medalist (2015),
          National Karate Referee, Vice President of USKI (Telangana), WKF Certified Coach, and recipient of the National Martial Arts Excellence Award (2023).
        </p>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          Under his guidance, International Taika Academy has expanded to 10 branches across Hyderabad, promoting fitness, discipline, and martial arts philosophy to all.
        </p>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-14 px-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
          Philosophy
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          Karate is more than combat; it is a path of humility, self-control, and respect.
          Grand Masters embody decades of training, blending strength with compassion and wisdom.
        </p>
      </motion.div>

      {/* Legacy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 gradient-text">
            The Legacy They Leave
          </h2>
          <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
            True influence of a Grand Master is measured by the lives they touch,
            the students they inspire, and the respect they earn through wisdom and humility.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Every lesson they impart becomes a seed for the future, nurturing strength,
            character, and discipline in the next generation.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/images/gimage1.jpg"
            alt="Grand Master Legacy"
            width={600}
            height={250}
            className="rounded-2xl shadow-xl border-2 border-primary mx-auto md:mx-0 w-full max-h-[320px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GrandMasterPage;
