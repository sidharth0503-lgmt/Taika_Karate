"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
   {
    image: "/images/gimage4.jpg",  
  },
  {
    image: "/images/gimage11.jpg",  
  },
 {
    image: "/images/gimage5.jpg",  
  },
   {
    image: "/images/gimage24.jpg",  
  },
   {
    image: "/images/gimage2.jpg",  
  },
  {
    image: "/images/gimage6.jpg",  
  },
  {
    image: "/images/gimage7.jpg",  
  },
];

export function Hero() {
  return (
    <section className="relative bg-black">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        speed={900}
        className="w-full h-[300px] md:h-[450px] lg:h-[600px] xl:h-[800px] 2xl:h-screen"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] xl:h-[800px] 2xl:h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0" />
               {/* bg-black/50 */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #ef4444; 
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
