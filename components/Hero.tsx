'use client';

import React from 'react';
import Image from 'next/image';
import { FlipWords } from '@/components/ui/flip-word';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const flipWords = ['Umsatz', 'Reichweite', 'Mitarbeiter'];
  
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

  const onLoad = (spline: any) => {
    // Zugriff auf die Spline-Scene
    if (spline) {
      const scene = spline.getScene();
      // Hintergrund auf schwarz setzen
      scene.background.visible = false;
    }
  };

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Wir machen Ihren Immobilienvertrieb{' '}
              <span className="relative">
                <span className="relative z-10">unschlagbar</span>
                <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
              </span>
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Sie legen sich zurück und zählen als Makler das Geld
            </p>

            {/* Button mit originalem Design */}
            <div className="mt-8 sm:mt-12">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8040_0%,#ff5500_50%,#ff8040_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[#cc4400]">
                  Worauf wartest du denn noch?
                </span>
              </button>
            </div>

            {/* Testimonials Section */}
            <div className="mt-8 sm:mt-12">
              <p className="text-lg font-normal text-white">Bereits +100 zufriedene Partner</p>
              <div className="flex items-center mt-3">
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
                </div>
              </div>
            </div>

            {/* Flip Words Section */}
            <div className="mt-8 h-16 mb-2 text-3xl sm:text-4xl md:text-5xl flex justify-start">
              <div className="flex items-center">
                <span className="text-white mr-2 font-normal">Mehr</span>
                <FlipWords
                  words={flipWords}
                  duration={3000}
                  className="inline-flex items-center justify-start w-64 font-normal"
                />
              </div>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-start items-center mt-8 gap-4">
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
          </div>

          {/* Right Side Illustration/Image */}
          <div className="relative">
            {/* Orangener Blur-Effekt - nach oben verschoben */}
            <div className="absolute inset-0 -translate-y-48">
              <svg className="blur-3xl filter opacity-30" style={{ filter: 'blur(64px)' }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                <defs>
                  <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff8040" />
                    <stop offset="100%" stopColor="#ff5500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;