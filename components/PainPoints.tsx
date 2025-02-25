"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BsGraphDownArrow, BsCashStack, BsPeople, BsBarChartLine, BsBuilding, BsGlobe } from 'react-icons/bs';

const PainPoints = () => {
  const painPoints = [
    {
      title: "Veraltete Vertriebs-Methoden",
      description: "Während andere digital skalieren, verlieren Sie täglich potenzielle Kunden durch ineffiziente Offline-Strategien",
      icon: BsBuilding
    },
    {
      title: "Hohe Streuverluste",
      description: "Ihr Budget verpufft in erfolglosen Werbekampagnen, die nicht Ihre idealen Kunden erreichen",
      icon: BsCashStack
    },
    {
      title: "Zeitverschwendung",
      description: "Sie verschwenden wertvolle Zeit mit unqualifizierten Leads statt sich auf echte Kaufinteressenten zu konzentrieren",
      icon: BsGraphDownArrow
    },
    {
      title: "Mangelnde Skalierbarkeit",
      description: "Ihr Geschäft wächst nicht, weil Sie zu sehr im operativen Tagesgeschäft gefangen sind",
      icon: BsBarChartLine
    },
    {
      title: "Phantom-Leads",
      description: "85% Ihrer Anfragen haben keine Finanzierungszusage",
      icon: BsPeople
    },
    {
      title: "Fehlende Marktpräsenz",
      description: "In der digitalen Welt sind Sie für potenzielle Kunden praktisch unsichtbar",
      icon: BsGlobe
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0">
        <svg 
          className="blur-3xl filter opacity-50" 
          style={{ filter: 'blur(90px)' }} 
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
              <stop stopColor="#ff8040" stopOpacity="0.25" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
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
                className="relative rounded-xl p-6 bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent className="w-6 h-6 text-[#ff5500]" />
                    <h3 className="text-lg font-medium text-white">
                      {point.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 text-base/relaxed mt-4">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints; 