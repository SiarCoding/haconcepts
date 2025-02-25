'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiLinkedinFill, RiMessage2Fill, RiCheckboxCircleFill, RiRobot2Fill, RiUserLine, RiMailLine } from 'react-icons/ri';
import { ReactLenis } from '@studio-freight/react-lenis';
import LinkedInBeamAnimation from '@/components/ui/animated-beam-linkedin';
import EmailBeamAnimation from '@/components/ui/animated-beam-email';
import { LeadAnimatedList } from '@/components/ui/animated-lead-list';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const LinkedInAnimation = () => {
  return (
    <div className="relative flex items-center justify-center h-[400px] w-full">
      {/* Animierter Hintergrund */}
      <motion.div 
        className="absolute w-96 h-96 bg-gradient-to-r from-[#ff8040]/10 to-[#ff5500]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Zentrale Verbindungs-Animation */}
      <div className="relative scale-125">
        {/* LinkedIn Logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-24 h-24 bg-[#0a66c2] rounded-2xl flex items-center justify-center shadow-xl">
            <RiLinkedinFill className="w-14 h-14 text-white" />
          </div>
        </motion.div>

        {/* Rotierende Icons */}
        {[0, 72, 144, 216, 288].map((rotation, index) => (
          <motion.div
            key={rotation}
            className="absolute left-1/2 top-1/2"
            initial={{ rotate: rotation }}
            animate={{
              rotate: [rotation, rotation + 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div 
              className="relative -translate-y-32"
              whileHover={{ scale: 1.1 }}
            >
              <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#ff5500]'} 
                rounded-xl flex items-center justify-center shadow-lg`}
              >
                {/* Erste zwei Icons größer */}
                {index === 0 && <RiMessage2Fill className="w-20 h-20 text-[#0a66c2]" />}
                {index === 1 && (
                  <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                  </svg>
                )}
                {/* Restliche Icons normal */}
                {index === 2 && <RiCheckboxCircleFill className="w-8 h-8 text-white" />}
                {index === 3 && (
                  <svg className="w-8 h-8 text-[#0a66c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {index === 4 && (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Verbindungslinien */}
        <svg className="absolute inset-0 w-full h-full -z-10" viewBox="-100 -100 200 200">
          <motion.circle
            cx="0"
            cy="0"
            r="60"
            stroke="#0a66c2"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Digitale Leadgenerierung",
      description: "Gewinnen Sie qualifizierte Interessenten durch zielgerichtete Online-Kampagnen und Marketing-Automatisierung. Unsere KI-gestützten Systeme identifizieren potenzielle Käufer genau dann, wenn sie aktiv suchen.",
      image: "/device-lead.svg",
      extraComponent: <LeadAnimatedList />
    },
    {
      title: "Hollywood-reifer Content",
      description: "Heben Sie sich von der Masse ab mit professionell produziertem Content. Von cineastischen Immobilienvideos bis hin zu emotionalen Storytelling-Kampagnen – wir inszenieren Ihre Immobilien wie Hollywood-Produktionen.",
      image: "/Ipad3.svg"
    },
    {
      title: "LinkedIn Automation",
      description: "Erreichen Sie Ihre ideale Zielgruppe direkt auf LinkedIn. Unsere KI erstellt personalisierte Nachrichten und Kontaktanfragen, die auf das Profil und die Interessen jedes potenziellen Kunden zugeschnitten sind.",
      component: (
        <div className="relative h-[500px] w-full flex items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="relative w-[400px] h-[400px]">
            <OrbitingCircles iconSize={50} radius={160}>
              <div className="bg-[#0a66c2] p-3 rounded-xl shadow-lg">
                <RiLinkedinFill className="text-white w-8 h-8" />
              </div>
              <div className="bg-[#ff5500] p-3 rounded-xl shadow-lg">
                <RiRobot2Fill className="text-white w-8 h-8" />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <RiMessage2Fill className="text-black w-8 h-8" />
              </div>
            </OrbitingCircles>

            <OrbitingCircles iconSize={40} radius={100} reverse speed={1.5}>
              <div className="bg-[#0a66c2] p-2 rounded-lg shadow-lg">
                <RiLinkedinFill className="text-white w-6 h-6" />
              </div>
              <div className="bg-[#ff5500] p-2 rounded-lg shadow-lg">
                <RiRobot2Fill className="text-white w-6 h-6" />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <RiMessage2Fill className="text-black w-6 h-6" />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      )
    },
    {
      title: "KI-Email Marketing",
      description: "Versenden Sie hochpersonalisierte E-Mail-Kampagnen, die Ihre Zielgruppe wirklich ansprechen. Unser KI-System analysiert Interessentenprofile und erstellt maßgeschneiderte Inhalte für maximale Conversion.",
      component: (
        <div className="relative h-[500px] w-full flex items-center justify-center bg-black rounded-xl">
          <div className="relative w-[400px] h-[400px]">
            <OrbitingCircles iconSize={50} radius={160}>
              <div className="bg-[#4A90E2] p-3 rounded-xl shadow-lg">
                <RiMailLine className="text-white w-8 h-8" />
              </div>
              <div className="bg-[#ff5500] p-3 rounded-xl shadow-lg">
                <RiRobot2Fill className="text-white w-8 h-8" />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <RiUserLine className="text-black w-8 h-8" />
              </div>
            </OrbitingCircles>

            <OrbitingCircles iconSize={40} radius={100} reverse speed={1.5}>
              <div className="bg-[#4A90E2] p-2 rounded-lg shadow-lg">
                <RiMailLine className="text-white w-6 h-6" />
              </div>
              <div className="bg-[#ff5500] p-2 rounded-lg shadow-lg">
                <RiRobot2Fill className="text-white w-6 h-6" />
              </div>
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <RiUserLine className="text-black w-6 h-6" />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      )
    },
    {
      title: "Vollautomatisierung & Support",
      description: "Lehnen Sie sich zurück während unser System für Sie arbeitet. Von der Lead-Generierung bis zum Abschluss-Follow-up – alles läuft automatisch. Und unser Expertenteam steht Ihnen dabei jederzeit zur Seite.",
      image: "/device-support.svg"
    }
  ];

  return (
    <ReactLenis root>
      <main className="bg-black text-white">
        {/* Header Section - etwas weniger Höhe */}
        <section className="h-[80vh] w-full bg-black sticky top-0 grid place-content-center px-4">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-center max-w-[90vw] sm:max-w-none">
            Unsere
            <div className="relative inline-block mx-2">
              <span className="relative z-10">Lösungsansätze</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </div>
            <span className="block sm:inline">für Sie</span>
          </h2>
        </section>

        {/* Solutions Sections - weniger Höhe und mehr Abstand nach oben */}
        {solutions.map((solution, index) => (
          <section 
            key={index}
            className="min-h-[80vh] w-full bg-black sticky top-0 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <div className="container mx-auto px-4 h-[80vh] flex items-center">
              <motion.div 
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Text Content */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-medium inline-block bg-[#ff5500] text-white px-4 py-2 rounded-lg">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Visual Content */}
                <div className="relative flex justify-center items-center min-h-[300px] md:min-h-[500px]">
                  {solution.component || (
                    <div className="relative transform hover:scale-105 transition-transform duration-500 w-full">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        width={600}
                        height={600}
                        className="relative z-10 w-full max-w-[400px] md:max-w-[600px] mx-auto"
                        style={{ objectFit: 'contain' }}
                      />
                      {solution.extraComponent}
                      
                      {/* Neue Blur-Grafiken mit verschiedenen Formen */}
                      <div className="absolute inset-0">
                        <svg className="blur-3xl filter opacity-70" style={{ filter: 'blur(64px)' }} width="100%" height="100%" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {index === 0 && (
                            // Wellenförmige Form
                            <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#gradient1)" />
                          )}
                          {index === 1 && (
                            // Kreisförmige Form
                            <circle cx="222" cy="268" r="200" fill="url(#gradient2)" />
                          )}
                          {index === 2 && (
                            // Spiralförmige Form
                            <path d="M250 250C350 200 300 100 200 150C100 200 150 300 250 250C350 200 300 100 200 150" fill="url(#gradient3)" />
                          )}
                          {index === 3 && (
                            // Ovale Form
                            <ellipse cx="222" cy="268" rx="180" ry="240" fill="url(#gradient4)" />
                          )}
                          {index === 4 && (
                            // Abstrakte Form
                            <path d="M100 100C200 50 300 150 400 100C450 250 300 400 200 350C100 300 50 200 100 100Z" fill="url(#gradient5)" />
                          )}
                          <defs>
                            {[...Array(5)].map((_, i) => (
                              <linearGradient
                                key={i}
                                id={`gradient${i + 1}`}
                                x1="82.7339"
                                y1="550.792"
                                x2="-39.945"
                                y2="118.965"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0%" stopColor="#ff8040" />
                                <stop offset="100%" stopColor="#ff5500" />
                              </linearGradient>
                            ))}
                          </defs>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </main>
    </ReactLenis>
  );
};

export default Solutions; 