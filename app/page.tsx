"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { Hero } from "@/components/hero";
import { BeltTimeline } from "@/components/belt-timeline";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-variants";
import OurGallery from "@/components/ourGallery";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiBoxingGlove } from "react-icons/gi";
import { MdSportsMma, MdSportsKabaddi } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users,
  Trophy,
  Heart,
  Shield,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Flame,
  Sword,
  Brain,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Zap,
  Globe,
  Target,
  Medal,
  Crown,
} from "lucide-react";
import { BRAND, classes, instructors } from "@/lib/data";
import {
  cardVariants,
  containerVariants,
  fadeInUpVariants,
  staggerContainer,
} from "@/lib/motion";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import OurBranches from "@/components/ourBranches";
import Testimonials from "@/components/Testimonials";
import OurAchivements from "@/components/ourAchivements";

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "[Your Dojo Name]",
  image: "https://yourdomainname.com/og-image.jpg",
  description:
    "Premier karate school offering traditional martial arts training for all ages",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Full Address]",
    addressLocality: "[Your City]",
    addressRegion: "[State]",
    postalCode: "[Zip]",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0, // Replace with actual coordinates
    longitude: 0, // Replace with actual coordinates
  },
  url: "https://yourdomainname.com",
  telephone: "[Your Phone]",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://facebook.com/yourpage", "https://instagram.com/yourpage"],
};

interface Program {
  id: number;
  title: string;
  image: string;
  description: string;
  color: string;
}

const benefits = [
  {
    icon: Heart,
    title: "Physical Fitness",
    description:
      "Improve strength, flexibility, and cardiovascular health through dynamic training.",
  },
  {
    icon: Shield,
    title: "Self Defense",
    description:
      "Learn practical techniques to protect yourself and build confidence.",
  },
  {
    icon: Users,
    title: "Character Building",
    description:
      "Develop discipline, respect, and mental toughness that lasts a lifetime.",
  },
  {
    icon: Trophy,
    title: "Goal Achievement",
    description:
      "Progress through belt ranks and compete at local and national levels.",
  },
];

const galleryImages = [
  { src: "./images/karate1.jpg", cols: 2, rows: 2 },
  { src: "./images/karate2.jpg", cols: 1, rows: 2 },
  { src: "./images/karate24.jpeg", cols: 1, rows: 2 },
  { src: "./images/karate26.jpg", cols: 1, rows: 2 },
  { src: "./images/karate27.jpg", cols: 1, rows: 2 },
  { src: "./images/karate25.png", cols: 2, rows: 2 },
  { src: "./images/karate28.jpg", cols: 1, rows: 1 },
  { src: "./images/karate29.jpg", cols: 1, rows: 1 },
  { src: "./images/gimage11.jpg", cols: 1, rows: 1 },
  { src: "./images/karate30.jpg", cols: 1, rows: 1 },
];

export default function Home() {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'd like to schedule a visit to your dojo and learn more about your programs.";
    // window.open(generateWhatsAppUrl(BRAND.whatsapp, message), '_blank')
  };

  const handleCall = () => {
    window.location.href = `tel:${BRAND.phone}`;
  };

  const bene = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Self-Defense",
      desc: "Practical techniques that build confidence and the ability to protect yourself in real-life situations.",
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: "Focus & Discipline",
      desc: "Sharpens the mind, develops self-control, and teaches respect for self and others.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health & Fitness",
      desc: "Improves strength, stamina, flexibility, and overall physical well-being through disciplined training.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Community & Respect",
      desc: "Builds a strong spirit of friendship, respect, and unity in the dojo and beyond.",
    },
  ];


  const SERVICES = [
    {
      title: "Kickboxing",
      content:
        "Build power, stamina, and self-defense skills through our dynamic kickboxing programs designed for all levels.",
      imageSrc: "/images/gimage18.jpg",
      resimageSrc: "/images/gimage18.jpg",
      // link: "#kickboxing",
    },
    {
      title: "Karate",
      content:
        "Learn traditional karate with modern techniques. Gain discipline, confidence, and sharp focus in every class.",
      imageSrc: "/images/gimage5.jpg",
      resimageSrc: "/images/gimage5.jpg",
      // link: "#karate",
    },
    {
      title: "Martial Arts",
      content:
        "Master a blend of martial arts styles. Our programs are designed to enhance strength, flexibility, and resilience.",
      imageSrc: "/images/karate10.jpg",
      resimageSrc: "/images/karate10.jpg",
      // link: "#martialarts",
    },
  ];

  const stats = [
  { value: 10000, label: "Students Trained" },
  { value: 25, label: "Years of Experience" },
  { value: 2000, label: "Black Belts Awarded" },
];

  function StatCard({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; 
      const stepTime = 20;
      const increment = value / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, stepTime);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      className="flex flex-col items-center bg-gradient-to-br from-gray-800/60 to-gray-900/80 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-3xl md:text-4xl font-bold gradient-text">
        {count.toLocaleString()}+
      </h3>
      <p className="text-gray-300 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-900 section-padding container-padding">
        <div className="mx-auto flex flex-col items-center text-center space-y-4 max-w-5xl">
          {/* Heading */}
          <motion.h2
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-section font-heading font-bold text-white"
          >
            About <span className="gradient-text">Us</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-muted-dark mx-auto"
          >
            At <span className="font-semibold">Kaarti Academy</span>, martial
            arts is more than training—it’s a way of life. Guided by our
            Founder,
            <span className="font-semibold text-primary">
              {" "}
              Grandmaster Shihan Dr. Ashok Chakravarti
            </span>
            , a distinguished martial arts expert with over{" "}
            <span className="text-primary">25 years</span> of experience, we are
            dedicated to shaping confident, disciplined, and focused
            individuals. As the founder of the{" "}
            <span className="font-semibold">International Taika Academy</span>,
            Dr. Chakravarti has been instrumental in advancing Karate across
            South India, inspiring countless students.
          </motion.p>

          <motion.p
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-muted-dark mx-auto"
          >
            Our programs in{" "}
            <span className="text-primary">
              Karate, Kickboxing, and Martial Arts
            </span>{" "}
            go beyond physical training—they nurture{" "}
            <span className="font-semibold">
              respect, discipline, and perseverance
            </span>
            . At Kaarti Academy, we empower students of all ages and skill
            levels to unlock their full potential, both on the mat and in
            everyday life.
          </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8 mt-10 w-full max-w-4xl">
      {stats.map((stat, i) => (
        <StatCard key={i} value={stat.value} label={stat.label} delay={i * 0.2} />
      ))}
    </div>
        </div>

        {/* Services Section */}
        <div className="mt-4 md:mt-8 mx-auto w-full">
          <div className="hidden xl:block">
            {SERVICES.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer border-b border-gray-700 group hover:bg-gradient-to-r hover:from-primary hover:to-red-900/20 transition-all"
              >
                <div className="grid grid-cols-12 gap-6 items-center p-6 relative">
                  <h2 className="text-3xl font-semibold col-span-4">
                    {item.title}
                  </h2>
                  <p className="text-white col-span-5 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-700">
                    {item.content}
                  </p>
                  <Image
                    src={item.imageSrc}
                    width={200}
                    height={200}
                    alt={item.title}
                    className="absolute right-20 w-[180px] h-[180px] object-cover rounded-xl shadow-lg transform scale-0 group-hover:scale-100 group-hover:-rotate-3 transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="xl:hidden grid md:grid-cols-2 gap-8 mt-6">
            {SERVICES.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex flex-col gap-1 group"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={item.resimageSrc}
                    fill
                    alt={item.title}
                    className="object-cover rounded-lg transform transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold gradient-text">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="relative flex justify-center md:justify-end">
          <div className="w-24 h-32 md:w-64 md:h-80 relative rounded-2xl border-2 border-red-600 overflow-hidden shadow-lg z-10 mr-2 md:mr-4">
        
            <Image
              src="/images/karate7.jpg"
              alt="Kickboxing Session"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-24 h-32  md:w-64 md:h-80 relative rounded-2xl border-2 border-red-600 overflow-hidden shadow-lg mr-2 md:mr-4 mt-12">
            <Image
              src="/images/gimage20.jpg"
              alt="Karate Training"
              fill
              className="object-cover"
            />
          </div>
            <div className="w-24 h-32  md:w-64 md:h-80 relative rounded-2xl border-2 border-red-600 overflow-hidden shadow-lg z-10">
        
            <Image
              src="/images/karate4.jpg"
              alt="Kickboxing Session"
              fill
              className="object-cover"
            />
          </div>
          
          
        </div>
   */}

      {/* Why Karate Section */}
      <section
        className="bg-gradient-to-br from-black via-gray-900 to-gray-900
 section-padding container-padding"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-8 md:mb-14"
        >
          <motion.h2
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-section font-heading font-bold text-white mb-4"
          >
            Why Choose <span className="gradient-text">Karate?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
          >
            Discover the life-changing benefits of traditional martial arts
            training
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.05 + index * 0.1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer group transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-primary transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative bg-gradient-to-br  via-gray-600 to-gray-400 text-white overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 bg-[url('/images/karate1.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative  section-padding container-padding mx-auto text-center space-y-6">
          <motion.h2
            variants={fadeInUpVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-section font-heading font-bold text-white mb-4"
          >
            We Are Training in{" "}
            <span className="gradient-text">Shotokan Karate</span>
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
          >
            Shotokan Karate is more than martial arts — it is a way of life. It
            empowers people to grow stronger physically, mentally, and
            spiritually. Practicing Shotokan cultivates respect, confidence, and
            resilience, making it a powerful tool for leading a balanced and
            purposeful life.
          </motion.p>

          {/* Benefit Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {bene.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.05 + index * 0.1,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-red-700 hover:scale-105 transition shadow-lg"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Belt Timeline */}
      <BeltTimeline />

      <OurGallery />

      <Testimonials />

      <OurAchivements />

      <OurBranches />

      {/* contact us */}
     

      <TestimonialsCarousel />
    </>
  );
}
