"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ACHIEVEMENTS = [
  { id: 1, src: "/images/karate18.jpg", title: "International Open 2025" },
  { id: 2, src: "/images/gimage16.jpg", title: "Regional Kickboxing Finals" },
  { id: 3, src: "/images/karate5.jpg", title: "Black Belt Graduation" },
  { id: 4, src: "/images/gimage27.jpg", title: "Martial Arts Cultural Fest" },
  { id: 5, src: "/images/karate21.jpg", title: "Women’s Self Defense Camp" },
  { id: 6, src: "/images/gimage24.jpg", title: "All-State Karate Expo" },
  { id: 7, src: "/images/karate6.jpg", title: "Kickboxing Championship" },
  { id: 8, src: "/images/gimage30.JPG", title: "Karate Friendship Cup" },
  { id: 9, src: "/images/karate9.jpg", title: "State Championship 2022" },
  { id: 10, src: "/images/gimage25.jpg", title: "Dojo Anniversary Gala" },
  { id: 11, src: "/images/karate12.jpg", title: "National Karate Meet" },
  { id: 12, src: "/images/gimage19.jpg", title: "Regional Medal Ceremony" },
  { id: 13, src: "/images/karate11.jpg", title: "Annual Dojo Celebration" },
  { id: 14, src: "/images/gimage29.jpg", title: "Legends Invitational" },
  { id: 15, src: "/images/karate13.jpg", title: "Best Dojo Award" },
  { id: 16, src: "/images/gimage22.jpg", title: "Junior Talent Showcase" },
  { id: 17, src: "/images/gimage14.jpg", title: "Best Technique Award" },
  { id: 18, src: "/images/gimage32.jpg", title: "Global Karate Fest" },
  { id: 19, src: "/images/gimage12.jpg", title: "State Kickboxing Trials" },
  { id: 20, src: "/images/gimage23.JPG", title: "Future Champs Workshop" },
  { id: 21, src: "/images/gimage15.jpg", title: "Graduation Belt Ceremony" },
  { id: 22, src: "/images/gimage31.jpg", title: "Martial Arts Winter Camp" },
  { id: 23, src: "/images/gimage17.jpg", title: "International Open 2023" },
  { id: 24, src: "/images/gimage21.jpg", title: "Dojo Unity Festival" },
  { id: 25, src: "/images/gimage26.jpg", title: "Self Defense Awareness Drive" },
  { id: 26, src: "/images/gimage28.jpg", title: "Warriors Night 2025" },
  { id: 27, src: "/images/gimage13.jpg", title: "National Training Camp" },
  { id: 28, src: "/images/gimage33.jpg", title: "Karate Youth Summit" },
];

const fadeInUpVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const containerVariants = {
  animate: { transition: { staggerChildren: 0.15 } },
};

export default function AchievementsSection() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-900 section-padding container-padding">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-8"
      >
        <motion.h2
          variants={fadeInUpVariants}
          className="text-section font-heading font-bold text-white mb-4"
        >
          Our <span className="gradient-text">Achievements</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto mb-4"
        >
          Celebrating the milestones and exceptional accomplishments of our Founder,{" "}
          <span className="font-semibold text-primary">Grandmaster Shihan Dr. Ashok Chakravarti</span>, 
          and the Kaarti Academy team.
        </motion.p>
      </motion.div>


       <motion.div
  variants={fadeInUpVariants}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto text-left mb-6"
>
  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">Pioneer in Martial Arts:</span>
    <span className="text-gray-400"> Credited with revolutionizing Karate and elevating its standards for future generations.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">Blackbelt 5th Dan:</span>
    <span className="text-gray-400"> Demonstrating exceptional expertise in Karate.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">2nd World Martial Arts Championship Gold Medalist:</span>
    <span className="text-gray-400"> Achieved in 2015, showcasing his competitive excellence.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">National Referee in Karate:</span>
    <span className="text-gray-400"> Reflecting his high standing in the sport.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">Vice President of USKI:</span>
    <span className="text-gray-400"> Serving in Telangana, contributing to the growth of Karate.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">WKF Certified Coach:</span>
    <span className="text-gray-400"> Official recognition of his dedication and expertise.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">Honorary Degree of Doctor of Martial Arts:</span>
    <span className="text-gray-400"> Received for outstanding contributions to the field.</span>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105">
    <span className="font-semibold text-white">National Martial Arts Excellence Award:</span>
    <span className="text-gray-400"> Honored in Telangana in 2023 for his exceptional contributions.</span>
  </div>
</motion.div>

      

      {/* Achievements Grid */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
      >
        {ACHIEVEMENTS.map((item) => (
          <GalleryCard key={item.id} src={item.src} title={item.title} />
        ))}
      </motion.div>
    </section>
  );
}

// Gallery card with loader
function GalleryCard({ src, title }:any) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-white/10 group cursor-pointer h-44 w-full bg-gray-800">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <AiOutlineLoading3Quarters className="text-white animate-spin text-3xl" />
        </div>
      )}

      <Image
        src={src}
        alt={title}
        fill
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
