"use client";
import { CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Warum Sie mit uns arbeiten sollten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 mb-4 text-green-400" />
            <h3 className="text-2xl font-bold mb-2">Expertenwissen</h3>
            <p className="text-lg">Profitieren Sie von unserer jahrelangen Erfahrung im Immobilien-Performance-Marketing. Wir kennen die Branche und ihre Herausforderungen wie unsere Westentasche.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-16 h-16 mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2">Zielgruppenspezifisch</h3>
            <p className="text-lg">Wir erreichen genau die Käufer und Verkäufer, die Sie suchen. Unsere maßgeschneiderten Kampagnen sprechen Ihre idealen Kunden direkt an.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ArrowRight className="w-16 h-16 mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-2">Messbare Ergebnisse</h3>
            <p className="text-lg">Transparente Einblicke in den Erfolg Ihrer Kampagnen. Sie sehen in Echtzeit, wie Ihre Investition sich in konkrete Ergebnisse umwandelt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}