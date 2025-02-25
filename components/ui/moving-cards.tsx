'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const clients = [
  {
    href: '/logo.png',
  },
  {
    href: '/logo1.png',
  },
  {
    href: '/logo2.jpg',
  },
  {
    href: '/logo3.png',
  },
  {
    href: '/logo4.jpeg',
  },
]

export function MovingLogos() {
  return (
    <div className="relative bg-black py-20">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">
          <span className="relative">
            +
            <span className="relative mx-2">
              <span className="relative z-10">100</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>
          </span>
          vertrauen auf unsere Dienstleistung
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative overflow-hidden">
        {/* Gradient Mask für sanftes Ein- und Ausblenden */}
        <div className="absolute left-0 top-0 bottom-0 w-[150px] bg-gradient-to-r from-black via-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[150px] bg-gradient-to-l from-black via-black to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll w-max">
          {/* Dreifache Gruppe von Logos für nahtloseres Scrollen */}
          {[...Array(3)].map((_, groupIdx) => (
            clients.map((client, idx) => (
              <Image
                key={`${groupIdx}-${idx}`}
                src={client.href}
                alt="Client Logo"
                width={80}
                height={80}
                className="mx-8 w-24 h-24 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            ))
          ))}
        </div>
      </div>
    </div>
  )
} 