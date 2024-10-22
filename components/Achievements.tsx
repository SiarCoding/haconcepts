"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Unsere Erfolge sprechen für sich</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/50 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">10+ Mio. €</h3>
              <p className="text-lg">Objektvolumen in 2024 gewonnen</p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">2.500+</h3>
              <p className="text-lg">Qualifizierte Käuferanfragen generiert</p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">2,5 Wochen</h3>
              <p className="text-lg">Durchschnittliche Vermarktungszeit</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}