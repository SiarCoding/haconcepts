"use client";
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';

export default function WhyUs() {
  return (
    <section className="py-20 bg-black" id="why-us">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-12">
          Warum <span className="relative">
            <span className="relative z-10">NextMove Consulting</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Nachteile - Traditionelles Marketing */}
          <div className="rounded-xl border border-white/10 bg-black p-10 min-h-[700px] flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-8">Traditionelles Marketing</h3>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Hohe Streuverluste</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Schwer messbare Ergebnisse</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Lange Vorlaufzeiten</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Keine Echtzeit-Anpassungen</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Hohe Fixkosten</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Keine Branchenspezialisierung</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Unklare Zielgruppen</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Veraltete Methoden</span>
              </li>
              <li className="flex items-start">
                <RiCloseCircleFill className="w-7 h-7 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="ml-4 text-gray-300 text-lg">Keine Erfolgsgarantie</span>
              </li>
            </ul>
          </div>
          
          {/* Vorteile - NextMove Consulting */}
          <div className="rounded-xl p-[2px] relative bg-gradient-to-br from-[#ff5500] to-[#ff8040] shadow-[0_0_30px_rgba(255,85,0,0.4)] min-h-[700px]">
            <div className="bg-black rounded-xl p-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">NextMove Consulting</h3>
              <ul className="space-y-6 flex-grow">
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Präzise Zielgruppenansprache</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Transparentes Reporting</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Schnelle Ergebnisse</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Kontinuierliche Optimierung</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Leistungsbasierte Vergütung</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Branchenspezialisierung</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Moderne KI-Technologie</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Persönliche Betreuung</span>
                </li>
                <li className="flex items-start">
                  <RiCheckboxCircleFill className="w-7 h-7 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <span className="ml-4 text-gray-300 text-lg">Nachweisbare Erfolge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}