'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import Timeline from '@/components/Timeline';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import { MovingLogos } from '@/components/ui/moving-cards'
import SocialProof from '@/components/SocialProof';
import Questions from '@/components/Questions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Container mit leicht negativem Margin für Hero */}
      <div className="-space-y-4 sm:-space-y-6 md:-space-y-8">
        <Header />
        <Hero />
      </div>
      <MovingLogos />
      <PainPoints />
      <Solutions />
      <SocialProof />
      <Timeline />
      <Testimonials />
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Ihr Weg zum digitalen Vertriebserfolg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Analyse</h3>
              <p>
                Wir analysieren Ihre aktuelle Situation und definieren klare
                Ziele.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Strategie</h3>
              <p>
                Wir entwickeln eine maßgeschneiderte Strategie für Ihren
                Erfolg.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Umsetzung</h3>
              <p>
                Wir setzen die Strategie mit modernsten Tools und Techniken
                um.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Optimierung</h3>
              <p>Wir optimieren kontinuierlich für maximale Performance.</p>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <CTA />
      <Questions />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
