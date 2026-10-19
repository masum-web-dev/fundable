"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pricingPlans = [
  {
    subtitle: "FOR BUSINESS OWNERS STARTING OUT",
    title: "Fundable360 Foundation",
    description: "A self-guided path to real business credit — the complete Fundable360 platform, roadmap, and onboarding, with no ongoing membership required.",
    price: "$995",
    badge: "",
    popular: false,
    features: [
      "Fundable360 Business Credit Platform",
      "Business Credit Foundation",
      "Step-by-Step Funding Roadmap",
      "Concierge Onboarding",
      "Business Credit Education",
      "Vendor & Credit Building Resources"
    ],
  },
  {
    subtitle: "FOR OWNERS WHO WANT SUPPORT",
    title: "Fundable360 Growth",
    description: "The complete Fundable360 program plus two full years of live coaching, monitoring, and accountability.",
    price: "$1,995",
    badge: "MOST POPULAR",
    popular: true,
    features: [
      "EVERYTHING IN FOUNDATION, PLUS:",
      "2 Year Access to Fundable360",
      "Live Business Credit Coaching",
      "Continuous Credit Monitoring",
      "Ongoing Business Credit Reporting",
      "Funding Readiness Guidance",
      "Progress Tracking & Accountability"
    ],
  },
  {
    subtitle: "FOR BUSINESS OWNERS STARTING OUT",
    title: "Fundable360 Elite",
    description: "A lifetime funding partnership — continued access, strategy reviews, and support as your business grows and financing needs evolve.",
    price: "$2,995",
    badge: "",
    popular: false,
    features: [
      "EVERYTHING IN GROWTH, PLUS:",
      "Lifetime Access to Fundable360",
      "Lifetime Access to Future Platform Enhancements",
      "Priority Client Support",
      "Lifetime Access to Updated Training & Resources",
      "Continued Guidance as Financing Needs Evolve",
      "Exclusive Access to 0% Funding Options + DSCR Real Estate Loans"
    ],
  },
];

export default function PricingSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Aro smooth ebong gradual movement er jonno range tike adjust kora holo
  const x2 = useTransform(scrollYProgress, [0.15, 0.45], [180, 0], { clamp: true });
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1], { clamp: true });

  const x3 = useTransform(scrollYProgress, [0.3, 0.6], [180, 0], { clamp: true });
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1], { clamp: true });

  return (
    <section ref={containerRef} className="relative w-full bg-white text-gray-900 py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#f0750b] uppercase block mb-3">
            START SERVICE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
            Choose Your <span style={{ color: '#f0750b' }}>Fundable360</span> Program
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base font-light">
            Three paths to real, fundable business credit — pay in full or spread your enrollment over 6 months.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={index}
                style={
                  !isFirst
                    ? {
                        x: index === 1 ? x2 : x3,
                        opacity: index === 1 ? opacity2 : opacity3,
                      }
                    : {}
                }
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className={`relative flex flex-col justify-between p-8 md:p-10 rounded-3xl transition-all duration-300 shadow-xl ${
                  plan.popular
                    ? "bg-white text-gray-900 border-2 border-[#f0750b] shadow-2xl lg:-translate-y-4"
                    : "bg-gray-50 text-gray-900 border border-gray-200 hover:border-[#f0750b]/50"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f0750b] text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Subtitle */}
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 block mb-3">
                    {plan.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-gray-900">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light mb-6">
                    {plan.description}
                  </p>

                  <div className="w-full h-[1px] bg-gray-200 mb-6" />

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-1">
                      {plan.price}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                      ENROLLMENT
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => {
                      const isHeader = feature.includes("PLUS:");
                      return (
                        <li key={fIdx} className={`flex items-start gap-2.5 text-xs md:text-sm ${isHeader ? "font-bold text-gray-900 pt-2" : "font-light text-gray-700"}`}>
                          {!isHeader && <span className="text-[#f0750b] font-bold mt-0.5">✓</span>}
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Enroll Button */}
                <button className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 shadow-lg ${
                  plan.popular
                    ? "bg-[#f0750b] text-white hover:bg-[#d86609] hover:scale-[1.02]"
                    : "bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02]"
                }`}>
                  Enroll Now
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}