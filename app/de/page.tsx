import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, schemas } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'NextMove Digital Deutschland | Lead-Generierung für Finanzberater & Immobilienmakler',
  description: 'Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler in Deutschland. Spezialisiert auf Berlin, München, Hamburg.',
  alternates: {
    canonical: 'https://nextmove-digital.de/de',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch'
    }
  }
};

const cities = [
  { name: 'Berlin', slug: 'berlin', description: 'Deutschlands Finanz- und Immobilienhauptstadt' },
  { name: 'München', slug: 'muenchen', description: 'Bayerns wirtschaftliches Zentrum' },
  { name: 'Hamburg', slug: 'hamburg', description: 'Norddeutschlands Wirtschaftsmetropole' }
];

export default function DeutschlandPage() {
  return (
    <>
      <JsonLd data={schemas.organization} />
      <JsonLd data={{
        ...schemas.service('Deutschland', 'DE'),
        areaServed: {
          '@type': 'Country',
          name: 'Deutschland',
          addressCountry: 'DE'
        }
      }} />

      <Header />
      
      <main className="flex min-h-screen flex-col bg-black">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead-Generierung in <span className="bg-gradient-to-r from-[#ff8040] to-[#ff5500] bg-clip-text text-transparent">Deutschland</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Spezialisierte Performance Marketing Lösungen für Finanzberater und Immobilienmakler 
              in deutschen Großstädten. Qualifizierte Leads ohne hohe Werbekosten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/de/${city.slug}`}
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
