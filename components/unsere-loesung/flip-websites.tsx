'use client';

import { motion } from 'framer-motion';
import { BorderBeam } from "../ui/border-beam";
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Carousel } from "../ui/carousel";

const websites = [
  { id: 0, title: 'Freyer Immobilien - Vermögen durch Immobilien aufbauen', url: 'https://freyer.immo', button: 'Website besuchen', src: '/freyerimmo-website.webp' },
  { id: 1, title: 'CD Immo - Nachhaltig Vermögen aufbauen & Steuerlast senken', url: 'https://cd-immo.de', button: 'Website besuchen', src: '/cdwebsite.webp' },
  { id: 2, title: 'HMS Finance - In 4 Wochen zur Immobilie für mehr Kapital', url: 'https://hmsfinance.de', button: 'Website besuchen', src: '/hmsfinancewebsite.webp' },
  { id: 3, title: 'Kedro - Mit Immobilien Vermögen aufbauen & Altersvorsorge sichern', url: 'https://kedro-immobilien.de', button: 'Website besuchen', src: '/kedro_landingpage.webp' },
  { id: 4, title: 'Simon Hauer Immobilien - Enormer Traffic durch individuellen Rechner', url: 'https://simon-hauer-immobilien.de', button: 'Website besuchen', src: '/simon-landingpage.webp' }
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
    },
    { 
      leads: 50, 
      conversion: "25%", 
      traffic: "+300%",
      title: "Simon Hauer Immobilien",
      description: "Enormer Traffic-Zuwachs durch maßgeschneiderten Steuerrechner.",
      points: [
        "50+ hochqualifizierte Leads",
        "25% Conversion durch Rechner", 
        "+300% organischer Traffic",
        "Individueller Steuerrechner",
        "Gamification-Ansatz"
      ],
      websiteUrl: "https://simon-hauer-immobilien.de"
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
    <section className="relative bg-black overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
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
            {/* Carousel Container */}
            <div className="relative w-full max-w-7xl mx-auto">
              {/* Mobile/Tablet Layout: Carousel only */}
              <div className="lg:hidden">
                
                {/* Carousel Section - Full width */}
                <div className="w-full relative">
                  <div className="relative perspective-1000">
                    <Carousel 
                      slides={websites} 
                      className="min-h-[400px] sm:min-h-[480px] md:min-h-[520px]"
                    />
                  </div>
                </div>

              </div>
              
              {/* Desktop Layout: Carousel only */}
              <div className="hidden lg:block">
                {/* Carousel Section - Full width */}
                <div className="w-full relative mb-12 lg:mb-16">
                  <div className="relative perspective-1000">
                    <Carousel 
                      slides={websites} 
                      className="min-h-[600px] xl:min-h-[650px]"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Note: Navigation is now handled by the Carousel component */}
          </motion.div>

          {/* CTA Button Section */}
          <motion.div
            className="text-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
              style={{
                background: 'rgba(255, 85, 0, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.5)',
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '16px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                cursor: 'pointer',
                lineHeight: '1.2',
              }}
              className="relative px-6 py-3 lg:px-8 lg:py-4 btn-orange-glow"
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                  opacity: '0.6',
                  zIndex: '-1',
                  transform: 'scale(1.1)'
                }}
              ></div>
              Webseite kostenlos anfragen
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FlipWebsites;