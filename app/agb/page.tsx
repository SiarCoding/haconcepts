import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'AGB | Haconcepts GbR | Vertragsbedingungen für Lead-Generierung',
  description: 'Allgemeine Geschäftsbedingungen von Haconcepts GbR. Erfahren Sie mehr über unsere Vertragsbedingungen und Leistungen im Bereich Performance Marketing und Lead-Generierung für Finanzberater und Immobilienmakler.',
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
              <p className="font-semibold text-white mb-4">Allgemeine Geschäftsbedingungen Haconcepts GbR, Kedenburgstraße 44, 22041 Hamburg gegenüber Unternehmern und Kaufleuten.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 1 Anwendungsbereich, Geltung</h2>
              <p>(1) Alle Lieferungen, Leistungen und Angebote von HACONCEPTS erfolgen ausschließlich aufgrund dieser Allgemeinen Geschäftsbedingungen. Diese sind Bestandteil aller Verträge, die HACONCEPTS mit ihren Vertragspartnern (nachfolgend auch "Kunde" genannt) über die von ihr angebotenen Lieferungen oder Leistungen schließt. Sie gelten auch für alle zukünftigen Lieferungen, Leistungen oder Angebote an den Auftraggeber, selbst wenn sie nicht nochmals gesondert vereinbart werden.</p>
              <p>(2) Geschäftsbedingungen des Kunden oder Dritter finden keine Anwendung, auch wenn HACONCEPTS ihrer Geltung im Einzelfall nicht gesondert widerspricht. Selbst wenn HACONCEPTS auf ein Schreiben oder eine E-Mail Bezug nimmt, das Geschäftsbedingungen des Kunden oder eines Dritten enthält oder auf solche verweist, liegt darin kein Einverständnis mit der Geltung jener Geschäftsbedingungen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 2 Leistungen von Haconcepts / Mitwirkung des Kunden</h2>
              <p>(1) HACONCEPTS erbringt die Agentur- und Beratungsdienstleistungen gegenüber Unternehmern und Kaufleuten im Bereich des Onlinemarketings, insbesondere auch den Bereichen des Online Reputation Managements (ORM) und der Anfragen- und Leadgenerierung, soweit nicht ausdrücklich schriftlich abweichend vereinbart, schuldet HACONCEPTS dem Kunden nicht die Erbringung eines Werks / konkreten Erfolgs oder Umsatzes.</p>
              <p>(2) HACONCEPTS schuldet weder eine bestimmte Anzahl an Leads noch eine bestimmte Qualität. Der Kunde wird darauf hingewiesen, dass etwaige Anfrager im Einzelfall auch falsche Angaben machen können.</p>
              <p>(3) Der Kunde hat die ihm obliegenden Mitwirkungshandlungen stets vollständig und fristgemäß auf erstes Anfordern von HACONCEPTS zu erbringen. Unterlässt der Kunde eine Mitwirkungshandlung und verhindert damit die Leistungserbringung durch HACONCEPTS, bleibt der Vergütungsanspruch von HACONCEPTS unberührt.</p>
              <p>(4) In Bezug auf die von HACONCEPTS zu erbringenden Dienstleistungen gegenüber dem Kunden steht HACONCEPTS hinsichtlich der Ausführung ein Leistungsbestimmungsrecht nach § 315 BGB zu.</p>
              <p>(5) HACONCEPTS ist berechtigt, dem Kunden geschuldete Leistungen auch von Erfüllungsgehilfen / Subunternehmern und Dritten erbringen zu lassen.</p>
              <p>(6) HACONCEPTS ist nicht für den dauerhaften Bestand einer Onlinemarketing-Kampagne auf Drittplattformen wie Google My Business verantwortlich.</p>
              <p>(7) HACONCEPTS ist nicht für die Rechtskonformität etwaiger Maßnahmen im Bereich ORM / Onlinemarketing für den Kunden verantwortlich. Im Zweifel hat der Kunde vor Beginn einer Maßnahme einen Rechtsbeistand auf eigene Kosten zu konsultieren.</p>
              <p>(8) Sofern Web- und Landeseiten für den Kunden erstellt werden, gelten diese für die Dauer der Vertragslaufzeit als an den Kunden vermietet. Darüber hinaus besteht kein Nutzungsrecht des Kunden.</p>
              <p>(9) Kosten für Werbekampagnen und Drittanbieterplattformen sind in der mit HACONCEPTS vereinbarten Pauschalvergütung nicht enthalten. Der Kunde hat diese separat selbst zu tragen und gegebenenfalls direkt mit der Drittanbieterplattform abzurechnen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 3 Zustandekommen von Verträgen</h2>
              <p>Der Vertragsschluss zwischen HACONCEPTS und dem Kunden kann fernmündlich, schriftlich oder in Textform erfolgen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 4 Zahlungen, Preise, Bedingungen</h2>
              <p>(1) Die Preise, die von HACONCEPTS angegeben und mitgeteilt werden, sind verbindlich. Die mitgeteilten Preise verstehen sich jeweils netto zuzüglich gesetzlicher Umsatzsteuer.</p>
              <p>(2) Die vom Kunden geschuldete Vergütung ist vorbehaltlich anderslautender Individualabrede sofort, in voller Höhe und im Voraus fällig. Eine von HACONCEPTS erteilte (SEPA-) Einzugsermächtigung gilt bis auf Widerruf auch für die weitere Geschäftsverbindung.</p>
              <p>(3) Sofern der SEPA-Lastschrifteinzug vereinbart wird, hat der Kunde HACONCEPTS nach Vertragsschluss ein schriftliches SEPA-Lastschriftmandat zu erteilen. HACONCEPTS stellt ein solches auf Anfrage zur Verfügung.</p>
              <p>(4) HACONCEPTS stellt dem Kunden eine ordnungsgemäße und die Umsatzsteuer ausweisende Rechnung aus (ggf. durch Erfüllungsgehilfen).</p>
              <p>(5) Für den Fall, dass vereinbarte Lastschriften nicht vom Konto des Kunden eingezogen werden können und eine Rückbuchung erfolgt, ist der Kunde verpflichtet, den geschuldeten Betrag binnen drei Werktagen nach Rückbuchung an HACONCEPTS zu überweisen und die durch die Rückbuchung veranlassten Kosten zu übernehmen.</p>
              <p>(6) Die Aufrechnung mit Gegenforderungen ist wechselseitig nur zulässig, wenn der jeweils andere Vertragspartner die Aufrechnung anerkannt hat oder diese rechtskräftig festgestellt ist. Dasselbe gilt für die Ausübung eines Zurückbehaltungsrechts durch eine Vertragspartei.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 5 Kündigung, Laufzeit</h2>
              <p>(1) Der Vertrag hat die individuell zwischen den Parteien vereinbarte Mindestlaufzeit. Die vorzeitige Kündigung ist ausgeschlossen. Sofern der Vertrag nicht spätestens vier Wochen vor Ablauf der Laufzeit gegenüber der jeweils anderen Partei aufgekündigt werden, verlängert er sich zu gleicher Laufzeit und gleichen Bedingungen.</p>
              <p>(2) Etwaige freie Kündigungsrechte des Kunden sind ausgeschlossen.</p>
              <p>(3) Kündigungen bedürfen zu ihrer Wirksamkeit der Schriftform.</p>
              <p>(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund / Rücktritt aus wichtigem Grund bleibt stets unberührt. Das Vorliegen eines wichtigen Grundes ist stets nachzuweisen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 6 Verzug / außerordentliche Kündigung</h2>
              <p>(1) Fristen für die Leistungserbringung durch HACONCEPTS beginnen nicht, bevor der Rechnungsbetrag bei HACONCEPTS eingegangen ist und vereinbarungsgemäß die für die Dienstleistungen notwendigen Daten bei HACONCEPTS vollständig vorliegen beziehungsweise die notwendigen Mitwirkungshandlungen komplett erbracht sind.</p>
              <p>(2) Ist der Kunde mit fälligen Zahlungen im Verzug, behält HACONCEPTS sich vor, weitere Leistungen bis zum Ausgleich des offenen Betrages nicht auszuführen.</p>
              <p>(3) Ist der Kunde im Fall der Ratenzahlung mit mindestens zwei fälligen Zahlungen gegenüber HACONCEPTS in Verzug, ist HACONCEPTS berechtigt, den Vertrag außerordentlich zu kündigen und die Leistungen einzustellen. HACONCEPTS wird gegebenenfalls gesamte Vergütung, die bis zum nächsten ordentlichen Beendigungstermin fällig wird, als Schadensersatz geltend zu machen.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 7 Erfüllung</h2>
              <p>(1) HACONCEPTS wird die vereinbarten Dienstleistungen gemäß Angebot mit der erforderlichen Sorgfalt durchführen. HACONCEPTS ist berechtigt, sich dazu uneingeschränkt der Hilfe Dritter zu bedienen.</p>
              <p>(2) Ist HACONCEPTS gehindert, die vereinbarten Dienstleistungen zu erbringen und stammen die Hinderungsausgründe aus der Sphäre des Kunden, bleibt der Vergütungsanspruch von HACONCEPTS unberührt.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 8 Verhalten und Rücksichtnahme</h2>
              <p>(1) Der Kunde hat die üblichen Verhaltensweisen eines redlichen Kaufmanns uns gegenüber zu gewährleisten. Wir behalten uns vor, jede rechtswidrige und/oder unsachgemäße beziehungsweise sachgrundlose Äußerung über unser Unternehmen und unsere Dienstleistungen, sei es durch Kunden, Mitbewerber oder anderweitige Dritte, insbesondere unwahre Tatsachenbehauptungen und Schmähkritiken, zivilrechtlich zu verfolgen und darüber hinaus ohne Vorankündigung zur Strafanzeige zu bringen.</p>
              <p>(2) Der Kunde ist bei Teilnahme an unseren Programmen und Veranstaltungen verpflichtet, den störungsfreien Fortgang an unseren Programmen und Veranstaltungen zu gewährleisten und unseren Anweisungen unmittelbar Folge zu leisten. Bei wiederholt festgestelltem Verstoß gegen eine einmal erteilte Anweisung sind wir berechtigt, den Kunden vorübergehend oder dauerhaft von der entsprechenden Teilnahme auszuschließen. Unser Vergütungsanspruch bleibt in diesen Fällen unberührt.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 9 Schutzrechte Dritter</h2>
              <p>Der Kunde gewährleistet, dass HACONCEPTS überlassene Arbeitsmaterialien (z.B. Fotos, Texte, Videos) frei von Rechten Dritter sind oder die für die Zwecke des Hauptvertrags erforderlichen Genehmigungen vorliegen. Der Kunde stellt HACONCEPTS insoweit von jeglicher Inanspruchnahme Dritter frei.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 10 Nutzungsrechte</h2>
              <p>(1) Der Kunde erhält ausschließlich für die Dauer der Vertragslaufzeit ein einfaches und nicht übertragbares Nutzungsrecht in Bezug auf die von HACONCEPTS erstellten und zur Verfügung gestellten Arbeits- und Leistungsergebnisse. Leistungs- und Arbeitsergebnisse im Sinne des zugrunde liegenden Vertrags sind alle Werk- bzw. Dienstleistungen oder Teile davon, die von HACONCEPTS für den Kunden erstellt wurden (z B alle Informationen, Dokumente, Auswertungen, Videos, Fotos, im Rahmen der Auftragserfüllung erworbenes Knowhow, Werbeanzeigen, Zeichnungen, Materialien, Pflichtenhefte, Programmentwürfe, (elektronische) Dateien, Datensammlungen, Individualsoftware einschließlich dazugehöriger Dokumentation, Handbücher und IT-Systeme in Form von Quellcodes oder in sonstiger Form).</p>
              <p>(2) Absatz 1 gilt ausschließlich unter dem Vorbehalt, dass der Kunde die HACONCEPTS nach dem Hauptvertrag zustehende Vergütung vollständig entrichtet hat.</p>
              <p>(3) Ist Ratenzahlung vereinbart, geht das nach Absatz 1 benannte Nutzungsrecht vorbehaltlich anderslautender Individualvereinbarung erst mit vollständiger Zahlung der letzten Rate an HACONCEPTS über.</p>
              <p>(4) Die Weitergabe der Arbeits- und Leistungsergebnisse an Dritte (auch verbundene Unternehmen) wird ausgeschlossen. Gleiches gilt für eine Bearbeitung nach § 23 UrhG.</p>
              <p>(5) Die Weitergabe unserer Programminhalte an Dritte ist verboten und wird im Fall des Verstoßes zivil- und strafrechtlich verfolgt werden. Dies gilt insbesondere auch für Zugänge zu unseren Mitgliederplattformen. Vorbehaltlich anderslautender Individualabrede besteht ein Nutzungsrecht ausschließlich für unseren direkten Vertragspartner.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 11 Widerrufsrecht</h2>
              <p>Ein Widerrufsrecht für Unternehmer im Sinne des § 14 BGB und Kaufleute gemäß Handelsgesetzbuch (HGB) besteht weder von Gesetzes wegen noch wird ein solches von HACONCEPTS anderweitig eingeräumt.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 12 Haftung</h2>
              <p>(1) HACONCEPTS haftet auf Schadensersatz – gleich aus welchem Rechtsgrund - nur für Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit haftet HACONCEPTS nur</p>
              <p>a) für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit,</p>
              <p>b) für Schäden aus der Verletzung einer wesentlichen Vertragspflicht (Verpflichtung, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Vertragspartner regelmäßig vertraut und vertrauen darf); in diesem Fall ist die Haftung jedoch auf den Ersatz des vorhersehbaren, typischerweise eintretenden Schadens begrenzt.</p>
              <p>(2) In den Grenzen nach Absatz 1 haftet HACONCEPTS nicht für Daten- und Programmverluste. Die Haftung für Datenverlust wird der Höhe nach auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und gefahr entsprechender Anfertigung von Sicherungskopien eingetreten wäre. Die Haftung nach dem Produkthaftungsgesetz bleibt ebenso stets unberührt wie die für die Übernahme einer Garantie.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">§ 13 Schlussbestimmungen</h2>
              <p>(1) Abweichungen von diesen AGB sind nur wirksam, wenn sie schriftlich vereinbart wurden. Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Kunden einschließlich Nebenabreden, Ergänzungen und Änderungen) haben in jedem Fall Vorrang vor diesen AGB. Für den Inhalt derartiger Vereinbarungen ist ein schriftlicher Vertrag bzw. die schriftliche Bestätigung von HACONCEPTS maßgeblich.</p>
              <p>(2) Das gesamte Vertragsverhältnis zwischen HACONCEPTS und dem Kunden unterliegt deutschem Recht unter Ausschluss des UN-Kaufrechts.</p>
              <p>(3) Erfüllungsort ist der Sitz von HACONCEPTS. Ausschließlicher kaufmännischer Gerichtsstand ist der Sitz von HACONCEPTS, derzeit Nürtingen.</p>
              <p>(4) Sollten eine oder mehrere Bestimmungen des Vertrags aus tatsächlichen oder rechtlichen Gründen unwirksam oder undurchführbar sein oder werden, so wird die Wirksamkeit der übrigen Vertragsbestimmungen hierdurch nicht berührt. HACONCEPTS und der Kunde sind verpflichtet, die unwirksame oder undurchführbare Bestimmung durch eine wirksame Bestimmung zu ersetzen, die dem wirtschaftlich Gewollten am nächsten kommt.</p>
            </section>
            
            <section className="mt-8">
              <p className="italic">AGB Stand: 31.07.2022 © Vervielfältigung verboten</p>
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