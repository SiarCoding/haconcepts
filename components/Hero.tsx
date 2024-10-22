'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { FlipWords } from '@/components/ui/flip-word';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlights';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Willem Blankwater',
    designation: 'Position',
    image: '/blankwater.jpeg',
  },
  {
    id: 2,
    name: 'Timm Sonnenfeld',
    designation: 'Position',
    image: '/sonnenfeld.jpeg',
  },
  {
    id: 3,
    name: 'Adil Hersan',
    designation: 'Position',
    image: '/hersan.jpeg',
  },
  {
    id: 4,
    name: 'Michaelis Kekelidis',
    designation: 'Position',
    image: '/kekelidis.jpeg',
  },
  {
    id: 5,
    name: 'Sven Dederichs',
    designation: 'Position',
    image: '/dederichs.jpeg',
  },
  {
    id: 6,
    name: 'Daniel Hofmann',
    designation: 'Position',
    image: '/hofmann.png',
  },
];

export default function Hero() {
  const flipWords = ['Umsatz', 'Reichweite', 'Mitarbeiter'];
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentLine(1), 1000),
      setTimeout(() => setCurrentLine(2), 2000),
      setTimeout(() => setCurrentLine(3), 3000),
      setTimeout(() => setCurrentLine(4), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const sharedTextClasses =
    'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight';

  return (
    <HeroHighlight containerClassName="bg-black min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center pt-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="mb-8 text-white max-w-5xl mx-auto flex flex-col items-center"
        >
          {currentLine >= 0 && (
            <TypewriterEffectSmooth
              words={[{ text: 'Wir machen Ihren' }]}
              className={`${sharedTextClasses} mb-2`}
              cursorClassName="bg-purple-500"
            />
          )}
          {currentLine >= 1 && (
            <TypewriterEffectSmooth
              words={[{ text: 'Immobilienvertrieb' }]}
              className={`${sharedTextClasses} mb-2`}
              cursorClassName="bg-purple-500"
            />
          )}
          {currentLine >= 2 && (
            <TypewriterEffectSmooth
              words={[{ text: 'unschlagbar' }]}
              className={`${sharedTextClasses} mb-4`}
              cursorClassName="bg-purple-500"
            />
          )}
          {currentLine >= 3 && (
            <TypewriterEffectSmooth
              words={[{ text: 'Sie legen sich zurück und' }]}
              className={`${sharedTextClasses} mb-4`}
              cursorClassName="bg-purple-500"
            />
          )}
          {currentLine >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4"
            >
              <Highlight className={`${sharedTextClasses} inline-block`}>
                zählen als Makler das Geld
              </Highlight>
            </motion.div>
          )}
          {currentLine >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 mb-4 w-full flex flex-col items-center" 
            >
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-8">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[linear-gradient(90deg,#8B5CF6,#3B82F6)]">
                  Worauf wartest du denn noch?
                </span>
              </button>
              <div className="flex items-center justify-center w-full">
                <AnimatedTooltip items={teamMembers} />
                <div className="ml-8 flex items-center">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400 mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Bereits +100 zufriedene Partner
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        {currentLine >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-16 mb-2 text-3xl sm:text-4xl md:text-5xl font-bold flex justify-center" 
          >
            <div className="flex items-center">
              <span className="text-white mr-2">Mehr</span>
              <FlipWords
                words={flipWords}
                duration={3000}
                className="inline-flex items-center justify-start w-64"
              />
            </div>
          </motion.div>
        )}
        <div className="flex flex-wrap justify-center items-center mt-2 mb-2 max-w-4xl mx-auto gap-4"> 
          <Image
            src="/google5.svg"
            alt="Google Partners"
            width={120}
            height={60}
            className="object-contain"
          />
          <Image
            src="/Tiktokpartner.svg"
            alt="TikTok for Business"
            width={120}
            height={60}
            className="object-contain"
          />
          <Image
            src="/MetaBusinessPartner.svg"
            alt="Meta Business Partner"
            width={120}
            height={60}
            className="object-contain"
          />
          <Image
            src="/TrustPilot.png"
            alt="Trustpilot"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        <p className="text-neutral-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
          Seit 2020 sind wir die Experten im Performance Marketing für die
          Immobilienbranche
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-900"></div>
    </HeroHighlight>
  );
}