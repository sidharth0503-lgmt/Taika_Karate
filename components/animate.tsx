"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    },
  }),
  exit: { opacity: 0, y: 30, scale: 0.8 },
};

export default function FloatingSocialButtons() {
  const [showButtons, setShowButtons] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowButtons(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <motion.a
            custom={0}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            href="https://www.instagram.com/taika_martial_arts_academy?igsh=MTU4aTExNXRlbmh3bg=="
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="p-2.5 md:p-3 rounded-full shadow-xl text-white 
                       bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
            </svg>
          </motion.a>

          <motion.a
            custom={1}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            href="https://youtube.com/@taikamartialartsacademy8548?si=VrVUE0W-XK2O82k4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-2.5 md:p-3 rounded-full shadow-xl 
             hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              stroke="red"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5.19-3L10 9v6z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.498 6.186a2.997 2.997 0 00-2.113-2.113C19.743 3.5 12 3.5 12 3.5s-7.743 0-9.385.573a2.997 2.997 0 00-2.113 2.113C0 7.828 0 12 0 12s0 4.172.502 5.814a2.997 2.997 0 002.113 2.113C4.257 20.5 12 20.5 12 20.5s7.743 0 9.385-.573a2.997 2.997 0 002.113-2.113C24 16.172 24 12 24 12s0-4.172-.502-5.814zM10 15V9l5.19 3L10 15z"
              />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
