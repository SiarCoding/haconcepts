"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Was unsere Kunden sagen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-blue-900/30 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="mb-4 text-lg">"HAConcepts hat meine Erwartungen bei der Facebook-Werbung mehr als erfüllt! Innerhalb der ersten 6 Wochen ihrer Dienstleistung habe ich dank ihrer professionellen Strategien und ihrem tiefgreifenden Verständnis für das Targeting 2 neue Aufträge mit einem Gesamtwert von knapp 1,5 Millionen Euro generiert."</p>
              <p className="font-bold text-blue-300">Willem Blankwater, Blankwater Immobilien</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-900/30 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="mb-4 text-lg">"Wir haben in den ersten Wochen, nach Start der Kampagne, mehr als 40 Anfragen erhalten. Daraus ergaben sich 16 neue Besichtigungstermine und eine Reichweite von über 160.000 erreichten Konten innerhalb der Zielgruppe. Und das im November 2023, in einer sehr schwierigen Phase im Immobiliengeschäft!"</p>
              <p className="font-bold text-blue-300">Michaelis Kekelidis, Michaelis Immobilien</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}