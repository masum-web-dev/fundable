"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white pt-24 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f0750b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Content: What Makes Us Different & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-28"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            This Is What Makes <span style={{ color: '#f0750b' }}>Fundable360</span> Different
          </h2>
          
          <div className="space-y-4 text-gray-300 text-sm md:text-base font-light leading-relaxed mb-10">
            <p className="font-medium text-white">Most companies only talk about getting you approved.</p>
            <p>
              We built an ecosystem designed to help business owners become more fundable, more strategic, and more prepared for the right capital opportunities.
            </p>
            <p className="text-gray-400 text-xs md:text-sm">
              With our advising team, our Business Credit Builder program, and access to advanced opportunities like 0% stackable funding and real estate investor financing, Fundable360 gives businesses more than a product — it gives them a platform to grow inside of.
            </p>
          </div>

          {/* Sub CTA Box */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Take Advantage of the <span style={{ color: '#f0750b' }}>Fundable360</span> Ecosystem
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-xl mx-auto">
              Schedule a consultation with our advising team to see how the Fundable360 ecosystem can help strengthen your business and open the door to the right capital opportunities.
            </p>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-gray-900 font-semibold py-4 px-8 rounded-full text-sm md:text-base shadow-lg hover:bg-[#f0750b] hover:text-white transition-all duration-300"
            >
              Start Service
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Footer: Logo, Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pt-16 border-t border-white/10">
          
          {/* Logo & Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="relative w-48 h-12">
              <Image 
                src="/logo.png" 
                alt="Fundable360 Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            {/* Fix applied here: Used static current year instead of new Date() */}
            <p className="text-xs text-gray-500 mt-2">
              &copy; 2026 Fundable360. All rights reserved.
            </p>
          </motion.div>

          {/* Important Links & Social Media */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:items-end gap-4"
          >
            <h4 className="text-sm font-bold tracking-widest text-white uppercase">
              Important Links
            </h4>
            
            <ul className="flex flex-col md:items-end gap-2 text-sm text-gray-400 font-light">
              <li>
                <Link href="/contact" className="hover:text-[#f0750b] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#f0750b] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#f0750b] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {["FB", "TW", "YT", "IG", "TK"].map((social, sIdx) => (
                <motion.a
                  key={sIdx}
                  href="#"
                  whileHover={{ scale: 1.15, backgroundColor: "#f0750b" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </footer>
  );
}