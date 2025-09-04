import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, schemas } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'NextMove Digital Schweiz | Lead-Generierung für Finanzberater & Immobilienmakler',
  description: 'Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler in der Schweiz. Spezialisiert auf Zürich, Genf und Schweizer Märkte.',
  alternates: {
    canonical: 'https://nextmove-digital.de/ch',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch'
    }
  }
};

const cities = [
  { name: 'Zürich', slug: 'zuerich', description: 'Schweizer Finanzplatz und Wirtschaftszentrum' },
  { name: 'Genf', slug: 'genf', description: 'Internationales Finanzzentrum der Westschweiz' }
];

export default function SchweizPage() {
  return (
    <>
      <JsonLd data={schemas.organization} />
      <JsonLd data={{
        ...schemas.service('Schweiz', 'CH'),
        areaServed: {
          '@type': 'Country',
          name: 'Schweiz',
          addressCountry: 'CH'
        }
      }} />

      <Header />
      
      <main className="flex min-h-screen flex-col bg-black">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead-Generierung in der <span className="bg-gradient-to-r from-[#ff8040] to-[#ff5500] bg-clip-text text-transparent">Schweiz</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Spezialisierte Performance Marketing Lösungen für Schweizer Finanzberater und Immobilienmakler. 
              Angepasst an die besonderen Anforderungen des Schweizer Marktes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ch/${city.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {city.name}
                </h2>
                <p className="text-gray-400 mb-4">{city.description}</p>
                <span className="text-orange-500 font-medium">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              ← Zurück zur Hauptseite
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
