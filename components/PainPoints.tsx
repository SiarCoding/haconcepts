"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BsGraphDownArrow, BsCashStack, BsPeople, BsBarChartLine, BsBuilding, BsGlobe, BsClock, BsEyeSlash } from 'react-icons/bs';

const PainPoints = () => {
  const painPoints = [
    {
      title: "Leads kosten >200€/Stück?",
      description: "Während andere qualifizierte Leads für unter 50€ generieren, zahlen Sie das Vierfache für unqualifizierte Interessenten",
      icon: BsCashStack
    },
    {
      title: "Content wird ignoriert?",
      description: "Ihre Posts und Anzeigen erhalten kaum Aufmerksamkeit, weil sie nicht die Schmerzpunkte Ihrer Zielgruppe treffen",
      icon: BsEyeSlash
    },
    {
      title: "Vertriebszeit > 20 Std./Woche?",
      description: "Sie verschwenden über die Hälfte Ihrer Arbeitszeit mit unqualifizierten Leads statt mit echten Kaufinteressenten",
      icon: BsClock
    },
    {
      title: "Phantom-Leads ohne Finanzierung",
      description: "85% Ihrer Anfragen haben keine Finanzierungszusage und verschwenden Ihre wertvolle Zeit",
      icon: BsPeople
    },
    {
      title: "Veraltete Offline-Strategien",
      description: "Während Konkurrenten digital skalieren, verlieren Sie täglich potenzielle Kunden durch ineffiziente Methoden",
      icon: BsBuilding
    },
    {
      title: "Digitale Unsichtbarkeit",
      description: "In der digitalen Welt sind Sie für potenzielle Premium-Kunden praktisch unsichtbar",
      icon: BsGlobe
    }
  ];

  const handleCtaClick = () => {
    // Öffne Calendly-Link in einem neuen Tab
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Enhanced Gradient Background Effect */}
      <div className="absolute inset-0">
        <svg 
          className="blur-3xl filter opacity-40" 
          style={{ filter: 'blur(60px)' }} 
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

      {/* Additional floating blur orbs for glassmorphism effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
            Verlieren Sie noch
            <div className="inline-block relative mx-2 mb-2">
              <span className="relative z-10">Geld & Zeit</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </div>
            durch diese Fehler?
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-8">
            Die häufigsten Probleme, die Immobilienmakler täglich Tausende von Euro kosten
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full rounded-2xl p-8 
                               bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                               backdrop-blur-md backdrop-saturate-150
                               border border-white/[0.08]
                               shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]
                               hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)]
                               hover:scale-[1.02] hover:border-white/[0.12]
                               transition-all duration-500 ease-out
                               overflow-hidden">
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with glassmorphism background */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover:border-orange-500/20 transition-colors duration-300">
                          <IconComponent className="w-7 h-7 text-[#ff5500] group-hover:text-[#ff8040] transition-colors duration-300" />
                        </div>
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                        {point.title}
                      </h3>
                    </div>
                    
                    <p className="text-white/70 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-grow">
                      {point.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 pt-4 border-t border-white/[0.06] group-hover:border-orange-500/20 transition-colors duration-300">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8040] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Outer glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button im Hero-Design */}
        <div className="text-center mt-20">
          <button 
            onClick={handleCtaClick}
            style={{
              background: 'rgba(255, 85, 0, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 85, 0, 0.5)',
              padding: '20px 48px',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '20px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(255, 85, 0, 0.4)',
              cursor: 'pointer',
              minWidth: '320px',
              maxWidth: '100%',
              lineHeight: '1.2',
            }}
            className="relative"
          >
            <div 
              style={{
                position: 'absolute',
                inset: '0',
                background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                filter: 'blur(15px)',
                opacity: '0.6',
                zIndex: '-1',
                transform: 'scale(1.1)'
              }}
            ></div>
            
            {/* Shine-Animation für bessere Performance entfernt */}

            Erkennen Sie sich wieder? Wir haben die Lösung
          </button>
          
          {/* CSS Animation für Shine-Effekt - Entfernt */}
          <style jsx>{`
            
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 