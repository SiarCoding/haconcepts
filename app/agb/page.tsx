import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'AGB | NextMove Consulting | Vertragsbedingungen für Lead-Generierung',
  description: 'Allgemeine Geschäftsbedingungen von NextMove Consulting. Erfahren Sie mehr über unsere Vertragsbedingungen und Leistungen im Bereich Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler.',
  alternates: {
    canonical: '/agb',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AGB() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-xl border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">1. Geltungsbereich</h2>
              <p>1.1 Die nachstehenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen der NextMove Consulting, Inhaber Ali Alizadah, Kedenburgstraße 44, 22043 Hamburg (nachfolgend "NextMove Consulting" genannt).</p>
              <p>1.2 Abweichende Geschäftsbedingungen des Kunden werden nicht anerkannt, es sei denn, NextMove Consulting stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
              <p>1.3 Diese AGB gelten sowohl gegenüber Verbrauchern als auch gegenüber Unternehmern, es sei denn, in der jeweiligen Klausel wird eine Differenzierung vorgenommen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">2. Vertragsschluss</h2>
              <p>2.1 Die Darstellung der Dienstleistungen auf unserer Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar.</p>
              <p>2.2 Durch die Beauftragung unserer Dienstleistungen gibt der Kunde ein verbindliches Angebot ab. Der Vertrag kommt erst durch unsere Auftragsbestätigung oder mit Beginn der Ausführung der Dienstleistung zustande.</p>
              <p>2.3 Alle Angebote von NextMove Consulting sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind oder eine bestimmte Annahmefrist enthalten.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">3. Leistungsumfang</h2>
              <p>3.1 Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung in unserem Angebot bzw. unserer Auftragsbestätigung.</p>
              <p>3.2 NextMove Consulting ist berechtigt, die vereinbarten Leistungen durch qualifizierte Dritte erbringen zu lassen.</p>
              <p>3.3 Änderungen oder Ergänzungen des vereinbarten Leistungsumfangs bedürfen der Schriftform.</p>
              <p>3.4 Bei der Erstellung und Durchführung von Marketing-Kampagnen kann NextMove Consulting keine Garantie für einen bestimmten Erfolg oder eine bestimmte Anzahl von Leads übernehmen, da der Erfolg von verschiedenen, nicht immer beeinflussbaren Faktoren abhängt.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">4. Mitwirkungspflichten des Kunden</h2>
              <p>4.1 Der Kunde ist verpflichtet, NextMove Consulting alle für die Erbringung der vereinbarten Leistungen erforderlichen Informationen, Materialien und Zugänge rechtzeitig zur Verfügung zu stellen.</p>
              <p>4.2 Der Kunde stellt sicher, dass die von ihm bereitgestellten Inhalte nicht gegen geltendes Recht verstoßen und keine Rechte Dritter verletzen.</p>
              <p>4.3 Verzögerungen, die durch eine verspätete oder unvollständige Bereitstellung von Informationen oder Materialien durch den Kunden entstehen, gehen zu Lasten des Kunden und können zu einer Verschiebung vereinbarter Termine führen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">5. Vergütung und Zahlungsbedingungen</h2>
              <p>5.1 Die Vergütung für unsere Leistungen richtet sich nach den im Angebot bzw. in der Auftragsbestätigung genannten Preisen.</p>
              <p>5.2 Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.</p>
              <p>5.3 Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig, sofern nicht anders vereinbart.</p>
              <p>5.4 Bei Zahlungsverzug ist NextMove Consulting berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz (bei Unternehmern) bzw. 5 Prozentpunkten über dem Basiszinssatz (bei Verbrauchern) zu berechnen.</p>
              <p>5.5 Bei längerfristigen Projekten ist NextMove Consulting berechtigt, angemessene Abschlagszahlungen zu verlangen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">6. Laufzeit und Kündigung</h2>
              <p>6.1 Die Laufzeit des Vertrages ergibt sich aus dem Angebot bzw. der Auftragsbestätigung.</p>
              <p>6.2 Bei Verträgen mit einer festen Laufzeit ist eine ordentliche Kündigung vor Ablauf der vereinbarten Laufzeit ausgeschlossen.</p>
              <p>6.3 Bei Verträgen mit unbestimmter Laufzeit kann der Vertrag von beiden Seiten mit einer Frist von 30 Tagen zum Monatsende gekündigt werden, sofern nicht anders vereinbart.</p>
              <p>6.4 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>
              <p>6.5 Kündigungen bedürfen der Schriftform.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">7. Nutzungsrechte</h2>
              <p>7.1 NextMove Consulting räumt dem Kunden an den im Rahmen des Auftrags erstellten Werken und Arbeitsergebnissen ein einfaches, nicht übertragbares Nutzungsrecht ein, soweit nicht ausdrücklich etwas anderes vereinbart wurde.</p>
              <p>7.2 Die Einräumung der Nutzungsrechte steht unter der aufschiebenden Bedingung der vollständigen Zahlung der vereinbarten Vergütung.</p>
              <p>7.3 NextMove Consulting ist berechtigt, auf die für den Kunden erstellten Werke als Referenz hinzuweisen und diese zu Präsentationszwecken zu nutzen, sofern keine berechtigten Interessen des Kunden entgegenstehen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">8. Haftung</h2>
              <p>8.1 NextMove Consulting haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung von NextMove Consulting, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen.</p>
              <p>8.2 Für sonstige Schäden haftet NextMove Consulting nur, wenn sie auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung von NextMove Consulting, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen.</p>
              <p>8.3 Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten verletzt werden. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.</p>
              <p>8.4 Die Haftung ist auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.</p>
              <p>8.5 Die vorstehenden Haftungsbeschränkungen gelten nicht für Ansprüche nach dem Produkthaftungsgesetz.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">9. Datenschutz</h2>
              <p>9.1 NextMove Consulting verarbeitet personenbezogene Daten des Kunden unter Einhaltung der geltenden datenschutzrechtlichen Bestimmungen.</p>
              <p>9.2 Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">10. Geheimhaltung</h2>
              <p>10.1 Die Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen Informationen, Unterlagen und Daten vertraulich zu behandeln und nur für die Zwecke des jeweiligen Auftrags zu verwenden.</p>
              <p>10.2 Diese Verpflichtung gilt auch nach Beendigung der Zusammenarbeit fort.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">11. Schlussbestimmungen</h2>
              <p>11.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
              <p>11.2 Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Hamburg, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
              <p>11.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.</p>
              <p>11.4 Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Änderung dieser Schriftformklausel.</p>
            </section>
            
            <section className="mt-8">
              <p className="italic">Stand: Juni 2024</p>
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