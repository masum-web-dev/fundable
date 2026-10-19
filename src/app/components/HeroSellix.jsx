"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;

    const handleMotionPreference = () => {
      if (!video) return;
      if (mediaQuery.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    handleMotionPreference();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionPreference);
      }
    };
  }, []);

  // যতক্ষণ না ক্লায়েন্টে মাউন্ট হচ্ছে, ততক্ষণ সার্ভার ও ক্লায়েন্টের মিল রাখতে নাল বা সিম্পল কন্টেইনার রিটার্ন করতে পারেন
  if (!isMounted) {
    return <div className="w-full h-screen bg-black" />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans text-white">
      <style jsx global>{`
        .bg-art {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          z-index: 0;
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
          background: #03060c;
        }
      `}</style>

      {/* Background Video */}
      <video
        ref={videoRef}
        className="bg-art"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
      ></video>

      {/* Navbar Overlaid on Top */}
      <Navbar />

      {/* Hero Body Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-16 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center bg-black/55 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            More Than <span style={{ color: '#f0750b' }}>Funding.</span> <br className="hidden sm:block" />
            A Smarter Capital <span style={{ color: '#f0750b' }}>Ecosystem.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base lg:text-lg text-white max-w-2xl mb-4 leading-relaxed font-light"
          >
            Fundable360 gives business owners access to an in-house ecosystem designed to help them become more credible, more fundable, and more prepared for meaningful capital opportunities.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm lg:text-base text-white max-w-3xl mb-8 leading-relaxed font-light"
          >
            Through our advising team, our Business Credit Builder program, and advanced opportunities like our 0% Stackable Funding Program and investor real estate financing, we help businesses operate inside a smarter capital framework instead of chasing one-off approvals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="#strategy-call" 
              className="bg-white text-[#0F172A] px-7 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-xl"
            >
              Schedule a Strategy Call
            </a>
            <a 
              href="#service" 
              className="bg-[#f0750b] text-white px-7 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 hover:bg-[#d86609] hover:scale-105 shadow-xl"
            >
              Start service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}