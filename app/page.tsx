'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '@/components/hero';
import { BeltTimeline } from '@/components/belt-timeline';

import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button-variants';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiBoxingGlove } from "react-icons/gi";
import { MdSportsMma, MdSportsKabaddi } from "react-icons/md";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
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
  Crown
} from 'lucide-react';
import { BRAND, classes, instructors } from '@/lib/data';
import { cardVariants, containerVariants, fadeInUpVariants,staggerContainer } from '@/lib/motion';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import OurBranches from '@/components/ourBranches';
import Testimonials from '@/components/Testimonials'
import OurAchivements from '@/components/ourAchivements'

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: '[Your Dojo Name]',
  image: 'https://yourdomainname.com/og-image.jpg',
  description: 'Premier karate school offering traditional martial arts training for all ages',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Full Address]',
    addressLocality: '[Your City]',
    addressRegion: '[State]',
    postalCode: '[Zip]',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0, // Replace with actual coordinates
    longitude: 0, // Replace with actual coordinates
  },
  url: 'https://yourdomainname.com',
  telephone: '[Your Phone]',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://facebook.com/yourpage',
    'https://instagram.com/yourpage',
  ],
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
    const message = "Hi! I'd like to schedule a visit to your dojo and learn more about your programs."
    // window.open(generateWhatsAppUrl(BRAND.whatsapp, message), '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${BRAND.phone}`
  }

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


const aboutCards = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Our Passion",
      subtitle: "Crafting Digital Excellence",
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      textColor: "text-white",
      description: "At Kaarti, we are passionate about transforming ideas into stunning digital experiences. Our dedication to excellence drives us to create solutions that not only meet but exceed expectations, bringing your vision to life with creativity and precision."
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Our Team", 
      subtitle: "Talented Professionals",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      description: "Our diverse team of designers, developers, and strategists brings together years of experience and fresh perspectives. We collaborate seamlessly to deliver innovative solutions that push boundaries and set new standards in the digital landscape."
    },
    {
      id: 3,
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Our Achievement",
      subtitle: "Proven Track Record",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600", 
      textColor: "text-white",
      description: "With over 500+ successful projects and 200+ satisfied clients worldwide, Kaarti has established itself as a trusted partner in digital transformation. Our commitment to quality and innovation has earned us recognition and long-lasting partnerships."
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Our Vision",
      subtitle: "Future-Forward Thinking",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      textColor: "text-white", 
      description: "We envision a future where technology seamlessly integrates with human creativity. Our goal is to be at the forefront of digital innovation, continuously evolving our skills and approaches to help businesses thrive in an ever-changing digital world."
    }
  ];


const SERVICES = [
  {
    title: "Kickboxing",
    content:
      "Build power, stamina, and self-defense skills through our dynamic kickboxing programs designed for all levels.",
    imageSrc:
      "/images/gimage18.jpg",
    resimageSrc:
      "/images/gimage18.jpg",
    // link: "#kickboxing",
  },
  {
    title: "Karate",
    content:
      "Learn traditional karate with modern techniques. Gain discipline, confidence, and sharp focus in every class.",
    imageSrc:
      "/images/gimage5.jpg",
    resimageSrc:
      "/images/gimage5.jpg",
    // link: "#karate",
  },
  {
    title: "Martial Arts",
    content:
      "Master a blend of martial arts styles. Our programs are designed to enhance strength, flexibility, and resilience.",
    imageSrc:
      "/images/karate10.jpg",
    resimageSrc:
      "/images/karate10.jpg",
    // link: "#martialarts",
  },
];


  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-900
       section-padding container-padding">
      <div className="mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8">
  <div className="space-y-6 text-center md:text-left">
 <motion.h2
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-section font-heading font-bold text-white mb-4"
        >
          About <span className="gradient-text">Us</span>
        </motion.h2>

 <motion.p
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-md md:text-lg text-muted-dark mx-auto"
        >
           At <span className="font-semibold">Kaarti Academy</span>, we believe martial arts is more than
    training—it’s a way of life. Our programs in Karate, Kickboxing, and Martial Arts
    build confidence, discipline, respect, and focus on and off the mat.
        </motion.p>

  <div className="flex gap-6 justify-center md:justify-start">
    <div className="flex flex-col items-center gap-1 md:gap-2">
      <div className="p-3 md:p-4 bg-red-600 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <GiBoxingGlove className="h-4 w-4 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-sm text-gray-300">Boxing</span>
    </div>

    <div className="flex flex-col items-center gap-1 md:gap-2">
      <div className="p-3 md:p-4 bg-red-600 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <MdSportsMma className="h-4 w-4 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-sm text-gray-300">Karate</span>
    </div>
    <div className="flex flex-col items-center gap-1 md:gap-2">
      <div className="p-3 md:p-4 bg-red-600 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <MdSportsKabaddi className="h-4 w-4 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-sm text-gray-300">Martial Arts</span>
    </div>
  </div>
</div>
      
        <div className="relative flex justify-center md:justify-end">
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
  

      </div>

      <div className="mt-4">
        {/* Desktop View */}
        <div className="hidden xl:block">
          {SERVICES.map((item, index) => (
            <div
              // key={index}
              // onClick={() => (window.location.href = item.link)}
              className="cursor-pointer border-b border-gray-700 group hover:bg-gradient-to-r hover:from-red-900/40 hover:to-red-600/20 transition-all"
            >
              <div className="grid grid-cols-12 gap-6 items-center p-6 relative">
                <h2 className="text-3xl font-semibold col-span-4">
                  {item.title}
                </h2>

                <p className="text-gray-400 col-span-5 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-700">
                  {item.content}
                </p>

                <Image
                  src={item.imageSrc}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="absolute right-20 w-[180px] h-[180px] object-cover rounded-xl shadow-lg transform scale-0 group-hover:scale-100 group-hover:-rotate-3 transition-all duration-700"
                />

                {/* <div className="flex justify-end col-span-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 
                    group-hover:bg-red-600 group-hover:text-white 
                    transform transition-all duration-500 group-hover:-translate-y-1 group-hover:-rotate-12"
                  >
                    <IoArrowForwardOutline size={22} />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
      <div className="xl:hidden grid md:grid-cols-2 gap-8">
  {SERVICES.map((item, index) => (
    <div
      // key={index}
      // onClick={() => (window.location.href = item.link)}
      className="cursor-pointer flex flex-col gap-3 group"
    >
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={item.resimageSrc}
          fill
          alt={item.title}
          className="object-cover rounded-lg transform transition-all duration-500"
        />
        {/* <div
          className="absolute bottom-3 right-3 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center 
          transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-12"
        >
          <IoArrowForwardOutline size={18} />
        </div> */}
      </div>
      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
      <p className="text-sm text-gray-300">{item.content}</p>
    </div>
  ))}
</div>

      </div>
    </section>


      {/* Why Karate Section */}
     <section className="bg-gradient-to-br from-black via-gray-900 to-gray-900
 section-padding container-padding">
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
          Discover the life-changing benefits of traditional martial arts training
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
       <div
    className="absolute inset-0 bg-[url('/images/karate1.jpg')] bg-cover bg-center opacity-10"
  />
      <div className="relative  section-padding container-padding mx-auto text-center space-y-6">
       <motion.h2
          variants={fadeInUpVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-section font-heading font-bold text-white mb-4"
        >
          We Are Training in <span className="gradient-text">Shotokan Karate</span>
        </motion.h2>  
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
         className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
        >
          Shotokan Karate is more than martial arts — it is a way of life.  
          It empowers people to grow stronger physically, mentally, and spiritually.  
          Practicing Shotokan cultivates respect, confidence, and resilience,  
          making it a powerful tool for leading a balanced and purposeful life.
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

    <Section>
  {/* Heading */}
  <motion.div
    variants={containerVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: false }}
    className="text-center mb-6 md:mb-12"
  >
    <motion.h2
      variants={fadeInUpVariants}
      className="text-section font-heading font-bold text-white mb-4"
    >
      Our <span className="gradient-text">Karate</span> Gallery
    </motion.h2>
    <motion.p
      variants={fadeInUpVariants}
      className="text-md md:text-lg text-muted-dark max-w-2xl mx-auto"
    >
      A collection of memorable moments and achievements from our karate classes, showcasing dedication, training, and progress.
    </motion.p>
  </motion.div>

  {/* Responsive Masonry Grid */}
  <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 md:gap-2 auto-rows-[150px] sm:auto-rows-[150px] md:auto-rows-[180px] ">
      {galleryImages.map(({ src, cols, rows }, idx) => (
        <motion.div
          key={idx}
          className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
          style={{
            // On mobile: 1 col, 1 row
            gridColumn: `span ${cols > 1 ? cols : 1}`,
            gridRow: `span ${rows > 1 ? rows : 1}`,
          }}
        >
          <img
            src={src}
            alt={`Karate image ${idx + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  </div>
</Section>


  <Testimonials/>

  <OurAchivements/>



      {/* Programs Overview */}
     
      {/* <Section className="bg-dark">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-section font-heading font-bold text-white mb-4"
          >
            Our <span className="gradient-text">Programs</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg text-muted-dark max-w-2xl mx-auto"
          >
            Tailored training programs for every age and skill level
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.slice(0, 3).map((program, index) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 card-hover"
            >
              <div className="h-48 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-6xl opacity-20">
                  {index + 1}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="belt" className="text-primary border-primary">
                    {program.ageGroup}
                  </Badge>
                  <span className="text-muted text-sm">{program.duration}</span>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {program.name}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  {program.benefits.slice(0, 2).map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/classes#${program.id}`} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUpVariants}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/classes" className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section> */}

      {/* our branches */}
    <OurBranches/>


        {/* contact us */}
      <Section className="section-padding bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E50914' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Ready to Begin Your <span className="gradient-text">Journey?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUpVariants}
            className="text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of students who have transformed their lives through martial arts. 
            Your first class is completely free!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 text-lg px-8 py-4 shimmer-effect"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start with WhatsApp</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="flex items-center space-x-2 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              <span>Call {BRAND.phone}</span>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-light mb-1">Call Us</h3>
              <p className="text-muted text-sm">{BRAND.phone}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-light mb-1">WhatsApp</h3>
              <p className="text-muted text-sm">{BRAND.whatsapp}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-light mb-1">Visit Us</h3>
              <p className="text-muted text-sm">{BRAND.address}</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 p-6 bg-dark-secondary/50 rounded-2xl border border-white/10"
          >
            <h3 className="font-heading font-bold text-light mb-4">Training Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-primary font-semibold">Monday - Friday</p>
                <p className="text-muted">{BRAND.hours.weekdays}</p>
              </div>
              <div>
                <p className="text-primary font-semibold">Saturday</p>
                <p className="text-muted">{BRAND.hours.saturday}</p>
              </div>
              <div>
                <p className="text-primary font-semibold">Sunday</p>
                <p className="text-muted">{BRAND.hours.sunday}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
     </Section>

      {/* Schedule Teaser */}
      {/* <Section className="bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUpVariants}>
              <h2 className="text-section font-heading font-bold text-white mb-4">
                Flexible <span className="gradient-text">Schedule</span>
              </h2>
              <p className="text-lg text-muted-dark mb-8 leading-relaxed">
                We offer morning and evening classes throughout the week to fit your busy lifestyle. 
                Start your martial arts journey at a time that works for you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-white">Monday - Friday: 6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-white">Saturday: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-white">[Your City] Location</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/schedule">View Full Schedule</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/[Your WhatsApp Number]" target="_blank" rel="noopener noreferrer">
                    Book Trial Class
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="font-heading font-semibold text-white mb-6 text-center">
                This Week's Schedule
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday', class: 'Adult Traditional', time: '7:45 PM', spots: '3 spots left' },
                  { day: 'Tuesday', class: 'Kids Karate', time: '5:00 PM', spots: 'Open enrollment' },
                  { day: 'Wednesday', class: 'Teen Warriors', time: '6:15 PM', spots: '2 spots left' },
                  { day: 'Friday', class: 'Little Dragons', time: '4:00 PM', spots: 'Open enrollment' },
                ].map((session) => (
                  <div key={session.day} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                    <div>
                      <div className="text-white font-medium text-sm">{session.class}</div>
                      <div className="text-muted text-xs">{session.day} • {session.time}</div>
                    </div>
                    <Badge 
                      variant={session.spots.includes('spots left') ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {session.spots}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section> */}

      {/* Instructor Highlights */}
      {/* <Section className="bg-dark">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-section font-heading font-bold text-white mb-4"
          >
            Meet Our <span className="gradient-text">Masters</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg text-muted-dark max-w-2xl mx-auto"
          >
            Learn from world-class instructors with decades of experience
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 card-hover text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">
                  {instructor.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-white mb-1">
                {instructor.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {instructor.rank}
              </p>
              <Badge variant="belt" className="mb-4">
                {instructor.belt}
              </Badge>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {instructor.bio.slice(0, 80)}...
              </p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted">
                {instructor.experience}+ years experience
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUpVariants}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/instructors" className="flex items-center gap-2">
              Meet All Instructors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section> */}

      {/* Testimonials */}
      <TestimonialsCarousel />

     
    </>
  );
}