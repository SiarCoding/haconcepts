"use client";
import React from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AdsDesign = () => {
  return (
    <section className="relative bg-black z-20">
      {/* Enhanced Gradient Background Effect */}
      <div className="absolute inset-0">
        <svg 
          className="blur-2xl md:blur-3xl filter opacity-30 md:opacity-40" 
          width="100%" 
          height="100%" 
          viewBox="0 0 444 536" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z" 
            fill="url(#paint0_linear)" 
          />
          <defs>
            <linearGradient 
              id="paint0_linear" 
              x1="404.5" 
              y1="100" 
              x2="44.5" 
              y2="436" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8040" stopOpacity="0.3" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Additional floating blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-20 sm:py-24 lg:py-28 xl:py-32 z-10">
        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24 relative z-10">
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight relative z-60 mb-4">
            Performance Marketing
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/80 leading-tight relative z-60">
            auf allen Kanälen
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl mt-5 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-4 relative z-30">
          </p>
        </div>
        {/* Glassmorphism Container for Imgur Embed */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Simple Card */}
            <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 bg-black/50 border border-white/10">
              <div className="w-full rounded-xl overflow-hidden">
                <Image 
                  src="/GIF.gif" 
                  alt="Performance Marketing auf allen Kanälen"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdsDesign;
