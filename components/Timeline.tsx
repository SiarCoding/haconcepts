'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

interface TimelineStep {
  title: string;
  phase: string;
  subtitle: string;
  content: React.ReactNode;
}

const timelineSteps: TimelineStep[] = [
  {
    title: "PHASE 1",
    phase: "Prozessanalyse",
    subtitle: "Ihre Situation verstehen",
    content: (
      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-montserrat mb-2 leading-tight">
            PROZESSANALYSE
          </h4>
          <h3 className="text-lg md:text-xl text-orange-500 font-light font-montserrat mb-3">
            Ihre Situation verstehen
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-inter">
            Wir analysieren Ihre aktuellen Vertriebsprozesse und identifizieren versteckte Potentiale für maximalen Erfolg. Durch eine detaillierte Bestandsaufnahme schaffen wir die Grundlage für nachhaltiges Wachstum.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "PHASE 2",
    phase: "Strategieentwicklung",
    subtitle: "Maßgeschneiderte Lösung",
    content: (
      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-montserrat mb-2 leading-tight">
            <span className="block sm:inline">STRATEGIE</span>
            <span className="block sm:inline">ENTWICKLUNG</span>
          </h4>
          <h3 className="text-lg md:text-xl text-orange-500 font-light font-montserrat mb-3">
            Maßgeschneiderte Lösung
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-inter">
            Entwicklung Ihrer individuellen Marketing-Strategie basierend auf Datenanalyse und bewährten Methoden. Wir erstellen einen maßgeschneiderten Plan, der perfekt auf Ihre Zielgruppe abgestimmt ist.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "PHASE 3",
    phase: "Optimierung",
    subtitle: "Kontinuierliche Verbesserung",
    content: (
      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-montserrat mb-2 leading-tight">
            OPTIMIERUNG
          </h4>
          <h3 className="text-lg md:text-xl text-orange-500 font-light font-montserrat mb-3">
            Kontinuierliche Verbesserung
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-inter">
            Durch A/B-Tests und datenbasierte Anpassungen maximieren wir die Performance Ihrer Kampagnen. Kontinuierliche Analyse für stetig wachsende Conversion-Raten und Effizienz.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "PHASE 4",
    phase: "Skalierung",
    subtitle: "Nachhaltiges Wachstum",
    content: (
      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-montserrat mb-2 leading-tight">
            SKALIERUNG
          </h4>
          <h3 className="text-lg md:text-xl text-orange-500 font-light font-montserrat mb-3">
            Nachhaltiges Wachstum
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-inter">
            Systematische Ausweitung erfolgreicher Kampagnen für nachhaltiges und profitables Geschäftswachstum. Wir skalieren bewährte Strategien und erschließen neue Kanäle.
          </p>
        </div>
      </div>
    )
  }
];

export const Timeline = ({ data }: { data: TimelineStep[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans relative overflow-hidden"
      ref={containerRef}
    >
      {/* Frankfurt Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/frankfurt.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="inline-block border border-orange-500 rounded-full 
                         px-4 sm:px-6 py-2 
                         text-sm text-orange-500 
                         mb-6 tracking-wide font-medium font-montserrat">
            STRATEGISCHE SCHRITTE
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl 
                        font-normal leading-tight 
                        text-white mb-8
                        break-words font-montserrat">
            So arbeiten wir
            <div className="inline-block relative mx-2 mb-2">
              <span className="relative z-10 text-orange-500">zusammen</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 md:h-4 
                             bg-gradient-to-r from-orange-400 to-orange-500 blur-lg opacity-50"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] 
                             bg-gradient-to-r from-orange-400 to-orange-500"></span>
            </div>
          </h2>
          
          <p className="text-base md:text-lg 
                        leading-relaxed 
                        text-gray-300 max-w-2xl mx-auto
                        font-inter">
            In vier strategischen Schritten zu planbarem und nachhaltigem Erfolg.
          </p>
        </div>
      </div>

      {/* Timeline Content */}
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20 z-10 px-6 sm:px-8">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative mb-48 min-h-[300px]"
            >
              {/* Card Content */}
              <div className={`absolute top-16 ${
                isEven 
                  ? 'left-0 right-[54%] sm:right-1/2 pr-4 sm:pr-6 md:pr-8 lg:pr-16' 
                  : 'left-[54%] sm:left-1/2 right-0 pl-4 sm:pl-6 md:pl-8 lg:pl-16'
              }`}>
                <div className="max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg">
                  {item.content}
                </div>
              </div>

              {/* Timeline Indicator - Centered on line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-20 z-40">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/80 backdrop-blur-sm border-2 border-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-orange-500 shadow-inner" />
                </div>
              </div>

              {/* Phase Title - On opposite side of card */}
              <div className={`absolute top-16 ${
                isEven 
                  ? 'left-[54%] sm:left-1/2 right-0 pl-4 sm:pl-6 md:pl-8 lg:pl-16' 
                  : 'left-0 right-[54%] sm:right-1/2 pr-4 sm:pr-6 md:pr-8 lg:pr-16'
              } flex items-center ${
                isEven ? 'justify-start' : 'justify-end'
              }`}>
                <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-white font-montserrat break-words max-w-full">
                  <div className="inline-block relative">
                    <span className="relative z-10 leading-tight block">{item.title}</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 md:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-sm md:blur-md opacity-50"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
                  </div>
                </h3>
              </div>
            </div>
          );
        })}
        
        {/* Timeline Line - Centered */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-orange-500 to-orange-400 from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Timeline data={timelineSteps} />
    </div>
  );
};

export default VerticalTimeline;
