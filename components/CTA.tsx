"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Bereit, Ihren Immobilienvertrieb zu revolutionieren?</h2>
        <p className="text-xl mb-8">Vereinbaren Sie jetzt Ihr kostenloses und unverbindliches Beratungsgespräch</p>
        <Button size="lg" className="animate-pulse bg-blue-600 hover:bg-blue-700">
          Jetzt Termin buchen <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}