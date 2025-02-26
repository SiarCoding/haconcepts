import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Impressum | NextMove Consulting | Lead-Generierung für Finanzberater',
  description: 'Impressum von NextMove Consulting. Erfahren Sie mehr über den Inhaber Ali Alizadah und die rechtlichen Informationen unseres Unternehmens für Performance Marketing und Lead-Generierung.',
  alternates: {
    canonical: '/impressum',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-xl border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
              <p>NextMove Consulting</p>
              <p>Ali Alizadah</p>
              <p>Kedenburgstraße 44</p>
              <p>22043 Hamburg</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
              <p>Telefon: +49 30 123 456 789</p>
              <p>E-Mail: info@nextmove-consulting.de</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE123456789</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Ali Alizadah</p>
              <p>Kedenburgstraße 44</p>
              <p>22043 Hamburg</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#ff5500] hover:underline">https://ec.europa.eu/consumers/odr/</a>.</p>
              <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p className="mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p className="mt-2">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p className="mt-2">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </section>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10">
            <Link href="/" className="text-[#ff5500] hover:underline">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 