'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Container mit leicht negativem Margin für Hero */}
      <div className="-space-y-4 sm:-space-y-6 md:-space-y-8">
        <Header />
        <Hero />
      </div>
      <PainPoints />
      <Solutions />
      <Achievements />
      <Timeline />
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Unser Erfolgsrezept für Ihren Immobilienvertrieb
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <Target className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">
                  Präzise Zielgruppenansprache
                </h3>
                <p className="text-lg">
                  Wir erreichen genau die Käufer und Verkäufer, die für Sie
                  relevant sind. Keine Streuverluste, nur qualifizierte Leads.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-2">
                  Kontinuierliche Optimierung
                </h3>
                <p className="text-lg">
                  Unsere Kampagnen werden ständig analysiert und verbessert,
                  um maximale Performance zu gewährleisten.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">
                  Schnelle Resultate
                </h3>
                <p className="text-lg">
                  Sehen Sie schon nach wenigen Wochen erste Erfolge und
                  steigern Sie kontinuierlich Ihren ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
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
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Wie schnell sehe ich Ergebnisse?
                </h3>
                <p className="text-lg">
                  Viele unserer Kunden sehen bereits in den ersten 2-4 Wochen
                  signifikante Verbesserungen in ihren Leads und Verkäufen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Wie unterscheiden Sie sich von anderen Agenturen?
                </h3>
                <p className="text-lg">
                  Unsere Spezialisierung auf die Immobilienbranche, unser
                  datengetriebener Ansatz und unsere nachweisbaren Erfolge
                  machen uns einzigartig.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Welche Investition ist nötig?
                </h3>
                <p className="text-lg">
                  Wir bieten maßgeschneiderte Lösungen, die sich an Ihren
                  Zielen und Ihrem Budget orientieren. Kontaktieren Sie uns
                  für ein individuelles Angebot.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Wie lange dauert die Zusammenarbeit?
                </h3>
                <p className="text-lg">
                  Wir empfehlen eine Mindestlaufzeit von 3 Monaten, um
                  nachhaltige Ergebnisse zu erzielen. Viele unserer Kunden
                  arbeiten jedoch langfristig mit uns zusammen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
