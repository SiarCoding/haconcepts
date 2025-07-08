"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';

const OrangeBlurEffect = () => (
  <div className="absolute -inset-4 right-[-30%] top-[-100%] pointer-events-none z-0">
    <svg className="blur-3xl filter opacity-30 w-[140%] h-[140%]" style={{ filter: 'blur(90px)' }} viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M135.205 112.719C17.1445 64.6648 -28.2636 -70.487 -76.3175 47.574C-124.371 165.635 107.858 481.381 225.919 529.435C343.98 577.488 303.165 339.654 351.219 221.593C399.273 103.532 253.266 160.773 135.205 112.719Z" fill="url(#orange-gradient)" />
      <defs>
        <linearGradient id="orange-gradient" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8040" />
          <stop offset="100%" stopColor="#ff5500" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const disadvantages = [
  "Hohe Streuverluste",
  "Schwer messbare Ergebnisse",
  "Lange Vorlaufzeiten",
  "Keine Echtzeit-Anpassungen",
  "Hohe Fixkosten",
  "Keine Branchenspezialisierung",
  "Unklare Zielgruppen",
  "Veraltete Methoden",
  "Keine Erfolgsgarantie"
];

const advantages = [
  "Präzise Zielgruppenansprache",
  "Transparentes Reporting",
  "Schnelle Ergebnisse",
  "Kontinuierliche Optimierung",
  "Leistungsbasierte Vergütung",
  "Branchenspezialisierung",
  "Moderne KI-Technologie",
  "Persönliche Betreuung",
  "Nachweisbare Erfolge"
];

export default function WhyUs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const cardHover = {
    y: -8,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  };
  
  return (
    <motion.section 
      className="py-24 bg-black"
      id="why-us" 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white font-montserrat">
              Warum <span className="relative">
              <span className="relative z-10 text-[#ff5500]">NextMove</span>
              <OrangeBlurEffect />
              </span> Consulting
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-inter">
              Wir kombinieren Branchenexpertise mit modernster Technologie, um Resultate zu liefern, die traditionelle Agenturen nicht erreichen können.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          <motion.div 
            variants={cardVariants}
            whileHover={cardHover}
            className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-lg p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                    <RiCloseCircleFill className="w-7 h-7 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white/80 font-montserrat">
                Traditionell
                </h3>
            </div>
            
            <ul className="space-y-4">
              {disadvantages.map((item) => (
                <li key={item} className="flex items-start">
                  <RiCloseCircleFill className="w-5 h-5 text-white/30 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-400 text-base font-inter">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={cardHover}
            className="rounded-2xl p-[1px] relative bg-gradient-to-br from-[#ff5500] to-orange-800 shadow-[0_0_40px_rgba(255,85,0,0.3)]"
          >
            <div className="bg-black/90 backdrop-blur-lg rounded-[15px] p-8 h-full">
              <h3 className="text-xl font-semibold text-white font-montserrat mb-6">
                <span className="relative inline-block">
                    NextMove Consulting
                    <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-md opacity-70" />
                    <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
                </span>
              </h3>
              <ul className="space-y-4">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start">
                    <RiCheckboxCircleFill className="w-5 h-5 text-[#ff5500] flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-200 text-base font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}