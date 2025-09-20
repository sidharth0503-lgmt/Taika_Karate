"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  { id: 1, src: "/images/karate18.jpg", title: "International Open 2025" },
  { id: 2, src: "/images/gimage16.jpg", title: "Regional Kickboxing Finals" },
  { id: 3, src: "/images/karate5.jpg", title: "Black Belt Graduation" },
  { id: 4, src: "/images/gimage27.jpg", title: "Martial Arts Cultural Fest" },
  { id: 5, src: "/images/karate21.jpg", title: "Women’s Self Defense Camp" },
  { id: 6, src: "/images/gimage24.jpg", title: "All-State Karate Expo" },
  { id: 7, src: "/images/karate6.jpg", title: "Kickboxing Championship" },
  { id: 8, src: "/images/gimage30.jpg", title: "Karate Friendship Cup" },
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
  { id: 20, src: "/images/gimage23.jpg", title: "Future Champs Workshop" },
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
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function AchievementsSection() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-900
       section-padding container-padding">
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-8 md:mb-16"
      >
        <motion.h2
          variants={fadeInUpVariants}
          className="text-section font-heading font-bold text-white mb-4"
        >
          Our <span className="gradient-text">Achievements</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
        >
          Celebrating the success and milestones of our karate students and team
        </motion.p>
      </motion.div>

      {/* Grid Gallery */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
      >
        {ACHIEVEMENTS.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg border border-white/10 group cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.title}
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
