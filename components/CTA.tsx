"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Hintergrundbild oder Farbverlauf als Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {!imageError ? (
          <>
            {/* Versuche das Bild zu laden */}
            <img 
              src="/CTA.png" 
              alt="Call to Action Hintergrund" 
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {/* Zeige Ladeindikator, während das Bild lädt */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500] to-[#ff8040] animate-pulse"></div>
            )}
          </>
        ) : (
          /* Fallback-Farbverlauf, wenn das Bild nicht geladen werden kann */
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500] to-[#ff8040]"></div>
        )}
        
        {/* Dunkle Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-6">
          Worauf wartest du noch?
        </h2>
        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          Sichere dir jetzt dein kostenloses Strategiegespräch und erfahre, wie wir deinen Vertrieb auf das nächste Level bringen
        </p>
        <Button 
          size="lg" 
          className="bg-white text-[#ff5500] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl group"
        >
          Jetzt Termin vereinbaren 
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}