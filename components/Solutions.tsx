'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { 
  BsShare, 
  BsLightningFill, 
  BsPeopleFill, 
  BsGraphUpArrow, 
  BsWindow, 
  BsCameraVideoFill,
  BsPersonBadgeFill,
  BsGear
} from 'react-icons/bs';
import Image from 'next/image';
import { LampEffect } from '@/components/ui/lamp-effect';
import dynamic from 'next/dynamic';
import socialBubbleAnimation from "../public/cZpLSLixLK.json";

// Dynamischer Import von Lottie und LinkedIn Orbiting mit Loading States
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-800/50 animate-pulse rounded-lg" />
});
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
  icon?: React.ElementType; // jetzt optional
  reverse?: boolean;
  index?: number;
  totalCount?: number;
  animation?: any;
}

const Solutions = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // State für Client-Side Rendering
  const [isClient, setIsClient] = useState(false);
  
  // Nach dem ersten Render setzen wir isClient auf true
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Memoize solutions data to prevent re-creation on every render
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
      {/* Fixed Header Section */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 relative">
        {/* Lamp Effect - positioned above the text */}
        <div className="absolute top-10 sm:top-12 md:top-16 w-full h-64 flex items-center justify-center z-0">
          <LampEffect />
        </div>
        
        <motion.div 
          className="text-center relative z-50 flex-1 flex flex-col justify-center pb-16 md:pb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[0.9] tracking-tight px-4">
            <span className="block">Das bieten wir</span>
            <div className="relative mt-3 sm:mt-3 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#ff8040] to-[#ff5500] bg-clip-text text-transparent">für Sie</span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 md:h-4 lg:h-5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-xl opacity-60"></span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </div>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-4 md:mt-6 font-light px-4">
            Maßgeschneiderte Digital-Marketing-Lösungen, die Ihr Immobiliengeschäft auf das nächste Level bringen
          </p>
        </motion.div>
      </div>

      {/* Scrolling Solutions */}
      <div className="relative z-20 -mt-96 sm:-mt-112 md:-mt-128 lg:-mt-104">
        {solutionsData.map((solution, index) => (
          <SolutionSection 
            key={`solution-${index}`} 
            {...solution} 
            index={index} 
            totalCount={solutionsData.length} 
            isClient={isClient}
          />
        ))}
      </div>
    </section>
  );
};

const SolutionSection: React.FC<SolutionItemProps & { isClient?: boolean }> = React.memo(({
  imgUrl,
  subheading,
  heading,
  description,
  features,
  icon: IconComponent,
  reverse = false,
  index = 0,
  totalCount = 1,
  animation,
  isClient = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Optimized transforms with reduced complexity
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.98, 1, 1, 0.98]);

  return (
    <div ref={sectionRef} className="min-h-[85vh] flex items-center justify-center sticky top-0 bg-black py-6 sm:py-8 md:py-6 lg:py-4">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        style={{ y, opacity, scale }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon with more dramatic effect */}
          <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.2] to-white/[0.05] backdrop-blur-md border border-white/[0.15] flex items-center justify-center shadow-2xl">
                {IconComponent && (
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff5500]" />
                )}
              </div>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-orange-500/30 blur-lg sm:blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl sm:blur-2xl opacity-50"></div>
            </div>
          </div>
          
          <p className="mb-4 sm:mb-4 md:mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider font-semibold text-orange-400 uppercase px-2">
            {subheading}
          </p>
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent leading-[0.9] tracking-tight px-2">
            {heading}
          </h2>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        {/* Content Card */}
        <div className={`${reverse ? 'lg:col-start-2' : ''} relative group`}>
          {/* Card blur effect */}
          <div className="absolute -inset-4 pointer-events-none z-0">
            <svg className="blur-xl md:blur-2xl lg:blur-3xl filter opacity-20 md:opacity-30 w-full h-full" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="150" cy="200" rx="120" ry="160" fill="url(#card-blur-${index})" transform="rotate(${index % 2 === 0 ? '15' : '-15'} 150 200)" />
              <defs>
                <linearGradient id="card-blur-${index}" x1="30" y1="40" x2="270" y2="360" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff8040" />
                  <stop offset="100%" stopColor="#ff5500" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="relative rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out overflow-hidden z-10">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shine effect on hover */}
            <div className="hidden md:block absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                {heading}
              </h3>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg text-white/70 leading-relaxed">
                {description}
              </p>
              
              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ihre Vorteile:</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <RiCheckboxCircleFill className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5500] flex-shrink-0 mt-1" />
                      <span className="ml-3 text-white/80 text-sm sm:text-base hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button im Hero-Stil */}
              <button
                onClick={() => window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank')}
                style={{
                  background: 'rgba(255, 85, 0, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 85, 0, 0.5)',
                  borderRadius: '14px',
                  fontWeight: '600',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                  cursor: 'pointer',
                  lineHeight: '1.2',
                }}
                className="relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 btn-orange-glow w-full sm:w-auto text-xs sm:text-sm"
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
                Jetzt anfragen
              </button>
            </div>
          </div>
          
          {/* Outer glow effect for cards */}
          <div className="hidden md:block absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
        </div>

        {/* Image */}
        <div className={`${reverse ? 'lg:col-start-1' : ''} relative`}>
          {/* Image blur effect with different shape */}
          <div className="absolute -inset-6 pointer-events-none z-0">
            <svg className="blur-xl md:blur-2xl lg:blur-3xl filter opacity-25 md:opacity-35 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d={index % 3 === 0 
                  ? "M200 50 Q350 100 300 200 Q250 280 100 250 Q50 150 200 50 Z"
                  : index % 3 === 1
                  ? "M100 80 Q300 60 320 180 Q280 260 120 280 Q20 200 100 80 Z"
                  : "M150 30 Q380 80 350 220 Q200 290 50 200 Q80 100 150 30 Z"
                }
                fill="url(#image-blur-${index})"
              />
              <defs>
                <linearGradient id="image-blur-${index}" x1="50" y1="50" x2="350" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff8040" />
                  <stop offset="100%" stopColor="#ff5500" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Brand Chart, LinkedIn Orbiting, or Standard Image */}
          {heading === "Brand Aufbau" ? (
            <div className="relative w-full max-w-md mx-auto z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
              <div className="relative h-64 sm:h-72 md:h-80 w-full">
                {/* Chart Title */}
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center">
                  Brand Authority Wachstum
                </h3>
                
                {/* Chart Area */}
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                  </div>
                  
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-xs py-1">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* Brand Growth Line Chart */}
                  <svg className="absolute inset-0 w-full h-full ml-6" viewBox="0 0 300 200">
                    {/* Brand Authority Line */}
                    <path
                      d="M 10 180 Q 40 165 70 140 T 120 90 T 170 65 T 220 40 T 280 25"
                      stroke="#ff5500"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-[0_0_10px_#ff5500]"
                    />
                    
                    {/* Engagement Line */}
                    <path
                      d="M 10 180 Q 35 170 65 150 T 110 110 T 155 85 T 200 60 T 280 45"
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    
                    {/* Glow Effect */}
                    <path
                      d="M 10 180 Q 40 165 70 140 T 120 90 T 170 65 T 220 40 T 280 25"
                      stroke="#ff5500"
                      strokeWidth="6"
                      fill="none"
                      opacity="0.4"
                      className="blur-sm"
                    />
                    
                    {/* Data Points */}
                    <circle cx="70" cy="140" r="4" fill="#ff5500" className="drop-shadow-[0_0_6px_#ff5500]" />
                    <circle cx="120" cy="90" r="4" fill="#ff5500" className="drop-shadow-[0_0_6px_#ff5500]" />
                    <circle cx="170" cy="65" r="4" fill="#ff5500" className="drop-shadow-[0_0_6px_#ff5500]" />
                    <circle cx="220" cy="40" r="4" fill="#ff5500" className="drop-shadow-[0_0_6px_#ff5500]" />
                  </svg>
                  
                  {/* X-Axis Labels */}
                  <div className="absolute bottom-0 left-6 right-0 flex justify-between text-gray-400 text-xs">
                    <span>Start</span>
                    <span>3 Mon</span>
                    <span>6 Mon</span>
                    <span>12 Mon</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#ff5500] rounded"></div>
                    <span className="text-gray-300">Brand Autorität</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-white/50 rounded"></div>
                    <span className="text-gray-300">Engagement</span>
                  </div>
                </div>
              </div>
              
              {/* Lottie Animation direkt unter dem Chart */}
              {isClient && (
                <div className="w-full flex justify-center mt-6 sm:mt-8">
                  <div 
                    className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                  >
                    <Lottie
                      animationData={socialBubbleAnimation}
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
                </div>
              )}
            </div>
          ) : heading === "Prozessoptimierte Vertriebsmethoden" ? (
            /* LinkedIn Orbiting Animation for Prozessoptimierte Vertriebsmethoden */
            <div className="relative w-full flex items-center justify-center z-10">
              <div className="relative mx-auto">
                {isClient && (
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
            </div>
          ) : (
            /* Standard Image for other solutions */
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl mx-auto z-10 ${
              heading === "Digitale Leadgenerierung"
                ? "max-w-[280px] sm:max-w-[320px] md:max-w-[280px]"
                : heading === "Webdesign & Landingpages" 
                ? "max-w-sm sm:max-w-md md:max-w-lg" 
                : "max-w-xs sm:max-w-sm"
            }`}>
              <Image
                src={imgUrl}
                alt={heading}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          )}
        </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
});

export default Solutions;