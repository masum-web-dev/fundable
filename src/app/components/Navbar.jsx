"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-4 md:top-6 left-0 right-0 z-50 w-full px-4 md:px-8 lg:px-12 flex justify-center">
      <div className="w-full max-w-[1200px] flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
        
        {/* Left: Logo from public folder */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={160} 
              height={55} 
              className="object-contain h-10 md:h-14 w-auto" 
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-base md:text-lg font-medium text-white">
          <a href="#schedule" className="hover:text-[#f0750b] transition-colors">Schedule Today</a>
          <a href="#service" className="hover:text-[#f0750b] transition-colors">Start Service</a>
        </nav>

        {/* Right: Contact Us Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center bg-[#f0750b] text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-medium transition-transform hover:scale-105 shadow-md"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-5 md:hidden shadow-2xl z-50 text-white">
          <a 
            href="#schedule" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-[#f0750b] transition-colors pb-3 border-b border-white/10"
          >
            Schedule Today
          </a>
          <a 
            href="#service" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-[#f0750b] transition-colors pb-3 border-b border-white/10"
          >
            Start Service
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center bg-[#f0750b] text-white px-5 py-3 rounded-lg text-base font-medium shadow-md w-full mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}