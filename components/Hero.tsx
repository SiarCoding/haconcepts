'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Star, Play } from 'lucide-react';

// Lazy load components for better performance
const FlipWords = dynamic(() => import('@/components/ui/flip-word').then(mod => ({ default: mod.FlipWords })), {
  loading: () => <div className="w-40 h-6 bg-gray-800/20 rounded animate-pulse" />,
  ssr: false
});

const AnimatedTooltip = dynamic(() => import('@/components/ui/animated-tooltip').then(mod => ({ default: mod.AnimatedTooltip })), {
  loading: () => <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="w-10 h-10 bg-gray-800/20 rounded-full animate-pulse" />
    ))}
  </div>,
  ssr: false
});

const Hero = memo(() => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Animation Refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Memoized constants to prevent recreation
  const flipWords = useMemo(() => ['Umsatz', 'Reichweite', 'Notartermine'], []);

  const teamMembers = useMemo(() => [
    {
      id: 1,
      name: 'Azim Choudhury',
      designation: 'CD Immobilien Portfolio',
      image: '/azimchoudry.webp',
    },
    {
      id: 2,
      name: 'Michael Schürdt',
      designation: 'HMS-Finance Consulting',
      image: '/P1039493.webp',
    },
    {
      id: 3,
      name: 'Jens Freyer',
      designation: 'Freyer Immobilien',
      image: '/P1039309.webp',
    },
    {
      id: 4,
      name: 'Alexander Banzhaf',
      designation: 'Banzhaf Immobilien',
      image: '/banzhaf.webp',
    },
    {
      id: 5,
      name: 'Jacek',
      designation: 'MSH Immobilien',
      image: '/profilbild1.webp',
    },
    {
      id: 6,
      name: 'Alexander Kedro',
      designation: 'Kedro Immobilien',
      image: '/kedro.webp',
    },
    {
      id: 7,
      name: 'Simon Hauer',
      designation: 'Finanzhaus Südbaden',
      image: '/Simon.webp',
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
    // Öffne Lunacal-Link in einem neuen Tab
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  }, []);

  const handleWordClick = useCallback((word: string) => {
    // Website-Links für FlipWords
    const websiteLinks = {
      'Umsatz': 'https://freyer.immo',
      'Reichweite': 'https://cd-immo.de',
      'Notartermine': 'https://hmsfinance.de'
    };
    
    const url = websiteLinks[word as keyof typeof websiteLinks];
    if (url) {
      window.open(url, '_blank');
    }
  }, []);

  // Memoized components to prevent recreation - optimized with CSS containment
  const OrangeBlurEffect = useMemo(() => (
    <div className="absolute inset-0 -translate-y-16 sm:-translate-y-32 pointer-events-none" style={{ contain: 'layout style paint', willChange: 'auto' }}>
      <svg className="blur-xl md:blur-2xl lg:blur-3xl filter opacity-30 md:opacity-40" width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="absolute -inset-4 translate-y-6 pointer-events-none z-0">
      <svg className="blur-xl md:blur-2xl lg:blur-3xl filter opacity-40 md:opacity-50 w-[100%] h-[100%]" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="relative rounded-xl overflow-hidden z-40" style={{ position: 'relative', aspectRatio: '16/9' }}>
      <iframe
        loading="lazy"
        title="Gumlet video player"
        src="https://play.gumlet.io/embed/6894ce948d992eda26b310e5?autoplay=true&muted=true"
        style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 40 }}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  ), []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-black pb-20 sm:pb-24 lg:pb-32 xl:pb-40 mt-8 lg:mt-16">
      {/* Animierte Hintergrundgradienten */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/10 z-0"></div>

      {/* Glühende Kugeln - reduziert für kleinere Bildschirme */}
      <div className="absolute top-1/4 right-1/4 h-40 md:h-60 w-40 md:w-60 rounded-full bg-orange-500/10 filter blur-2xl md:blur-3xl animate-pulse-orange"></div>
      <div className="absolute bottom-1/3 left-1/3 h-60 md:h-80 w-60 md:w-80 rounded-full bg-orange-500/5 filter blur-2xl md:blur-3xl animate-pulse-orange" style={{ animationDelay: '1s' }}></div>

      <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-6xl">
        {/* Flexbox Layout für Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10">
          {/* Linke Spalte - Text-Inhalt */}
          <div className="flex-1 lg:max-w-[50%] relative z-50 text-center lg:text-left order-1 lg:order-1 w-full">
            {/* Haupttitel - kompakter für kleinere Bildschirme */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-white relative z-50"
              style={{ lineHeight: '1.1' }}
            >
              {/* Zeile 1 - Mobile: "Mehr Abschlüsse, weniger Akquise:" - Desktop: "Mehr Abschlüsse," */}
              <span className="block">
                <span className="lg:hidden">Mehr Abschlüsse, </span>
                <span className="hidden lg:inline">Mehr&nbsp;Abschlüsse,</span>
                <span className="lg:hidden text-[#ff5500] font-semibold">weniger&nbsp;Akquise:</span>
              </span>

              {/* Zeile 2 – Desktop: orange, Mobile: versteckt */}
              <span className="hidden lg:block text-[#ff5500] font-semibold">
                weniger&nbsp;Akquise:
              </span>

              {/* Zeile 2/3 – Mobile: "Ihr direkter Weg zu vorqualifizierten Kunden." - Desktop: "Ihr direkter Weg zu" */}
              <span className="block">
                <span className="lg:hidden">
                  Ihr{' '}
                  <span className="relative inline-block">
                    direkter
                    <span className="absolute bottom-[-2px] md:bottom-[-1px] left-0 w-full h-1 md:h-[2px] bg-[#ff5500]" />
                  </span>{' '}
                  Weg zu vorqualifizierten Kunden.
                </span>
                <span className="hidden lg:inline">
                  Ihr{' '}
                  <span className="relative inline-block">
                    direkter
                    <span className="absolute bottom-[-2px] md:bottom-[-1px] left-0 w-full h-1 md:h-[2px] bg-[#ff5500]" />
                  </span>{' '}
                  Weg zu
                </span>
              </span>

              {/* Zeile 4 - nur Desktop */}
              <span className="hidden lg:block">
                vorqualifizierten
              </span>

              {/* Zeile 5 - nur Desktop */}
              <span className="hidden lg:block">
                Kunden.
              </span>
            </h1>

            {/* Video nur in mobiler Ansicht nach H1 */}
            <div className="mt-5 lg:hidden relative mx-auto max-w-2xl order-2 w-full">
              {/* Orangener Blur-Effekt für mobile Ansicht */}
              <div className="lg:hidden">
                {OrangeBlurEffect}
              </div>
              {GumletVideoPlayer}
            </div>

            {/* Button - kompakter */}
            <div ref={ctaRef} className="mt-5 sm:mt-6 relative z-40 flex justify-center lg:justify-start order-3 lg:order-2 w-full">
              <button
                onClick={handleCtaClick}
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
                className="relative px-8 py-4 lg:px-10 lg:py-5 btn-orange-glow"
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

                Kostenloses Strategiegespräch
              </button>
            </div>

            {/* Testimonials Section - kompakter auf Mobile */}
            <div className="mt-5 sm:mt-8 relative z-10 order-4 lg:order-3 lg:hidden w-full flex flex-col items-center">
              <p className="text-base sm:text-lg font-normal text-white text-center">
                <span className="relative inline-block">
                  <span className="relative z-10">+50 zufriedene Partner</span>
                  <span className="absolute bottom-[1px] left-0 w-full h-1 bg-[#ff5500]"></span>
                </span>
              </p>
              <div className="flex flex-col md:flex-row items-center mt-3 justify-center">
                <div className="scale-[0.7] md:scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="mt-4 md:mt-0 md:ml-8 flex items-center">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-5 h-5 text-[#ff5500] fill-[#ff5500] mr-1"
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

            {/* Flip Words Section - kompakter */}
            <div className="mt-5 h-10 md:h-12 mb-2 text-xl sm:text-2xl md:text-3xl flex justify-center lg:justify-start order-5 lg:order-4 w-full">
              <div className="flex items-center">
                <span className="text-white mr-2 font-normal">Mehr</span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="inline-flex items-center justify-center lg:justify-start w-40 md:w-56 font-normal"
                  onWordClick={handleWordClick}
                />
              </div>
            </div>

            {/* Additional internal links for SEO - hidden but crawlable */}
            <div className="sr-only">
              <a href="/unsere-loesung">Unsere Lösung</a>
              <a href="/referenzen">Referenzen</a>
              <a href="/warum-wir">Warum wir</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/blog">Blog</a>
            </div>

            {/* Partner Logos - kompakter */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center mt-5 gap-3 relative z-10 order-6 lg:order-5 w-full">
              <Image
                src="/google5.svg"
                alt="Google Partners"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8"
                style={{ width: 'auto' }}
              />
              <Image
                src="/MetaBusinessPartner.svg"
                alt="Meta Business Partner"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8"
                style={{ width: 'auto' }}
              />
              <Image
                src="/TrustPilot.webp"
                alt="Trustpilot"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8"
                style={{ width: 'auto' }}
              />
              <Image
                src="/ProvenExpert.svg"
                alt="ProvenExpert"
                width={100}
                height={50}
                className="object-contain h-auto max-h-8"
                style={{ width: 'auto' }}
              />
            </div>
          </div>

          {/* Rechte Spalte - Video (nur auf Desktop sichtbar) */}
          <div className="flex-1 lg:max-w-[50%] hidden lg:flex flex-col items-center justify-start relative order-2 lg:order-2">
            {/* Orangener Blur-Effekt für Desktop - niedriger z-index */}
            <div className="absolute inset-0 z-0">
              {DesktopOrangeBlurEffect}
            </div>

            {/* Gumlet Video Player - kompakter */}
            <div className="w-full transform scale-[1.05] lg:scale-[1.1] mt-6 relative z-40">
              {GumletVideoPlayer}
            </div>

            {/* Testimonials Section - kompakter auf Desktop */}
            <div className="mt-12 relative z-10 flex flex-col items-center">
              <p className="text-base lg:text-lg font-normal text-white text-center mb-2">
                <span className="relative inline-block">
                  <span className="relative z-10">+50 zufriedene Partner</span>
                  <span className="absolute bottom-[1px] left-0 w-full h-1 bg-[#ff5500]"></span>
                </span>
              </p>
              <div className="flex flex-col items-center mt-0">
                <div className="scale-90 lg:scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-5 h-5 text-[#ff5500] fill-[#ff5500] mr-1"
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