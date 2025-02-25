"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import React from "react"
import { Timeline } from "@/components/ui/timeline"
import Spline from '@splinetool/react-spline'

const timelineData = [
  {
    title: "Prozessanalyse",
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-6 flex flex-col h-full">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden -mt-4">
          <Image
            src="/process.svg"
            alt="Prozessanalyse"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 px-2">
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-medium leading-relaxed">
            Wir analysieren Ihre Vertriebsprozesse und identifizieren versteckte Potentiale für maximalen Erfolg
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Strategieentwicklung",
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-6 flex flex-col h-full">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden -mt-4">
          <Image
            src="/Strategie.svg"
            alt="Konzeptentwicklung"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 px-2">
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-medium leading-relaxed">
            Entwicklung Ihrer individuellen Marketing-Strategie basierend auf Datenanalyse
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Optimierung",
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-6 flex flex-col h-full">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/Optimierung.svg"
            alt="Performance Optimierung"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-400 text-center">
            Kontinuierliche Analyse und Verbesserung für stetig wachsende Conversion-Raten
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Skalierung",
    content: (
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-6 flex flex-col h-full">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/skalierung.svg"
            alt="Geschäftswachstum"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-400 text-center">
            Systematische Ausweitung erfolgreicher Kampagnen für nachhaltiges Wachstum
          </p>
        </div>
      </div>
    ),
  }
]

const ChartIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M2 20h20v2H2v-2zm3-6h4v6H5v-6zm6-6h4v12h-4V8zm6-6h4v18h-4V2z"
      fill="currentColor"
    />
  </svg>
)

export default function TimelineSection() {
  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <Timeline data={timelineData} />
      </div>
    </section>
  )
} 