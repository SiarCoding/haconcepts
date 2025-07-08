'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Star, Play } from 'lucide-react';

// Lazy load components for better performance
const FlipWords = dynamic(() => import('@/components/ui/flip-word').then(mod => ({ default: mod.FlipWords })), {
  loading: () => <div className="w-56 h-8 bg-gray-800/20 rounded animate-pulse" />,
});

const AnimatedTooltip = dynamic(() => import('@/components/ui/animated-tooltip').then(mod => ({ default: mod.AnimatedTooltip })), {
  loading: () => <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="w-12 h-12 bg-gray-800/20 rounded-full animate-pulse" />
    ))}
  </div>,
});

const Hero = memo(() => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  
  // Animation Refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Memoized constants to prevent recreation
  const flipWords = useMemo(() => ['Umsatz', 'Reichweite', 'Mitarbeiter'], []);
  
  const teamMembers = useMemo(() => [
    {
      id: 1,
      name: 'Azim Choudhury',
      designation: 'CD Immobilien Portfolio',
      image: '/azimchoudry.jpg',
    },
    {
      id: 2,
      name: 'Michael Schürdt',
      designation: 'HMS-Finance Consulting',
      image: '/P1039493.jpg',
    },
    {
      id: 3,
      name: 'Jens Freyer',
      designation: 'Freyer Immobilien',
      image: '/P1039309.jpg',
    },
    {
      id: 4,
      name: 'Alexander Banzhaf',
      designation: 'Banzhaf Immobilien',
      image: '/banzhaf.jpeg',
    },
    {
      id: 5,
      name: 'Jacek',
      designation: 'MSH Immobilien',
      image: '/profilbild1.jpg',
    },
    {
      id: 6,
      name: 'Alexander Kedro',
      designation: 'Kedro Immobilien',
      image: '/kedro.jpeg',
    },
  ], []);

  // Memoized animation function
  const applyAnimations = useCallback(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    setTimeout(() => {
      if (title) title.classList.add('animate-slide-right');
    }, 100);
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
  }, []);

  useEffect(() => {
    // Starte Animationen nach kurzem Delay, damit DOM vollständig geladen ist
    const timer = setTimeout(applyAnimations, 100);
    return () => clearTimeout(timer);
  }, [applyAnimations]);

  const playVideo = useCallback(() => {
    setIsVideoPlaying(true);
  }, []);

  const handleCtaClick = useCallback(() => {
    // Öffne Calendly-Link in einem neuen Tab
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  }, []);

  // Memoized components to prevent recreation
  const OrangeBlurEffect = useMemo(() => (
    <div className="absolute inset-0 -translate-y-24 sm:-translate-y-48 pointer-events-none">
      <svg className="blur-3xl filter opacity-40" style={{ filter: 'blur(64px)' }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
        <defs>
          <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff8040" />
            <stop offset="100%" stopColor="#ff5500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ), []);

  const DesktopOrangeBlurEffect = useMemo(() => (
    <div className="absolute -inset-4 translate-y-8 pointer-events-none z-0">
      <svg className="blur-3xl filter opacity-50 w-[100%] h-[100%]" style={{ filter: 'blur(60px)' }} viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#desktop-c)" />
        <defs>
          <linearGradient id="desktop-c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff8040" />
            <stop offset="100%" stopColor="#ff5500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ), []);

  const GumletVideoPlayer = useMemo(() => (
    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl z-50" style={{position: 'relative', aspectRatio: '16/9'}}>
      <iframe 
        loading="lazy" 
        title="Gumlet video player"
        src="https://play.gumlet.io/embed/6838f13e71151e6b584f492d?autoplay=1&muted=1&controls=1&loop=1&playsinline=1"
        style={{border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 100}}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; microphone; camera"
        allowFullScreen
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-forms allow-pointer-lock allow-popups allow-modals"
      />
    </div>
  ), []);

  return (
    <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden bg-black sm:pb-12 lg:pb-16 xl:pb-20 mt-8 lg:mt-12">
      {/* Animierte Hintergrundgradienten */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/10 z-0"></div>
      
      {/* Glühende Kugeln */}
      <div className="absolute top-1/4 right-1/4 h-60 w-60 rounded-full bg-orange-500/10 filter blur-[100px] animate-pulse-orange"></div>
      <div className="absolute bottom-1/3 left-1/3 h-80 w-80 rounded-full bg-orange-500/5 filter blur-[120px] animate-pulse-orange" style={{ animationDelay: '1s' }}></div>
      
      <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
        {/* Flexbox Layout für Desktop */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Linke Spalte - Text-Inhalt */}
          <div className="flex-1 lg:max-w-[50%] relative z-10 lg:text-left text-center order-1 lg:order-1">
            {/* Haupttitel - parallel zum Video positioniert */}
            <h1 ref={titleRef} className="text-4xl font-normal text-white sm:text-5xl lg:text-5xl xl:text-6xl lg:text-left" style={{ lineHeight: '1.1' }}>
              <span className="block relative">
                <span className="relative inline-block">
                  Täglich
                  {/* Gerader Unterstrich statt geschwungener Linie - mehr Abstand hinzugefügt */}
                  <span className="absolute bottom-[-8px] md:bottom-[-6px] left-0 w-full h-2 bg-[#ff5500]"></span>
                </span> neue <span style={{ color: '#ff5500' }} className="text-glow font-bold uppercase">qualifizierte</span>
              </span>
              <span className="block"> Leads für Finanzberater und Kapitalanlagen-Berater</span>
            </h1>

            {/* Video nur in mobiler Ansicht nach H1 */}
            <div className="mt-6 lg:hidden relative mx-auto max-w-2xl order-2">
              {/* Orangener Blur-Effekt für mobile Ansicht */}
              <div className="lg:hidden">
                {OrangeBlurEffect}
              </div>
              {GumletVideoPlayer}
            </div>

            {/* Button */}
            <div ref={ctaRef} className="mt-6 sm:mt-8 relative z-40 lg:text-left flex lg:justify-start justify-center order-3 lg:order-2">
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
                
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transform: 'translateX(-100%)',
                    animation: 'shine 3s infinite',
                    zIndex: '1'
                  }}
                ></div>

                Jetzt kostenlos anfragen
              </button>
              
              {/* CSS Animation für Shine-Effekt */}
              <style jsx>{`
                @keyframes shine {
                  0% {
                    transform: translateX(-100%);
                  }
                  20%, 100% {
                    transform: translateX(100%);
                  }
                }
                
                button:hover {
                  background: rgba(255, 85, 0, 0.2) !important;
                  border-color: rgba(255, 85, 0, 0.7) !important;
                  box-shadow: 0 0 30px rgba(255, 85, 0, 0.6) !important;
                }
                
                button:hover div:first-of-type {
                  opacity: 0.85 !important;
                }
              `}</style>
            </div>

            {/* Testimonials Section - nur auf Mobile sichtbar */}
            <div className="mt-6 sm:mt-10 relative z-10 order-4 lg:order-3 lg:hidden">
              <p className="text-lg font-normal text-white">
                Bereits <span className="relative inline-block">
                  +100 zufriedene Partner
                  <span className="absolute bottom-[-2px] left-0 w-full h-1 bg-[#ff5500]"></span>
                </span>
              </p>
              <div className="flex flex-col md:flex-row items-center mt-3 justify-center lg:justify-start">
                <div className="scale-[0.6] md:scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="mt-6 md:mt-0 md:ml-12 flex items-center">
                  <div className="flex mr-6">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-6 h-6 text-[#ff5500] fill-[#ff5500] mr-1"
                      />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-white">4.9</span>
                    <span className="text-sm text-gray-400 ml-1">/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flip Words Section */}
            <div className="mt-6 h-14 mb-2 text-2xl sm:text-3xl md:text-4xl flex lg:justify-start justify-center order-5 lg:order-4">
              <div className="flex items-center mx-auto lg:mx-0">
                <span className="text-white mr-2 font-normal">Mehr</span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="inline-flex items-center lg:justify-start justify-center w-56 font-normal"
                />
              </div>
            </div>

            {/* Partner Logos - TikTok entfernt, nur ProvenExpert und andere */}
            <div className="flex flex-wrap lg:justify-start justify-center items-center mt-6 gap-4 relative z-10 order-6 lg:order-5">
              <Image
                src="/google5.svg"
                alt="Google Partners"
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
              <Image
                src="/ProvenExpert.svg"
                alt="ProvenExpert"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Rechte Spalte - Video (nur auf Desktop sichtbar) */}
          <div className="flex-1 lg:max-w-[50%] hidden lg:flex flex-col items-center justify-start relative order-2 lg:order-2">
            {/* Orangener Blur-Effekt für Desktop - niedriger z-index */}
            <div className="absolute inset-0 z-0">
              {DesktopOrangeBlurEffect}
            </div>
            
            {/* Gumlet Video Player - parallel zum H1 positioniert mit hohem z-index */}
            <div className="w-full transform scale-[1.15] mt-8 relative z-50">
              {GumletVideoPlayer}
            </div>

            {/* Testimonials Section - unter dem Video auf Desktop mit mehr Abstand zum Video */}
            <div className="mt-16 relative z-10 flex flex-col items-center">
              <p className="text-lg font-normal text-white text-center mb-2">
                Bereits <span className="inline-block">+100 zufriedene Partner</span>
              </p>
              <div className="flex flex-col items-center mt-0">
                <div className="scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex mr-6">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-6 h-6 text-[#ff5500] fill-[#ff5500] mr-1"
                      />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-white">4.9</span>
                    <span className="text-sm text-gray-400 ml-1">/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;