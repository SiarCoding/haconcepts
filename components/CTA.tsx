"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#ff5500] to-[#ff8040]">
      <div className="container mx-auto px-4 text-center">
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