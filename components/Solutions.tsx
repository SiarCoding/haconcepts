'use client';

import React, { useEffect, useRef, useState, useMemo, memo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { 
  BsShare, 
  BsLightningFill, 
  BsWindow, 
  BsCameraVideoFill,
  BsPersonBadgeFill,
  BsGear
} from 'react-icons/bs';
import Image from 'next/image';
import { LampContainer } from '@/components/ui/lamp-effect';
import dynamic from 'next/dynamic';
import socialBubbleAnimation from "../public/cZpLSLixLK.json";

// Dynamischer Import von Lottie
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-800/50 animate-pulse rounded-lg" />
});

// Optimized Lottie Component
const OptimizedLottie = memo(({ animationData, className }: { animationData: any, className?: string }) => (
  <div className={className}>
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: '100%', height: '100%' }}
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid meet',
        progressiveLoad: true,
        hideOnTransparent: true
      }}
    />
  </div>
));

OptimizedLottie.displayName = 'OptimizedLottie';

const LinkedInOrbiting = dynamic(() => import('@/components/magicui/linkedin-orbiting').then(mod => ({ default: mod.LinkedInOrbiting })), { 
  ssr: false,
  loading: () => <div className="w-32 h-32 bg-gray-800/50 animate-pulse rounded-full mx-auto" />
});

interface SolutionItemProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  description: string;
  features: string[];
  icon?: React.ElementType;
  reverse?: boolean;
  index?: number;
}

// Vereinfachter Blur Effect
const BlurEffect = memo(({ index }: { index: number }) => (
  <div className="absolute -inset-4 pointer-events-none z-0 opacity-30">
    <div className={`w-full h-full bg-gradient-radial from-orange-500/20 to-transparent blur-3xl rounded-full`} />
  </div>
));

BlurEffect.displayName = 'BlurEffect';

const Solutions = memo(() => {
  const containerRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Optimierte Mobile Detection
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    
    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Scroll Performance Optimization
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);
  
  // Memoized solutions data
  const solutionsData: SolutionItemProps[] = useMemo(() => [
    {
      imgUrl: "/meta-leads.webp",
      subheading: "GEZIELT & DATENGETRIEBEN",
      heading: "Digitale Leadgenerierung",
      description: "Erfolgserprobte Strategien mit denen wir qualifizierte Leads generieren und so nicht nur für Reichweite, sondern auch für zahlende Kunden sorgen.",
      features: [
        "Gezielte Zielgruppenansprache",
        "Automatische Leadgenerierung", 
        "Performance-optimierte Kampagnen",
        "Transparentes Reporting",
        "Kosteneffiziente Werbeschaltung"
      ],
      icon: BsShare
    },
    {
      imgUrl: "/simonlanding2.svg",
      subheading: "MODERN & KONVERTIEREND",
      heading: "Webdesign & Landingpages",
      description: "Hochkonvertierende Websites und Landingpages, die Besucher in Kunden verwandeln. Modernes Design kombiniert mit bewährten Conversion-Elementen.",
      features: [
        "Mobile-first Design",
        "Conversion-optimierte Layouts",
        "Schnelle Ladezeiten",
        "Eigener Chatbot",
        "SEO-optimierte Struktur"
      ],
      icon: BsWindow,
      reverse: true
    },
    {
      imgUrl: "/funnel1.webp",
      subheading: "AUTOMATISIERT & EFFIZIENT",
      heading: "Funnel-Systeme",
      description: "Automatisierte Verkaufstrichter, die rund um die Uhr Leads qualifizieren und in zahlende Kunden verwandeln - ohne manuellen Aufwand.",
      features: [
        "24/7 Lead-Qualifizierung",
        "Automatisierte Nurturing-Kampagnen",
        "Multi-Channel Integration",
        "Performance Tracking",
        "Skalierbare Systeme"
      ],
      icon: BsLightningFill
    },
    {
      imgUrl: "/artwork.webp",
      subheading: "PROFESSIONELL & EMOTIONAL",
      heading: "Hollywood-reifer Content",
      description: "Mit datengetriebenen, kreativen Video-Ads stechen wir aus der Masse heraus und überzeugen Ihre Zielgruppe direkt auf ihrem Smartphone.",
      features: [
        "Professionelle Video-Produktion",
        "Emotionale Storytelling-Ansätze",
        "Datengetriebene Content-Strategien",
        "Multi-Format Optimierung",
        "Viral-Content Entwicklung"
      ],
      icon: BsCameraVideoFill,
      reverse: true
    },
    {
      imgUrl: "/bb.webp",
      subheading: "AUTHENTISCH & AUTORITÄR",
      heading: "Brand Aufbau",
      description: "Wir verwandeln Sie in eine unwiderstehliche Marke, die Vertrauen schafft und Kunden anzieht.",
      features: [
        "Authentische Markenpositionierung",
        "Content-Strategie für Thought Leadership",
        "Social Media Präsenz aufbauen",
        "Reputation Management",
        "Vertrauensaufbau durch Expertise"
      ],
      icon: BsPersonBadgeFill,
      animation: socialBubbleAnimation
    },
    {
      imgUrl: "/process-optimization.webp",
      subheading: "INTELLIGENT & HOCHWERTIG",
      heading: "Prozessoptimierte Vertriebsmethoden",
      description: "Systematische Ansprache vermögender Privatpersonen über LinkedIn und automatisierte CRM-Pipelines für nachhaltigen Investoren-Aufbau im Immobilienbereich.",
      features: [
        "LinkedIn Funnels für High-Net-Worth Individuals",
        "Personalisierte Nachrichten basierend auf Profil-Analyse",
        "Targeting steueroptimierter Immobilien-Investoren",
        "Menschlich wirkende, authentische Kommunikation",
        "Automatisierte Lead-Vorqualifizierung & CRM-Integration"
      ],
      icon: BsGear,
      reverse: true
    }
  ], []);

  return (
    <section id="solutions" ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Header Section - Nicht mehr sticky für bessere Performance */}
      <div className="relative min-h-screen flex items-center justify-center">
        <LampContainer>
          <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-36"> {/* Mehr Abstand zum Lamp-Effekt */}
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight tracking-tight text-center"
            >
              <span className="block">Das bieten wir</span>
              <div className="relative mt-2 sm:mt-3 inline-block">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-semibold">für Sie</span>
                  <span className="absolute bottom-[-4px] md:bottom-[-3px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]" />
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 md:h-4 lg:h-5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-xl opacity-60"></span>
              </div>
            </motion.h2>
            <motion.p
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mt-6 sm:mt-8 md:mt-10 font-light text-center px-4"
            >
              Maßgeschneiderte Digital-Marketing-Lösungen, die Ihr Immobiliengeschäft auf das nächste Level bringen
            </motion.p>
          </div>
        </LampContainer>
      </div>

      {/* Solutions Grid - Vereinfachtes Layout ohne sticky */}
      <div className="relative z-20 pb-20">
        {solutionsData.map((solution, index) => (
          <SolutionSection 
            key={`solution-${index}`} 
            {...solution} 
            index={index} 
            isClient={isClient}
            isScrolling={isScrolling}
          />
        ))}
      </div>
    </section>
  );
});

// Optimierte Solution Section ohne komplexe Scroll-Transforms
const SolutionSection: React.FC<SolutionItemProps & { isClient?: boolean; isScrolling?: boolean }> = React.memo(({
  imgUrl,
  subheading,
  heading,
  description,
  features,
  icon: IconComponent,
  reverse = false,
  index = 0,
  isClient = false,
  isScrolling = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-black py-12 sm:py-16 md:py-20"
    >
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          {/* Icon */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                {IconComponent && (
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff5500]" />
                )}
              </div>
              {/* Vereinfachter Glow-Effekt */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-orange-500/20 blur-xl opacity-60"></div>
            </div>
          </div>
          
          <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg tracking-wider font-semibold text-orange-400 uppercase">
            {subheading}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            {heading}
          </h3>
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content Card */}
          <motion.div 
            className={`${reverse ? 'lg:col-start-2' : ''} relative group`}
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isScrolling && <BlurEffect index={index} />}
            
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/[0.08] shadow-xl hover:shadow-2xl transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {heading}
              </h4>
              <p className="mb-6 text-base sm:text-lg text-white/70 leading-relaxed">
                {description}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-4">Ihre Vorteile:</h5>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <RiCheckboxCircleFill className="w-5 h-5 text-[#ff5500] flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-white/80 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
                className="relative px-6 py-3 w-full sm:w-auto text-sm font-semibold tracking-wider uppercase text-white bg-[#ff5500]/10 border border-[#ff5500]/50 rounded-xl hover:bg-[#ff5500]/20 hover:border-[#ff5500]/70 transition-all duration-300"
              >
                Jetzt anfragen
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className={`${reverse ? 'lg:col-start-1' : ''} relative`}
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Special content for specific sections */}
            {heading === "Brand Aufbau" ? (
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  {/* Brand Chart */}
                  <h4 className="text-white text-base sm:text-lg font-semibold mb-4 text-center">
                    Brand Authority Wachstum
                  </h4>
                  
                  <div className="relative h-48 sm:h-56 w-full">
                    {/* Simple Chart SVG */}
                    <svg className="w-full h-full" viewBox="0 0 300 200">
                      <path
                        d="M 10 180 Q 40 165 70 140 T 120 90 T 170 65 T 220 40 T 280 25"
                        stroke="#ff5500"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-lg"
                      />
                      <path
                        d="M 10 180 Q 35 170 65 150 T 110 110 T 155 85 T 200 60 T 280 45"
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  
                  {/* Lottie Animation */}
                  {isClient && !isScrolling && (
                    <div className="w-full flex justify-center mt-6">
                      <OptimizedLottie
                        animationData={socialBubbleAnimation}
                        className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : heading === "Prozessoptimierte Vertriebsmethoden" ? (
              <div className="relative w-full flex items-center justify-center">
                {isClient && !isScrolling && (
                  <LinkedInOrbiting
                    className="opacity-90"
                    radius={120}
                    iconSize={45}
                    duration={25}
                    speed={0.8}
                    reverse={false}
                  />
                )}
              </div>
            ) : (
              /* Standard Image */
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md">
                <Image
                  src={imgUrl}
                  alt={heading}
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

Solutions.displayName = 'Solutions';
SolutionSection.displayName = 'SolutionSection';

export default Solutions;