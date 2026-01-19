'use client';

import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

/* SLIDES WITH CORRESPONDING SLIDER DATA */
const slides = [
  {
    image: '/images/extras/1.webp',
    labels: [
      '2BHK',
      '3BHK',
      '4BHK',
      'BUY',
      'SELL',
      'FLATS',
      'PLOTS',
      'COMMERCIAL SPACES',
    ],
  },
  {
    image: '/images/extras/2.webp',
    labels: [
      '3BHK',
      '4BHK',
      '4.5BHK',
      'GATED COMMUNITY',
      'RESIDENTIAL',
      'PENTHOUSES',
      'LUXURY',
    ],
  },
    {
    image: '/images/extras/3.webp',
    labels: [
      'ULTRA LUXURY',
      'COMMERCIAL UNITS',
      'OFFICES SPACES',
      'ONGOING PROJECTS',
    ],
  },
    {
    image: '/images/extras/4.webp',
    labels: [
      'RESIDENTIAL FLATS',
      'COMMERCIAL SPACES',
      '20+ AMENITIES',
      '42+ PREMIUM OFFICES',
      '2BHK',
      '3BHK',
      
    ],
  },
    {
    image: '/images/extras/5.webp',
    labels: [
      'LUXARY REAL ESTATE',
      'PRICE ₹53-82L',
      '10+ FACILITIES',
      'MODERN ARCHITECTURE',
      'GATED COMMUNITY',
      'READY TO MOVE',
      'SWIMMING POOL',
      
    ],
  },

];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {/* HERO SECTION */}
     <section
  className="
    relative
    mt-16
    sm:mt-10
    md:mt-16
    lg:mt-18
    h-[50vh]
    sm:h-[50vh]
    md:h-[70vh]
    lg:h-[90vh]
    w-screen
    bg-white
    overflow-hidden
  "
>


        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-screen h-[50vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover object-center max-w-none"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* BOTTOM SLIDER */}
<div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden">
  <div
    className="
      bg-gradient-to-r from-[#8b5a17] via-[#caa24d] to-[#8b5a17]
      py-2
      shadow-md
    "
  >
    <div className="flex whitespace-nowrap animate-marquee">
      {[...slides[current].labels, ...slides[current].labels].map(
        (label, index) => (
          <span
            key={index}
            className="
              mx-4 sm:mx-6
              text-white
              text-[10px] sm:text-sm md:text-base
              font-semibold
              tracking-wide
            "
          >
            
            {label}
           
          </span>
        )
      )}
    </div>
  </div>
</div>


        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                     bg-white/20 hover:bg-white/40
                     backdrop-blur-md text-white
                     w-12 h-12 rounded-full
                     flex items-center justify-center"
          aria-label="Previous slide"
        >
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                     bg-white/20 hover:bg-white/40
                     backdrop-blur-md text-white
                     w-12 h-12 rounded-full
                     flex items-center justify-center"
          aria-label="Next slide"
        >
          ❯
        </button>
      </section>


    </>
  );
}
