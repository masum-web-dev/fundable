"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardsData = [
  {
    number: "01",
    title: "Our Advising Team",
    description: "Every client works directly with our advising team, giving business owners real guidance inside the Fundable360 ecosystem instead of being left to figure it out on their own.",
  },
  {
    number: "02",
    title: "Our Business Credit Builder Program",
    description: "At the core of the ecosystem is our Business Credit Builder program, designed to help businesses become more credible, more structured, and more attractive in the eyes of lenders.",
  },
  {
    number: "03",
    title: "Access to Advanced Capital Opportunities",
    description: "Clients may also access funding opportunities inside the ecosystem, including a variety of capital solutions designed to support business growth and expansion.",
  },
];

export default function EcoSystemCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white text-gray-900 py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            The <span style={{ color: '#f0750b' }}>Fundable360</span> Ecosystem
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base font-light">
            Designed to guide you through every stage of your capital journey with structured pathways.
          </p>
        </div>

        {/* Sticky Stacking Cards Wrapper */}
        <div className="relative flex flex-col gap-12 pb-24">
          {cardsData.map((card, index) => {
            const targetScale = 1 - (cardsData.length - index) * 0.05;
            
            return (
              <Card 
                key={index} 
                i={index} 
                card={card} 
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Card({ i, card, progress, range, targetScale }) {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="sticky top-28 md:top-36 flex items-center justify-center min-h-[450px]"
    >
      <motion.div 
        initial={{ opacity: 0, x: -60, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col md:flex-row justify-between w-full max-w-4xl bg-white text-gray-900 border-2 border-[#f0750b]/40 rounded-3xl p-8 md:p-14 shadow-2xl origin-top overflow-hidden"
      >
        {/* Background subtle glow */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#f0750b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col justify-between max-w-xl z-10">
          <div>
            <span className="text-5xl md:text-7xl font-black tracking-tighter text-[#f0750b] opacity-90 block mb-4">
              {card.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              {card.title}
            </h3>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">
            {card.description}
          </p>
        </div>

        {/* Right side number box badge */}
        <div className="hidden md:flex flex-col justify-center items-end z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#f0750b]/10 border border-[#f0750b]/30 flex items-center justify-center text-[#f0750b] font-bold text-xl shadow-inner">
            {card.number}
          </div>
        </div>
      </motion.div>
    </div>
  );
}