"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const rightItems = [
  {
    title: "What most companies do",
    description: "They focus on the application, sell the product, and hope for an approval.",
  },
  {
    title: "What Fundable360 does differently",
    description: "Our advising team helps strengthen the business itself, then helps owners take advantage of the right opportunities inside our capital ecosystem.",
  },
  {
    title: "Structured Capital Pathway",
    description: "• Strengthen business credibility\n• Build legitimate EIN-based credit\n• Access advanced capital opportunities\n• Create long-term funding leverage",
  },
];

export default function WhyDeniedSection() {
  const containerRef = useRef(null);
  
  // Track scroll progress inside this section for sticky animation & active states
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to determine which item is active (0 to 1 -> 0, 1, 2)
  const activeIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-white text-gray-900">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title, Subtitle, Text & Image */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase block mb-3">
                WHY BUSINESSES GET DENIED
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Most businesses are not denied because the opportunity is bad.
              </h2>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
              They get denied because the business is not properly positioned in the eyes of lenders. Weak structure, thin or nonexistent business credit, poor lender readiness, and pursuing the wrong capital strategy can all limit approvals before the opportunity ever gets a fair look.
            </p>

            {/* Team Image from public folder */}
            <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="/team.jpeg" 
                alt="Advising Team Meeting" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: 3 Sticky/Scrolling Interactive Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {rightItems.map((item, index) => {
              return (
                <RightCard 
                  key={index} 
                  item={item} 
                  index={index} 
                  scrollYProgress={scrollYProgress} 
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function RightCard({ item, index, scrollYProgress }) {
  // Define custom interpolation ranges for smooth background toggle per card
  // Card 0 active from 0.0 to 0.33, Card 1 from 0.33 to 0.66, Card 2 from 0.66 to 1.0
  const start = index * 0.33;
  const end = start + 0.33;

  const bgStyle = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    ["bg-white", "bg-[#f0750b]", "bg-[#f0750b]", index === 2 ? "bg-[#f0750b]" : "bg-white"]
  );

  const textStyle = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    ["text-gray-900", "text-white", "text-white", index === 2 ? "text-white" : "text-gray-900"]
  );

  const descStyle = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    ["text-gray-600", "text-white/90", "text-white/90", index === 2 ? "text-white/90" : "text-gray-600"]
  );

  const borderStyle = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end],
    ["border-gray-200", "border-[#f0750b]", "border-[#f0750b]"]
  );

  return (
    <motion.div
      style={{
        backgroundColor: useTransform(scrollYProgress, v => (v >= start && v < end ? "#f0750b" : "#ffffff")),
        color: useTransform(scrollYProgress, v => (v >= start && v < end ? "#ffffff" : "#111827")),
        borderColor: useTransform(scrollYProgress, v => (v >= start && v < end ? "#f0750b" : "#e5e7eb")),
      }}
      className="p-6 md:p-8 rounded-2xl border-2 shadow-lg transition-all duration-300 backdrop-blur-md"
    >
      <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight">
        {item.title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line font-normal opacity-90">
        {item.description}
      </p>
    </motion.div>
  );
}