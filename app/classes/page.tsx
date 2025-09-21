"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-variants";
import { classes } from "@/lib/data";
import {
  cardVariants,
  containerVariants,
  fadeInUpVariants,
  pageVariants,
} from "@/lib/motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

const filters = ["All", "Karate", "MartialArts", "KickBoxing"];

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClasses = classes.filter(
    (cls) => activeFilter === "All" || cls.category === activeFilter
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <Section>
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
            Our <span className="gradient-text">Classes</span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto mb-4"
          >
            Browse through our gallery of Kids Karate, Martial Arts, and
            KickBoxing to see the energy and discipline in action.
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                animate={false}
                className="min-w-[80px]"
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Section className="bg-dark">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredClasses.map((cls, index) => (
            <GalleryCard key={cls.id} cls={cls} index={index} />
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <motion.div variants={fadeInUpVariants} className="text-center py-16">
            <p className="text-muted text-lg">
              No classes found for the selected filter.
            </p>
            <Button
              onClick={() => setActiveFilter("All")}
              className="mt-4"
              animate={false}
            >
              Show All Classes
            </Button>
          </motion.div>
        )}
      </Section>
    </motion.div>
  );
}

function GalleryCard({ cls, index }: any) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative overflow-hidden rounded-xl shadow-lg group h-48 w-full bg-gray-700"
    >
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-700">
          <AiOutlineLoading3Quarters className="text-white animate-spin text-3xl mb-2" />
          {/* <span className="text-gray-300 text-sm">Loading...</span> */}
        </div>
      )}

      <Image
        src={cls.image}
        alt={cls.category}
        fill
        style={{ objectFit: "cover" }}
        onLoadingComplete={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}
