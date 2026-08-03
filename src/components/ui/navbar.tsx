import React from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl glass-panel shadow-2xl shadow-black/50">
        {/* Left: Logo */}
        <div className="text-white font-display font-bold tracking-widest text-xl uppercase flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-glow" />
          ABISHEK
        </div>

        {/* Right: Links + CTA */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400 tracking-wide uppercase">
            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold tracking-wide uppercase hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 transform hover:scale-105 inline-block text-center">
            Get In Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
