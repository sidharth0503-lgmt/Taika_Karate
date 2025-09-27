"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { beltRanks } from "@/lib/data";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";

export function BeltTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const x = useTransform(scrollXProgress, [0, 1], [0, -50]);

  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 to-dark">
      <div className="mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-6 md:mb-12"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-section font-heading font-bold text-white mb-4"
          >
            Your Journey to <span className="gradient-text">Black Belt</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
          >
            Progress through traditional karate belt rankings, each representing
            dedication, skill development, and personal growth.
          </motion.p>
        </motion.div>

        <div
          ref={containerRef}
          className="overflow-x-auto pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-8 lg:space-x-[48px] px-4 justify-start items-start "
          >
            {beltRanks.map((belt, index) => (
              <motion.div
                key={belt.name}
                className="flex-shrink-0 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                {index < beltRanks.length - 1 && (
                  <motion.div
                    className="absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-muted to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  />
                )}

                <motion.div
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4 relative overflow-hidden"
                  style={{
                    borderColor: belt.color,
                    backgroundColor:
                      belt.color === "#FFFFFF" ? "#F3F4F6" : belt.color,
                  }}
                  // whileHover={{
                  //   scale: 1.1,
                  //   boxShadow: `0 0 20px ${belt.color}40`,
                  // }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Belt Icon/Number */}
                  <span
                    className={`text-2xl font-bold ${
                      belt.color === "#FFFFFF" ? "text-dark" : "text-white"
                    }`}
                  >
                    {belt.level}
                  </span>

                  {/* Glow Effect for Active Belt */}
                  {index === 0 && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: belt.color }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>

                {/* Belt Info */}
                <div className="text-center min-w-[100px]">
                  <Badge
                    variant="belt"
                    className="mb-2"
                    style={{ color: belt.color, borderColor: belt.color }}
                  >
                    Level {belt.level}
                  </Badge>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {belt.name}
                  </h4>
                  <p className="text-muted text-xs">
                    {index === 0 && "Starting Point"}
                    {index === 1 && "Foundation"}
                    {index === 2 && "Basic Techniques"}
                    {index === 3 && "Intermediate"}
                    {index === 4 && "Advanced Basics"}
                    {index === 5 && "Pre-Advanced"}
                    {index === 6 && "Advanced"}
                     {index === 7 && "Elite"}
                    {index === 8 && "Master Level"}
                    {index === 9 && "Master Level-1"}
                    {index === 10 && "Master Level-2"}
                    {index === 11 && "Master Level-3"}
                    {index === 12 && "Grand Master"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-2 text-center block"
          variants={fadeInUpVariants}
        >
          <p className="text-muted text-sm mb-2">
            Scroll to explore your journey
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{
                scaleX: scrollXProgress,
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
