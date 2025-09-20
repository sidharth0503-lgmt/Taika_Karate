"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";

const BlackBeltPage = () => {
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
          The Power of the <span className="gradient-text">Black Belt</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl text-muted-dark max-w-3xl mx-auto"
        >
          In karate, the{" "}
          <span className="text-primary font-semibold">Black Belt</span> is more
          than a symbol of skill—it is a journey of self-discipline, respect,
          and inner strength. It represents years of dedication, overcoming
          challenges, and a promise to guide others.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-4 items-center mx-auto mb-6 md:mb-12"
      >
        <Image
          src="/images/gimage4.jpg"
          alt="Karate Black Belt"
          width={650}
          height={400}
          className="rounded-2xl shadow-lg border-2 border-primary"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
            Symbol of Mastery & Growth
          </h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            The black belt is not just an achievement—it is a lifelong
            commitment to self-improvement and martial arts philosophy. It
            reminds every karateka that true strength lies in discipline and
            humility.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
            <li>
              <span className="text-primary font-semibold">Discipline:</span>{" "}
              Years of training teach patience, consistency, and resilience.
            </li>
            <li>
              <span className="text-primary font-semibold">Respect:</span> Black
              belts embody respect for teachers, peers, and the art itself.
            </li>
            <li>
              <span className="text-primary font-semibold">Leadership:</span> A
              black belt is a role model, guiding juniors and uplifting the dojo
              spirit.
            </li>
            <li>
              <span className="text-primary font-semibold">Humility:</span>{" "}
              Mastery is not arrogance but understanding that learning never
              ends.
            </li>
            <li>
              <span className="text-primary font-semibold">Balance:</span> It
              teaches harmony between physical skill, mental focus, and inner
              peace.
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-primary">
          Black Belt Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:no-underline">
              🥋 How long does it take to earn a black belt?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-md md:text-lg leading-relaxed">
              On average, it takes 4–6 years of consistent training and practice,
              depending on the dedication of the student and the school’s
              standards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:no-underline">
              🔥 Is black belt the highest rank in karate?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-md md:text-lg leading-relaxed">
              No, the black belt is the beginning of advanced learning. There
              are multiple degrees (Dan ranks) that represent higher mastery
              levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:no-underline">
              ⚡ What qualities does a black belt represent?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-md md:text-lg leading-relaxed">
              Discipline, respect, focus, perseverance, humility, and leadership—
              values that extend beyond the dojo into daily life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:no-underline">
              🧘 Is becoming a black belt only about fighting skills?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-md md:text-lg leading-relaxed">
              No. It’s equally about mental strength, self-control, respect for
              others, and personal growth along the martial arts journey.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-white hover:no-underline">
              🏆 What comes after achieving a black belt?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-md md:text-lg leading-relaxed">
              A new path begins—teaching, mentoring, and deepening understanding
              of martial arts philosophy and techniques.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default BlackBeltPage;
