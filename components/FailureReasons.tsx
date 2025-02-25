'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FailureReasons = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
      {/* Hintergrund-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text-Bereich */}
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Digitale Vertriebsstrategien im Immobiliensektor: 
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Wettbewerbsvorteile</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
              </span>
              durch KI
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                <strong className="text-white">Die Realität im Immobilienmarkt:</strong> Erfolgreiche Makler unterscheiden sich nicht durch Fachwissen, sondern durch effiziente digitale Vertriebsprozesse.
              </p>
              
              <p>
                Aktuelle Analysen zeigen, dass 78% der Immobilienmakler über 60% ihrer Arbeitszeit für manuelle Lead-Generierung aufwenden. Diese veralteten Methoden wie manuelle Adressrecherche und ungezielte Telefonakquise kosten wertvolle Zeit.
              </p>
              
              <p>
                <strong className="text-white">Der entscheidende Vorteil:</strong> KI-basierte Systeme reduzieren den manuellen Aufwand um 73% durch automatisiertes Scoring und Echtzeit-Qualifizierung von Leads.
              </p>
              
              <div className="mt-8 p-4 border-l-4 border-[#ff5500] bg-white/5">
                <p className="italic text-white">
                  "63% der Immobilieninteressenten entscheiden sich innerhalb von 72 Stunden für ein Angebot. Digitale Frühindikatoren verschaffen Maklern einen 48-Stunden-Vorsprung bei der Lead-Identifikation."
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Rechte Seite - Bild */}
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto">
              {/* SVG-Bild eingefügt */}
              <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10">
                <Image
                  src="/makler2.svg"
                  alt="Digitale Vertriebsstrategien für Immobilienmakler"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Dekorative Elemente beibehalten */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ff5500] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ff8040] rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FailureReasons; 