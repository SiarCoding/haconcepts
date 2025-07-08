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
          <h4 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mb-2 leading-tight">
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
          <h4 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mb-2 leading-tight">
            STRATEGIEENTWICKLUNG
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
          <h4 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mb-2 leading-tight">
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
          <h4 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mb-2 leading-tight">
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
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black/60 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-orange-500 border border-orange-600 shadow-lg shadow-orange-500/50" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-white font-montserrat">
                <div className="inline-block relative">
                  <span className="relative z-10">{item.title}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-md opacity-50"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
                </div>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-orange-500 font-montserrat">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
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
