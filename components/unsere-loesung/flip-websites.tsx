'use client';

import { motion } from 'framer-motion';
import { BorderBeam } from "../ui/border-beam";
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GradientCardWide } from "../ui/gradient-card-wide";

const websites = [
  { title: 'Freyer Immobilien - Vermögen durch Immobilien aufbauen', url: '/freyerimmo-website.png' },
  { title: 'CD Immo - Nachhaltig Vermögen aufbauen & Steuerlast senken', url: '/cdwebsite.png' },
  { title: 'HMS Finance - In 4 Wochen zur Immobilie für mehr Kapital', url: '/hmsfinancewebsite.png' },
  { title: 'Kedro - Mit Immobilien Vermögen aufbauen & Altersvorsorge sichern', url: '/kedro_landingpage.png' }
];

// Helper function to get website stats for current website
const getWebsiteStats = (index: number) => {
  const statsData = [
    { 
      leads: 20, 
      conversion: "12%", 
      traffic: "+150%",
      title: "Freyer Immobilien",
      description: "Lead-Generierung für Immobilienvermittlung",
      points: [
        "20+ Leads generiert",
        "12% Conversion Rate", 
        "+150% Traffic",
        "Landing Page optimiert",
        "Performance Marketing"
      ],
      websiteUrl: "https://freyer.immo"
    },
    { 
      leads: 35, 
      conversion: "18%", 
      traffic: "+200%",
      title: "CD Immo",
      description: "Premium-Design für nachhaltige Investments",
      points: [
        "35+ qualifizierte Leads",
        "18% Conversion Rate",
        "+200% Traffic-Wachstum",
        "SEO-Optimierung",
        "Premium-Design"
      ],
      websiteUrl: "https://cd-immo.de"
    },
    { 
      leads: 45, 
      conversion: "15%", 
      traffic: "+180%",
      title: "HMS Finance",
      description: "KI-Automatisierung für Immobilienfinanzierung",
      points: [
        "45+ Leads durch KI",
        "15% Conversion Rate",
        "+180% Traffic",
        "Chatbot-Integration",
        "Automatisierte Workflows"
      ],
      websiteUrl: "https://hmsfinance.de"
    },
    { 
      leads: 28, 
      conversion: "14%", 
      traffic: "+160%",
      title: "Kedro Immobilien",
      description: "Verkaufspsychologisch optimierte Gewinnung",
      points: [
        "28+ zielgerichtete Leads",
        "14% Conversion",
        "+160% Traffic",
        "Psychologischer Aufbau",
        "Emotionales Design"
      ],
      websiteUrl: "https://www.kedro-immobilien.de"
    }
  ];
  return statsData[index];
};

const FlipWebsites = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });

  const updateIndex = (increment: number) => {
    const newIndex = (currentIndex + increment + websites.length) % websites.length;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const diffX = touchStartRef.current.x - touchEndRef.current.x;
    const diffY = touchStartRef.current.y - touchEndRef.current.y;
    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (absDiffX > absDiffY && absDiffX > 50) {
      if (diffX > 0) {
        // Swiped left, go to next
        updateIndex(1);
      } else {
        // Swiped right, go to previous
        updateIndex(-1);
      }
    }
  };

  return (
    <section className="relative bg-black overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Enhanced Orange Gradient Background Effect from PainPoints */}
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

      {/* Verbesserte Container-Struktur für Mobile */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
        
          {/* Header - Mobile optimiert */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-orange-400 text-xs sm:text-sm font-medium tracking-wide">UNSERE WEBSITES</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4 sm:mb-6 px-2">
              <span className="relative inline-block">Mehr <span className="relative z-10 text-[#ff5500]">Anfragen</span><span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 md:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span><span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span></span> durch unsere individuell selbstentwickelte Webseite
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
              Mit Features, die gezielt Interessenten für Immobilien gewinnen: verkaufspsychologischer Aufbau, Premium-Design, SEO-Optimierung, responsives Design und ein eigener Chatbot, der nicht nur Fragen beantwortet, sondern auch verkauft und <span className="relative inline-block"><span className="relative z-10 text-white">neue Leads generiert</span><span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 md:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span><span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span></span>.
            </p>
          </motion.div>

          {/* Main Content Layout - Mobile optimiert */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              className="flex flex-row gap-1.5 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 items-stretch relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Website Image Card - Mobile optimiert */}
              <div className="flex-[2] sm:flex-[2.5] md:flex-[3] relative rounded-lg sm:rounded-xl md:rounded-2xl border border-orange-500/20 bg-gray-900/50 p-1.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 shadow-2xl shadow-orange-500/10 overflow-hidden min-w-0">
                <BorderBeam colorFrom="#ff5500" colorTo="#ff8040" />
                
                {/* Image Container - Mobile optimiert */}
                <div className="relative w-full h-full rounded-md sm:rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t z-1 from-black/50 via-transparent to-black/20"></div>
                  
                  {/* Image - Mobile optimiert */}
                  <div className="relative w-full h-full">
                    <motion.img 
                      key={currentIndex}
                      src={websites[currentIndex].url} 
                      className="absolute inset-0 w-full h-full object-cover object-top z-0" 
                      alt={websites[currentIndex].title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-md sm:rounded-lg z-2"></div>
                </div>
              </div>

              {/* Stats Card - Mobile optimiert */}
              <div className="flex-[1] min-w-[120px] sm:min-w-[140px] md:min-w-[180px] lg:min-w-[220px] max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px]">
                <motion.div
                  key={`stats-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <GradientCardWide 
                    feature={{
                      icon: 'TrendingUp',
                      title: getWebsiteStats(currentIndex).title,
                      description: getWebsiteStats(currentIndex).description,
                      points: getWebsiteStats(currentIndex).points,
                      websiteUrl: getWebsiteStats(currentIndex).websiteUrl
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Enhanced Navigation Controls - Mobile optimiert */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3 sm:gap-4 md:gap-6 z-50">
              <button
                type="button"
                onClick={() => updateIndex(-1)}
                title="Vorherige Website"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ChevronLeft size={16} className="sm:scale-110 md:scale-125 relative z-10 transition-transform group-hover:-translate-x-0.5" />
              </button>
              
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                {websites.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentIndex 
                        ? 'w-5 sm:w-6 md:w-8 h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-500/50' 
                        : 'w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
                    }`}
                    title={`Website ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                type="button"
                onClick={() => updateIndex(1)}
                title="Nächste Website"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ChevronRight size={16} className="sm:scale-110 md:scale-125 relative z-10 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FlipWebsites;