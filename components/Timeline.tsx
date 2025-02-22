"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2020,
    title: "Gründung von HA Consulting",
    description: "Der Start unserer Mission, Finanzdienstleister digital erfolgreich zu machen.",
    details:
      "Mit der Vision, die Finanzbranche zu digitalisieren, starteten wir als spezialisierte Agentur für Kapitalanlage- und Finanzexperten. Unser Fokus: Maximale Reichweite durch innovative Social Media Strategien.",
  },
  {
    year: 2021,
    title: "Erste Erfolge im Immobilienbereich",
    description: "Durchbruch mit spezialisierten Marketing-Strategien für Immobilienmakler.",
    details:
      "Entwicklung maßgeschneiderter Social Media Kampagnen, die unseren Kunden durchschnittlich 300% mehr qualifizierte Leads brachten. Etablierung als Experten im Immobilien-Marketing.",
  },
  {
    year: 2022,
    title: "Expansion & Innovationen",
    description: "Erweiterung unseres Service-Portfolios und Verdreifachung des Kundenstamms.",
    details:
      "Einführung automatisierter Lead-Generierung und KI-gestützter Content-Strategien. Über 100 erfolgreiche Kampagnen für Finanzberater und Immobilienprofis.",
  },
  {
    year: 2023,
    title: "Marktführer im Finanz-Marketing",
    description: "Etablierung als Top-Agentur für digitales Marketing in der Finanzbranche.",
    details:
      "Entwicklung revolutionärer Marketing-Systeme speziell für Kapitalanlageberater. Durchschnittliche ROI unserer Kunden: 500% pro Kampagne.",
  },
  {
    year: 2024,
    title: "Digitale Revolution",
    description: "Launch unserer All-in-One Marketing Suite für Finanzprofis.",
    details:
      "Integration von KI-gestützten Analysetools und automatisierten Content-Systemen. Über 1000+ erfolgreiche Leads pro Monat für unsere Kunden.",
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

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 12,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Unsere Erfolgsgeschichte</h2>
          <p className="text-xl text-gray-300">Von der Vision zur Marktführerschaft im digitalen Finanzmarketing</p>
        </motion.div>

        <div className="relative">
          {/* Vertikale Timeline-Linie */}
          <motion.div
            className="absolute left-[50%] top-0 w-[2px] h-full bg-gradient-to-b from-[#ff5500]/0 via-[#ff5500] to-[#ff5500]/0"
            style={{ 
              scaleY: progress,
              originY: 0 
            }}
          />

          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
                total={timelineEvents.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
  total
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
  total: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={`
        relative mb-16 md:mb-24 last:mb-0
        grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8
        ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:[&>div:first-child]:order-2'}
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative">
        <motion.div
          className={`
            p-6 rounded-xl bg-gradient-to-br from-black to-gray-900
            border border-[#ff5500]/20 shadow-lg shadow-[#ff5500]/5
            hover:border-[#ff5500]/40 transition-all duration-300
            cursor-pointer
          `}
          whileHover={{ scale: 1.02 }}
          onClick={onToggle}
        >
          <span className="text-[#ff5500] text-2xl font-bold">{event.year}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{event.title}</h3>
          <p className="text-gray-300 mt-2">{event.description}</p>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-400 leading-relaxed">{event.details}</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center md:justify-center relative">
        <motion.div
          className={`
            w-4 h-4 rounded-full bg-[#ff5500]
            absolute md:relative left-0 md:left-auto
            shadow-lg shadow-[#ff5500]/50
            ${index % 2 === 0 ? 'md:left-[calc(100%-8px)]' : 'md:right-[calc(100%-8px)]'}
          `}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full bg-[#ff5500]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {index < total - 1 && (
          <motion.div
            className={`
              hidden md:block h-[2px] bg-gradient-to-r from-[#ff5500] to-[#ff5500]/20
              absolute top-[50%] transform -translate-y-1/2
              ${index % 2 === 0 ? 'right-0 w-[calc(50%+1px)]' : 'left-0 w-[calc(50%+1px)]'}
            `}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          />
        )}
      </div>
    </motion.div>
  )
} 