"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ecosystemCards = [
  {
    tag: "CORE PROGRAM",
    title: "Business Credit Builder",
    description: "Our Business Credit Builder program helps entrepreneurs strengthen their business foundation, establish real EIN-based credit, and create the kind of lender credibility most businesses are missing.",
    points: [
      "Guidance from our advising team on proper business structure and lender readiness",
      "Strategic vendor and trade accounts that report to the business credit bureaus",
      "Build and strengthen an EIN-based credit profile separate from personal credit",
      "Position the business to qualify for stronger lending opportunities repeatedly."
    ],
    isDark: true, // Black background
  },
  {
    tag: "SIGNATURE OPPORTUNITY",
    title: "0% Stackable Funding Program",
    description: "Our 0% Stackable Funding Program helps qualified clients access meaningful unsecured capital by strategically combining multiple approvals through major financial institutions.",
    points: [
      "Access up to $150K in unsecured funding.",
      "Not driven by business revenue, time in business, or income documentation",
      "Multiple approvals strategically combined to create larger pools of capital",
      "Fast-moving funding strategy typically completed in a few weeks"
    ],
    isDark: false, // White background
  },
  {
    tag: "INVESTOR OPPORTUNITY",
    title: "Real Estate Financing",
    description: "Inside the ecosystem, qualified investors may also access real estate financing solutions designed around property performance rather than traditional income-heavy underwriting.",
    points: [
      "DSCR-based investor loan programs designed for rental property investors",
      "Qualification based primarily on property cash flow rather than personal income",
      "Financing for acquisitions, refinances, and portfolio growth",
      "Built for investors scaling single properties or larger rental portfolios"
    ],
    isDark: true, // Black background
  },
];

export default function EcosystemInside() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white text-gray-900 py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header (Similar to other pages) */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            Inside The <span style={{ color: '#f0750b' }}>Fundable360</span> Ecosystem
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base font-light">
            Supported by our advising team and built to help businesses access the right capital strategies.
          </p>
        </div>

      </div>

      {/* Full Width Sticky Stacking Cards Wrapper */}
      <div className="relative w-full flex flex-col gap-12 pb-24">
        {ecosystemCards.map((card, index) => {
          const targetScale = 1 - (ecosystemCards.length - index) * 0.03;
          
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
      className="sticky top-28 md:top-36 flex items-center justify-center min-h-[550px] w-full px-4 md:px-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ scale, top: `calc(-5vh + ${i * 20}px)` }}
        className={`relative flex flex-col justify-between w-full max-w-[1400px] p-8 md:p-16 rounded-[2.5rem] shadow-2xl origin-top overflow-hidden border-2 transition-colors duration-500 ${
          card.isDark 
            ? "bg-black text-white border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]" 
            : "bg-white text-gray-900 border-gray-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
        }`}
      >
        {/* Background subtle glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f0750b]/10 rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-[#f0750b] block">
              {card.tag}
            </span>
            <span className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-inner ${
              card.isDark 
                ? "bg-white/10 text-white border border-white/20" 
                : "bg-[#f0750b]/10 text-[#f0750b] border border-[#f0750b]/30"
            }`}>
              0{i + 1}
            </span>
          </div>

          <h3 className={`text-3xl md:text-5xl font-extrabold mb-6 tracking-tight ${
            card.isDark ? "text-white" : "text-gray-900"
          }`}>
            {card.title}
          </h3>

          <p className={`text-base md:text-lg leading-relaxed font-normal mb-10 max-w-4xl ${
            card.isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {card.description}
          </p>
        </div>

        {/* Bullet Points */}
        <ul className={`space-y-4 pt-8 border-t ${
          card.isDark ? "border-white/10" : "border-gray-200"
        }`}>
          {card.points.map((point, pIdx) => (
            <li key={pIdx} className="flex items-start gap-3 text-sm md:text-base font-light">
              <span className="text-[#f0750b] font-bold mt-0.5 text-lg">•</span>
              <span className={card.isDark ? "text-gray-300" : "text-gray-700"}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}