"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeInUpVariants } from "@/lib/motion";

type Partner = {
  img: string;
  name: string;
  address: string;
};

export default function OurBranches() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const partners: Partner[] = [
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "4th Floor, Harsha Pride, Botanical Garden Rd, Above KS Bakers, Kondapur, Hyderabad, Telangana 500084",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "Plot No. 92, Near Venkateswara Swamy Temple, Gayatri Nagar, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "4th Floor, Gokul Plots, Opposite Prajay Apartments, Near Tinder Cuts, KPHB Colony, Kukatpally, Hyderabad, Telangana 500085",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "Gate No. 1, Plot No. 436, Mathrusree Nagar, Miyapur, Telangana 500049",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "Back of Huda Park, Road No. 22, Near Old Age Home, Huda Complex, Mayuri Nagar, Miyapur, Hyderabad, Telangana 500049",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "Plot No. 25, 180, Road No. 9B, Swamy Ayyappa Society, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081",
    },
    {
      img: "https://content3.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.120202154543.u2x6/catalogue/taika-martial-arts-academy-kukatpally-hyderabad-karate-classes-s4bhwewj4h.jpg",
      name: "International Taika martial arts academy",
      address:
        "Mahadev Puram, Sai Krupa Apartment, Beside Sai Baba Temple, Gajularamaram, Hyderabad, Telangana 500117",
    },
    {
      img: "https://acchevibes.com/wp-content/uploads/2023/04/2022-04-16.jpg",
      name: "International Taika martial arts academy",
      address: "V.V Nagar, Kukatpally, Hyderabad, Telangana",
    },
  ];

  const totalPartners = partners.length;
  // Create multiple copies for infinite scroll
  const extendedPartners = [...partners, ...partners, ...partners];

  // Update screen size
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const getCardWidth = () =>
    screenSize === "mobile" ? 280 : screenSize === "tablet" ? 300 : 320;

  // Initialize scroll position to middle set
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth() + 24;
      scrollRef.current.scrollLeft = totalPartners * cardWidth;
    }
  }, [screenSize]);

  // Auto-scroll with infinite loop - enhanced for tablet
  useEffect(() => {
    const cardWidth = getCardWidth() + 24;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      let nextIndex;
      let scrollPosition;

      if (screenSize === "tablet") {
        // For tablet, advance by 2 cards to show new pair
        nextIndex = (currentIndex + 2) % totalPartners;
        scrollPosition = (totalPartners + nextIndex) * cardWidth;
      } else {
        // Mobile and desktop advance by 1
        nextIndex = (currentIndex + 1) % totalPartners;
        scrollPosition = (totalPartners + nextIndex) * cardWidth;
      }

      scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, screenSize, totalPartners]);

  // Handle infinite scroll reset
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const cardWidth = getCardWidth() + 24;
      const scrollLeft = scrollRef.current.scrollLeft;
      const maxScroll =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      // Reset to middle when reaching edges
      if (scrollLeft <= cardWidth) {
        scrollRef.current.scrollLeft = totalPartners * cardWidth + cardWidth;
      } else if (scrollLeft >= maxScroll - cardWidth) {
        scrollRef.current.scrollLeft = totalPartners * cardWidth;
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", handleScroll);
    return () => scrollElement?.removeEventListener("scroll", handleScroll);
  }, [screenSize, totalPartners]);

  return (
    <div className="w-full p-4 sm:p-6 xl:p-12 flex flex-col lg:flex-row items-center bg-black text-white">
      {/* min-h-screen */}
      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="w-full lg:w-[60%]  flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mb-0"
      >
        <motion.h2
          variants={fadeInUpVariants}
          className="text-3xl md:text-5xl font-heading font-bold text-white"
        >
          Our <span className="gradient-text">Branches</span>
        </motion.h2>
        <motion.p
          variants={fadeInUpVariants}
          className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl"
        >
          Our karate branches provide top-notch martial arts training that
          develops discipline, strength, and confidence. With expert instructors
          and world-class facilities, we aim to help every student achieve their
          full potential.
        </motion.p>
      </motion.div>

      {/* Partner Carousel */}
      <div className="w-full lg:w-[40%] relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto cursor-grab hide-scrollbar py-6 px-2 scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex gap-6">
            {extendedPartners.map((partner, index) => {
              const partnerIndex = index % totalPartners;
              let isCenter = false;

              // Different center logic based on screen size
              if (screenSize === "mobile") {
                isCenter = partnerIndex === currentIndex;
              } else if (screenSize === "tablet") {
                // In tablet, show current and next card as prominent
                isCenter = partnerIndex === (currentIndex + 1) % totalPartners;
              } else {
                // Desktop - show current as center
                isCenter = partnerIndex === currentIndex;
              }

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex-none transform transition-all duration-700 ease-out ${
                    isCenter
                      ? "scale-110 sm:scale-115 lg:scale-120 opacity-100 z-10"
                      : "scale-80 sm:scale-85 opacity-60 z-0"
                  }`}
                  style={{
                    scrollSnapAlign: "center",
                    width: `${getCardWidth()}px`,
                  }}
                >
                  <div
                    className={`relative rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center transition-all duration-700 shadow-2xl backdrop-blur-sm ${
                      isCenter
                        ? "bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent border-2 border-red-500 shadow-red-500/25"
                        : "bg-gray-800/40 border border-gray-600/30 hover:border-gray-500/50"
                    }`}
                    style={{
                      minHeight: "160px",
                      maxHeight: "200px",
                    }}
                  >
                    {isCenter && (
                      <>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent blur-xl -z-10"></div>
                        {/* {(screenSize !== "tablet" ||
                          partnerIndex === currentIndex) && (
                          <>
                            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-gradient-to-b from-red-500 to-red-300 rounded-full animate-pulse opacity-70"></div>
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-gradient-to-b from-red-500 to-red-300 rounded-full animate-pulse opacity-70"></div>
                          </>
                        )} */}
                      </>
                    )}

                    <div
                      className={`relative mb-3 transition-all duration-700 ${
                        isCenter ? "hover:scale-105" : ""
                      }`}
                    >
                      {/* <div
                        className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-24 rounded-xl overflow-hidden ${
                          isCenter ? "ring-2 ring-red-400/50" : ""
                        }`}
                      >
                        <Image
                          src={partner.img}
                          alt={partner.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          loading="lazy"
                        />
                      </div> */}

                      {isCenter &&
                        (screenSize !== "tablet" ||
                          partnerIndex === currentIndex) && (
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                    </div>

                    <h5
                      className={`text-center font-semibold transition-all duration-700 leading-snug ${
                        isCenter
                          ? "text-white text-xs sm:text-sm lg:text-base"
                          : "text-gray-300 text-[11px] sm:text-xs lg:text-sm"
                      }`}
                    >
                      {partner.name}
                    </h5>

                    <p
                      className={`mt-1 text-center transition-all duration-700 leading-snug ${
                        isCenter
                          ? "text-gray-400 text-[10px] sm:text-xs lg:text-sm"
                          : "text-gray-500 text-[9px] sm:text-[11px] lg:text-xs"
                      }`}
                    >
                      {partner.address}
                    </p>

                    {/* {isCenter &&
                      (screenSize !== "tablet" ||
                        partnerIndex === currentIndex) && (
                        <div className="mt-2 w-10 h-0.5 bg-gradient-to-r from-red-500 to-red-300 rounded-full animate-pulse"></div>
                      )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation dots */}
        {/* <div className="flex justify-center mt-6 gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-red-500 w-6" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => {
                const cardWidth = getCardWidth() + 24;
                let scrollPosition;
                
                if (screenSize === "tablet") {
                  // For tablet, position to show the clicked card as the first of the pair
                  scrollPosition = (totalPartners + Math.floor(index / 2) * 2) * cardWidth;
                  setCurrentIndex(Math.floor(index / 2) * 2);
                } else {
                  // Mobile and desktop
                  scrollPosition = (totalPartners + index) * cardWidth;
                  setCurrentIndex(index);
                }
                
                scrollRef.current?.scrollTo({ left: scrollPosition, behavior: "smooth" });
              }}
            />
          ))}
        </div> */}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth sliding animations */
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        /* Enhanced glow animation */
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.5),
              0 0 40px rgba(239, 68, 68, 0.2);
          }
        }
      `}</style>
    </div>
  );
}
