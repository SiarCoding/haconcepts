'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FlipWords } from '@/components/ui/flip-word';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Star, Play } from 'lucide-react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const flipWords = ['Umsatz', 'Reichweite', 'Mitarbeiter'];
  
  const teamMembers = [
    {
      id: 1,
      name: 'Willem Blankwater',
      designation: 'Immobilien-Makler',
      image: '/blankwater.jpeg',
    },
    {
      id: 2,
      name: 'Timm Sonnenfeld',
      designation: 'Immobilien-Makler',
      image: '/sonnenfeld.jpeg',
    },
    {
      id: 3,
      name: 'Adil Hersan',
      designation: 'Immobilien-Makler',
      image: '/hersan.jpeg',
    },
    {
      id: 4,
      name: 'Michaelis Kekelidis',
      designation: 'Immobilien-Makler',
      image: '/kekelidis.jpeg',
    },
    {
      id: 5,
      name: 'Sven Dederichs',
      designation: 'Kapitalanlage',
      image: '/profilbild1.jpg',
    },
    {
      id: 6,
      name: 'Nico Fesel & Stefan Fries',
      designation: 'Kapitalanlage',
      image: '/Hilpert.jpg',
    },
  ];

  const onLoad = () => {
    // Leere Funktion als Platzhalter
  };
  
  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCtaClick = () => {
    // Öffne Calendly-Link in einem neuen Tab
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  // Orangener Blur-Effekt Komponente für Wiederverwendung
  const OrangeBlurEffect = () => (
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
  );

  // Desktop-spezifischer orangener Blur-Effekt mit höherer Sichtbarkeit
  const DesktopOrangeBlurEffect = () => (
    <div className="absolute -inset-16 -translate-x-16 -translate-y-20 pointer-events-none">
      <svg className="blur-3xl filter opacity-60 w-[130%] h-[130%]" style={{ filter: 'blur(70px)' }} viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#desktop-c)" />
        <defs>
          <linearGradient id="desktop-c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff8040" />
            <stop offset="100%" stopColor="#ff5500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // Video-Player-Komponente für Wiederverwendung
  const VideoPlayer = () => (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl z-10">
      {isVideoPlaying ? (
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
          title="Marketing Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="relative w-full h-full">
          {/* Video Thumbnail */}
          <div className="relative w-full h-full">
            <img
              src="/Bild2.jpg"
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 z-10"></div>
          </div>
          
          {/* Play Button */}
          <button 
            onClick={playVideo}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-[#ff5500]/30 blur-xl scale-150 animate-pulse"></div>
              
              {/* Button background */}
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff5500] to-[#ff8040] shadow-lg shadow-[#ff5500]/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            
            <p className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-white font-medium">
              Video abspielen
            </p>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-5 gap-x-8">
          {/* Linke Spalte - Text-Inhalt (3/5 der Breite) */}
          <div className="lg:col-span-3 relative z-10 lg:text-left text-center">
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl lg:text-left">
              <div className="mb-2">
              Täglich neue 
                <span className="relative inline-block">
                  <span className="relative z-10">qualifizierte Leads</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
                </span>
              </div>
              <div>für Finanzberater und Kapitalanleger</div>
            </h1>

            {/* Video nur in mobiler Ansicht nach H1 */}
            <div className="mt-8 lg:hidden relative mx-auto max-w-2xl">
              {/* Orangener Blur-Effekt für mobile Ansicht */}
              <OrangeBlurEffect />
              <VideoPlayer />
            </div>

            {/* Button mit originalem Design */}
            <div className="mt-8 sm:mt-12 relative z-40 lg:text-left flex lg:justify-start justify-center">
              <button 
                onClick={handleCtaClick}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8040_0%,#ff5500_50%,#ff8040_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[#cc4400]">
                  Worauf wartest du denn noch?
                </span>
              </button>
            </div>

            {/* Testimonials Section */}
            <div className="mt-8 sm:mt-12 relative z-10">
              <p className="text-lg font-normal text-white">Bereits +100 zufriedene Partner</p>
              <div className="flex flex-col md:flex-row items-center mt-3 justify-center lg:justify-start">
                <div className="scale-[0.6] md:scale-100 flex-shrink-0">
                  <AnimatedTooltip items={teamMembers} />
                </div>
                <div className="mt-6 md:mt-0 md:ml-12 flex items-center">
                  <div className="flex mr-6">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400 mr-1"
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
            
            {/* Flip Words Section - Größe angepasst */}
            <div className="mt-8 h-14 mb-2 text-2xl sm:text-3xl md:text-4xl flex lg:justify-start justify-center">
              <div className="flex items-center mx-auto lg:mx-0">
                <span className="text-white mr-2 font-normal">Mehr</span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="inline-flex items-center lg:justify-start justify-center w-56 font-normal"
                />
              </div>
            </div>

            {/* Partner Logos - ProvenExpert hinzugefügt */}
            <div className="flex flex-wrap lg:justify-start justify-center items-center mt-8 gap-4 relative z-10">
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
              <Image
                src="/ProvenExpert.svg"
                alt="ProvenExpert"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Rechte Spalte - Video (2/5 der Breite) - nur auf Desktop sichtbar */}
          <div className="relative lg:col-span-2 hidden lg:block">
            {/* Orangener Blur-Effekt für Desktop */}
            <div className="absolute inset-0 z-0">
              <DesktopOrangeBlurEffect />
            </div>
            
            {/* Video Player - nur auf Desktop */}
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;