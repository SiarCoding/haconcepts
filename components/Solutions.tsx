'use client';

import React, { useEffect, useRef, useMemo, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { LinkedInOrbiting } from "@/components/magicui/linkedin-orbiting";
import { Mac } from './ui/mac';

// Lazy load CardContainer for better performance
const CardContainer = dynamic(() => import('./CardContainer'), {
  loading: () => <div className="h-96 bg-gray-800/20 rounded-xl animate-pulse" />,
});

// Memoized assets to prevent recreation on each render
const carImages = {
  digitalLeadGeneration: "/meta-leads.png",
} as const;

const Solutions = memo(() => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Memoized observer options to prevent recreation
  const observerOptions = useMemo(() => ({
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  }), []);

  // Memoized intersection observer callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        entry.target.classList.remove('opacity-0', 'translate-y-20', '-translate-x-20', 'translate-x-20');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, [handleIntersection, observerOptions]);

  // Memoized card data to prevent recreation
  const cardData = useMemo(() => [
    {
      id: 'digital-lead-generation',
      title: "Digitale Leadgenerierung",
      description: "Erfolgserprobte Strategien mit denen wir qualifizierte Leads generieren und so nicht nur für Reichweite, sondern auch für zahlende Kunden sorgen. Während Sie sich auf Ihr Business fokussieren, verwandeln wir digitales Marketing in einen nachhaltigen Wachstumsmotor für Sie.",
      imageUrl: carImages.digitalLeadGeneration,
      accentText: "KI-GESTÜTZT & ZIELGERICHTET",
      accentColor: "#FF5500",
      component: null
    },
    {
      id: 'hollywood-reifer-content',
      title: "Hollywood-reifer Content",
      description: "Mit datengetriebenen, kreativen Video-Ads stechen wir aus der Masse heraus und überzeugen Ihre Zielgruppe direkt auf ihrem Smartphone. Mehr Reichweite, mehr Anfragen, mehr Kunden, die Sie in unserem System verwalten können. Wir übernehmen alles – 100% Full-Service: Strategie, Videoproduktion, Kampagnen-Management.",
      imageUrl: "/Holleywood-Content.png",
      accentText: "PROFESSIONELL & EMOTIONAL",
      accentColor: "#FF5500",
      component: null
    },
    {
      id: 'linkedin-automation',
      title: "LinkedIn Automation",
      description: "Keine Missverständnisse, keine Informationsverluste – nur präzise Umsetzung. Nachdem unser Team Ihr Business und Ihre Zielgruppe analysiert und eine Strategie entwickelt hat, bleibt alles in einer Hand. Wir generieren systematisch qualifizierte Kontakte und Leads über LinkedIn-Automation.",
      imageUrl: "",
      accentText: "AUTOMATISIERT & PERSONALISIERT",
      accentColor: "#FF5500",
      component: (
        <div className="relative w-full min-h-[250px] sm:min-h-[320px] lg:min-h-full flex items-center justify-center p-4">
          <LinkedInOrbiting />
        </div>
      )
    },
    {
      id: 'professionelles-webdesign',
      title: "Professionelles Webdesign",
      description: "Ihre Website ist Ihr digitaler Handschlag – der entscheidende erste Eindruck. Wir gestalten nicht nur ästhetische Webseiten, sondern schaffen digitale Erlebniswelten, die Vertrauen aufbauen, Ihre Expertise untermauern und Besucher zielsicher in zahlende Kunden verwandeln.",
      imageUrl: "",
      accentText: "VERTRAUENSFÖRDERND & KONVERSIONSSTARK",
      accentColor: "#FF5500",
      component: <Mac src="/kedro1.png" />
    },
    {
      id: 'personal-branding',
      title: "Unwiderstehliche Personal Brand",
      description: "In einem überfüllten Markt ist Ihre Persönlichkeit die stärkste Währung. Wir positionieren Sie als die unangefochtene Autorität in Ihrer Nische. Durch authentisches Storytelling und strategische Sichtbarkeit bauen wir eine Marke auf, die qualifizierte Kunden magnetisch anzieht.",
      imageUrl: "/bb.png",
      accentText: "AUTHENTISCH & AUTORITÄR",
      accentColor: "#FF5500",
      component: null
    }
  ], []);

  return (
    <section className="relative bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden font-sans" id="solutions">
      {/* Subtle orange light effect background - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] 
                       h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                       rounded-full bg-orange-500/20 blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] 
                       h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] 
                       rounded-full bg-orange-500/15 blur-[50px] sm:blur-[70px] md:blur-[90px] opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                       h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] 
                       rounded-full bg-orange-500/10 blur-[40px] sm:blur-[60px] md:blur-[80px] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section with Badge and Headline - Responsive */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Badge - Responsive */}
          <div className="inline-block border border-orange-500 rounded-full 
                         px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 
                         text-xs xs:text-sm text-orange-500 
                         mb-4 sm:mb-6 md:mb-8 tracking-wide font-medium">
            DIGITALES MARKETING FÜR FINANZBERATER
          </div>
          
          {/* Main Headline - Responsive Typography */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
                        font-normal leading-tight sm:leading-tight md:leading-tight 
                        text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20
                        break-words">
            Unsere
            <div className="inline-block relative mx-1 sm:mx-2 mb-1 sm:mb-2">
              <span className="relative z-10">Lösungsansätze</span>
              <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-2 sm:h-3 md:h-4 
                             bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-sm sm:blur-md md:blur-lg opacity-50"></span>
              <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-[1px] sm:h-[2px] 
                             bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </div>
            für Sie
          </h2>
          
          {/* Description Grid - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-12">
            <div>
              <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-base xl:text-lg 
                          leading-relaxed sm:leading-relaxed md:leading-relaxed 
                          text-white/80 break-words">
                Beim Aufbau <span className="text-white font-medium">marktführender digitaler Präsenzen</span> verfolgen wir
                einen ganzheitlichen Ansatz. Egal ob als externe Lead-Generierungs
                Abteilung, oder als <span className="text-white font-medium">Turbo für Ihr Marketing-Team</span>.
              </p>
            </div>
            <div>
              <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-base xl:text-lg 
                          leading-relaxed sm:leading-relaxed md:leading-relaxed 
                          mb-4 text-white/80 break-words">
                Unser <span className="text-white font-medium">Digital Marketing Service</span> ersetzt teure Inhouse-
                Lösungen. Anstatt sich mit hohen Werbekosten, Schulungen und
                Qualitätsschwankungen auseinanderzusetzen, greifen Sie auf ein
                <span className="text-white font-medium"> eingespieltes Full-Service-Team</span> zum fixen monatlichen Invest zu und
                bekommen dafür...
              </p>
            </div>
          </div>
        </div>

        {/* Cards with improved animation and responsive spacing */}
        <div className="space-y-12 xs:space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">
          {cardData.map((card, index) => (
            <div 
              key={card.id}
              ref={el => cardsRef.current[index] = el} 
              className={`opacity-0 translate-y-20 transition-all duration-1000 ease-out ${
                index % 2 === 0 
                  ? '-translate-x-20' // Even cards slide from left
                  : 'translate-x-20'  // Odd cards slide from right
              }`}
            >
              <CardContainer 
                accentText={card.accentText}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                accentColor={card.accentColor}
                component={card.component}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Solutions; 