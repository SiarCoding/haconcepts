'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const clients = [
  {
    href: '/logohms.webp',
  },
  {
    href: '/logo1.webp',
  },
  {
    href: '/logo2.webp',
  },
  {
    href: '/simonlogo.webp',
  },
  {
    href: '/logo4.webp',
  },
  {
    href: '/logocd.webp',
  },
  {
    href: '/heureka-baufinanzierung-brand-logo.png',
  },
  {
    href: '/logoalexander.png',
  },
]

export function MovingLogos() {
  return (
    <div className="relative bg-black py-12 sm:py-16 lg:py-20 w-full">
      {/* Container mit maximalem Platz */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white px-4">
            <span className="relative">
              +
              <span className="relative mx-2">
                <span className="relative z-10">100</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
              </span>
            </span>
            vertrauen auf unsere Dienstleistung
          </h2>
        </div>

        {/* Vollbreite Logo Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Responsive Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-black via-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-l from-black via-black to-transparent z-10" />
          
          {/* Scrolling Container mit perfekter endloser Schleife */}
          <div className="flex animate-scroll-infinite w-max" style={{ willChange: 'transform' }}>
            {/* Erste Gruppe der Logos */}
            {clients.map((client, idx) => (
              <div
                key={`group1-${idx}`}
                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={100}
                  height={100}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Zweite identische Gruppe für nahtlose Schleife */}
            {clients.map((client, idx) => (
              <div
                key={`group2-${idx}`}
                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={100}
                  height={100}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Dritte identische Gruppe für perfekte Schleife */}
            {clients.map((client, idx) => (
              <div
                key={`group3-${idx}`}
                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
              >
                <Image
                  src={client.href}
                  alt="Client Logo"
                  width={100}
                  height={100}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  priority={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 