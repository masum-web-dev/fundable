"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stepsData = [
  {
    number: "01",
    title: "Enter the Ecosystem",
    description: "Our advising team starts with a consultation to understand the business, the goals, and where the owner fits inside the Fundable360 ecosystem.",
    position: "left",
  },
  {
    number: "02",
    title: "Strengthen the Foundation",
    description: "We help strengthen the business through structure, credibility, and business credit strategy so the company becomes more fundable over time.",
    position: "right",
  },
  {
    number: "03",
    title: "Unlock the Right Opportunities",
    description: "Qualified clients can take advantage of advanced capital opportunities inside the ecosystem, including our 0% Stackable Funding Program and investor real estate financing.",
    position: "left",
  },
  {
    number: "04",
    title: "Build Long-Term Leverage",
    description: "The goal is not just a one-time approval. The ecosystem is designed to help businesses build repeatable capital leverage as they grow.",
    position: "right",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -500]);
  const yRight = useTransform(scrollYProgress, [0, 1], [250, -650]);

  return (
    <section ref={containerRef} className="relative w-full h-[220vh] bg-black text-white py-32">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 md:px-12 overflow-hidden">
        
        <div className="absolute w-[400px] h-[400px] bg-[#f0750b]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Center Heading & Description (E nyenyane kudu gore e se tšwele ka ntle) */}
        <div className="relative z-30 text-center max-w-sm md:max-w-md mx-auto px-4 pointer-events-none">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white leading-tight pointer-events-auto">
            How Businesses Work Inside the <span style={{ color: '#f0750b' }}>Fundable360</span> Ecosystem
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed pointer-events-auto">
            The ecosystem is built to help business owners understand where they stand today, strengthen their foundation, and take advantage of the capital strategies that fit them best.
          </p>
        </div>

        {/* Scrolling Cards Wrapper - Šutšweditšwe kudu ka thoko (left-0 le right-0) */}
        <div className="absolute inset-0 max-w-[1600px] mx-auto px-2 md:px-6 flex justify-between items-start pointer-events-none z-10">
          
          {/* Left Side Cards */}
          <motion.div style={{ y: yLeft }} className="w-[32%] md:w-[34%] flex flex-col gap-48 pt-20 pointer-events-auto">
            {stepsData.filter(item => item.position === "left").map((step, idx) => (
              <div 
                key={idx}
                className="bg-black/95 backdrop-blur-xl border border-white/15 p-5 md:p-6 rounded-2xl shadow-2xl hover:border-[#f0750b]/60 transition-all duration-300"
              >
                <span className="text-xs font-bold tracking-widest text-[#f0750b] uppercase block mb-1">
                  STEP {step.number}
                </span>
                <h3 className="text-base md:text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Side Cards */}
          <motion.div style={{ y: yRight }} className="w-[32%] md:w-[34%] flex flex-col gap-48 pt-44 pointer-events-auto">
            {stepsData.filter(item => item.position === "right").map((step, idx) => (
              <div 
                key={idx}
                className="bg-black/95 backdrop-blur-xl border border-white/15 p-5 md:p-6 rounded-2xl shadow-2xl hover:border-[#f0750b]/60 transition-all duration-300"
              >
                <span className="text-xs font-bold tracking-widest text-[#f0750b] uppercase block mb-1">
                  STEP {step.number}
                </span>
                <h3 className="text-base md:text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}