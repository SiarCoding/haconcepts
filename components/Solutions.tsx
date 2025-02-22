import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const solutions = [
    {
      title: "Digitale Leadgenerierung",
      description: "Gewinnen Sie qualifizierte Interessenten durch zielgerichtete Online-Kampagnen und Marketing-Automatisierung. Unsere KI-gestützten Systeme identifizieren potenzielle Käufer genau dann, wenn sie aktiv suchen.",
      image: "/device-lead.svg"
    },
    {
      title: "Hollywood-reifer Content",
      description: "Heben Sie sich von der Masse ab mit professionell produziertem Content. Von cineastischen Immobilienvideos bis hin zu emotionalen Storytelling-Kampagnen – wir inszenieren Ihre Immobilien wie Hollywood-Produktionen.",
      image: "/device-hollywood.svg"
    },
    {
      title: "LinkedIn Automation",
      description: "Erreichen Sie Ihre ideale Zielgruppe direkt auf LinkedIn. Unsere KI erstellt personalisierte Nachrichten und Kontaktanfragen, die auf das Profil und die Interessen jedes potenziellen Kunden zugeschnitten sind.",
      image: "/device-linkedin.svg"
    },
    {
      title: "KI-Email Marketing",
      description: "Versenden Sie hochpersonalisierte E-Mail-Kampagnen, die Ihre Zielgruppe wirklich ansprechen. Unser KI-System analysiert Interessentenprofile und erstellt maßgeschneiderte Inhalte für maximale Conversion.",
      image: "/device-email.svg"
    },
    {
      title: "Vollautomatisierung & Support",
      description: "Lehnen Sie sich zurück während unser System für Sie arbeitet. Von der Lead-Generierung bis zum Abschluss-Follow-up – alles läuft automatisch. Und unser Expertenteam steht Ihnen dabei jederzeit zur Seite.",
      image: "/device-support.svg"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-gray-50/80">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <svg 
          className="blur-3xl filter opacity-30" 
          style={{ filter: 'blur(90px)' }} 
          width="100%" 
          height="100%" 
          viewBox="0 0 444 536" 
          fill="none" 
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
              <stop stopColor="#ff8040" stopOpacity="0.1" />
              <stop offset="1" stopColor="#ff5500" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div className="sticky top-0 pt-20 pb-10 bg-gray-50/80 backdrop-blur-sm z-10">
        <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 text-center">
          Unsere
          <span className="relative mx-2">
            <span className="relative z-10">Lösungsansätze</span>
            <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
          </span>
          für Sie
        </h2>
      </div>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <div 
          key={index} 
          className="min-h-screen py-20 flex items-center"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Text Content */}
              <div className="flex-1 max-w-xl">
                <h3 className="text-3xl font-medium text-gray-900 mb-6">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Device SVG with gradient effect */}
              <div className="flex-1 flex justify-center relative">
                <div className="absolute inset-0">
                  <svg className="blur-3xl filter opacity-70" style={{ filter: 'blur(64px)' }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                    <defs>
                      <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ff8040" />
                        <stop offset="100%" stopColor="#ff5500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={300}
                    height={600}
                    className="w-auto h-auto"
                    priority={index === 0}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Solutions; 