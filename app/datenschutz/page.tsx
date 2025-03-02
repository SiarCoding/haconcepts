import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | HAconcepts',
  description:
    'Datenschutzerklärung von HAconcepts. Hier erfahren Sie, wie wir Ihre personenbezogenen Daten verarbeiten.',
  alternates: {
    canonical: '/datenschutzerklaerung',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Datenschutzerklaerung() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-xl border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">1. Einleitung</h2>
            <p className="text-gray-300 mb-4">
              Im Folgenden informieren wir über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Websiten{' '}
              <a href="https://www.haconcepts.de" className="text-[#ff5500] hover:underline">
                www.haconcepts.de
              </a>{' '}
              und unserer Profile in Sozialen Medien. Personenbezogene Daten sind alle Daten, die auf eine konkrete natürliche
              Person beziehbar sind, z. B. ihr Name oder ihre IP-Adresse.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.1. Kontaktdaten</h3>
            <p className="text-gray-300 mb-4">
              Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist HAconcepts
              <br />
              Ali Alizadah
              <br />
              Kedenburgstraße 44, 22041 Hamburg, Deutschland
              <br />
              E-Mail:{' '}
              <a href="mailto:info@haconcepts.de" className="text-[#ff5500] hover:underline">
                info@haconcepts.de
              </a>
              <br />
              Gesetzlich vertreten durch Ali Alizadah.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              1.2. Umfang der Datenverarbeitung, Verarbeitungszwecke und Rechtsgrundlagen
            </h3>
            <p className="text-gray-300 mb-4">
              Den Umfang der Verarbeitung der Daten, Verarbeitungszwecke und Rechtsgrundlagen führen wir im Detail weiter unten
              aus. Als Rechtsgrundlage für eine Datenverarbeitung kommen grundsätzlich die folgenden in Betracht:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                Art. 6 Abs. 1 S. 1 lit. a DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, für die wir eine
                Einwilligung einholen.
              </li>
              <li>
                Art. 6 Abs. 1 S. 1 lit. b DSGVO ist Rechtsgrundlage, soweit die Verarbeitung personenbezogener Daten zur
                Erfüllung eines Vertrages erforderlich ist.
              </li>
              <li>
                Art. 6 Abs. 1 S. 1 lit. c DSGVO findet Anwendung, wenn wir mit der Verarbeitung personenbezogener Daten eine
                rechtliche Verpflichtung erfüllen.
              </li>
              <li>
                Art. 6 Abs. 1 S. 1 lit. f DSGVO dient als Rechtsgrundlage, wenn wir uns auf berechtigte Interessen berufen
                können, z. B. für technisch notwendige Cookies.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.3. Datenverarbeitung außerhalb des EWR</h3>
            <p className="text-gray-300 mb-4">
              Soweit wir Daten an Dienstleister oder Dritte außerhalb des EWR übermitteln, garantieren Angemessenheitsbeschlüsse
              der EU-Kommission die Sicherheit der Daten bei der Weitergabe – beispielsweise für Großbritannien, Kanada oder Israel.
              Bei Datenweitergaben in die USA dient ein Angemessenheitsbeschluss oder, falls nicht vorhanden, die Nutzung von
              Standardvertragsklauseln als Rechtsgrundlage.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.4. Speicherdauer</h3>
            <p className="text-gray-300 mb-4">
              Sofern nicht ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung
              nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Falls die Daten weiterhin für
              andere, gesetzlich zulässige Zwecke benötigt werden, erfolgt eine eingeschränkte Verarbeitung.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.5. Rechte der Betroffenen</h3>
            <p className="text-gray-300 mb-4">
              Betroffene haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen
              die Verarbeitung sowie auf Datenübertragbarkeit. Zudem besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.6. Pflicht zur Bereitstellung von Daten</h3>
            <p className="text-gray-300 mb-4">
              Kunden, Interessenten oder Dritte müssen uns nur die personenbezogenen Daten zur Verfügung stellen, die für die
              Begründung, Durchführung und Beendigung einer Geschäftsbeziehung oder gesetzlich vorgeschrieben sind. Pflichtangaben
              sind als solche gekennzeichnet.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              1.7. Keine automatische Entscheidungsfindung im Einzelfall
            </h3>
            <p className="text-gray-300 mb-4">
              Zur Begründung und Durchführung von Geschäftsbeziehungen nutzen wir grundsätzlich keine vollautomatisierte Entscheidungsfindung
              gemäß Art. 22 DSGVO. Sollte dies in Einzelfällen dennoch erfolgen, informieren wir gesondert.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.8. Kontaktaufnahme</h3>
            <p className="text-gray-300 mb-4">
              Bei der Kontaktaufnahme, z. B. per E-Mail oder Telefon, speichern wir die übermittelten Daten, um Ihre Anfrage zu
              beantworten. Rechtsgrundlage hierfür ist unser berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit. f DSGVO). Die
              Daten werden gelöscht, sobald sie nicht mehr benötigt werden oder gesetzlichen Aufbewahrungspflichten unterliegen.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">1.9. Kundenumfragen</h3>
            <p className="text-gray-300 mb-4">
              Gelegentlich führen wir Kundenumfragen durch, um unsere Angebote zu optimieren. Die Erhebung der hierfür benötigten
              Daten erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 S. 1 lit. f DSGVO) und wird gelöscht, sobald
              die Umfrageergebnisse ausgewertet wurden.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">2. Newsletter</h2>
            <p className="text-gray-300 mb-4">
              Wir informieren Kunden, die bereits Dienstleistungen in Anspruch genommen oder Produkte erworben haben, per E-Mail über
              unsere Angebote, sofern sie dem nicht widersprochen haben. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
              Interessenten, die einen kostenlosen Newsletter abonnieren, tun dies auf Basis ihrer Einwilligung (Art. 6 Abs. 1 S. 1
              lit. a DSGVO), die jederzeit widerrufbar ist.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">3. Datenverarbeitung auf unserer Website</h2>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.1. Hinweis für Websitebesucher aus Deutschland</h3>
            <p className="text-gray-300 mb-4">
              Unsere Website speichert Informationen in der Endeinrichtung (z. B. Cookies) oder greift auf bereits gespeicherte
              Informationen (z. B. IP-Adressen) zu – jeweils gemäß den gesetzlichen Bestimmungen.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.2. Informatorische Nutzung der Website</h3>
            <p className="text-gray-300 mb-4">
              Bei der rein informatorischen Nutzung der Website erheben wir die personenbezogenen Daten, die Ihr Browser an unseren
              Server übermittelt, um die Stabilität und Sicherheit unserer Website zu gewährleisten. Grundlage hierfür ist Art. 6
              Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.3. Webhosting und Bereitstellung der Website</h3>
            <p className="text-gray-300 mb-4">
              Unsere Website wird von verschiedenen Hosting-Anbietern betrieben. Weitere Informationen zu den Anbietern und deren
              Datenschutzerklärungen entnehmen Sie bitte den jeweiligen Links. Die Verarbeitung erfolgt auf Grundlage unseres
              berechtigten Interesses (Art. 6 Abs. 1 S. 1 lit. f DSGVO) und anderer einschlägiger Rechtsgrundlagen.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.4. Kontaktformular</h3>
            <p className="text-gray-300 mb-4">
              Bei Nutzung unseres Kontaktformulars werden die eingegebenen Daten gespeichert, um Ihre Anfrage zu bearbeiten.
              Rechtsgrundlage hierfür ist unser berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.5. Stellenanzeigen</h3>
            <p className="text-gray-300 mb-4">
              Bewerberdaten, die im Rahmen von Stellenanzeigen erhoben werden, dienen dem Bewerbungsverfahren. Pflichtangaben
              sind entsprechend gekennzeichnet. Die Verarbeitung erfolgt auf Grundlage der Einwilligung (Art. 6 Abs. 1 S. 1 lit. a
              DSGVO) oder unseres berechtigten Interesses.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.6. Buchung von Terminen</h3>
            <p className="text-gray-300 mb-4">
              Bei der Terminbuchung verarbeiten wir neben den eingegebenen Daten auch Meta- oder Kommunikationsdaten, um
              eine nutzerfreundliche Terminvereinbarung zu ermöglichen. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.7. Bewertungen</h3>
            <p className="text-gray-300 mb-4">
              Kundenbewertungen werden erfasst, um Rückmeldungen zu unseren Leistungen zu erhalten. Rechtsgrundlage hierfür ist
              Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.8. Kundenkonto</h3>
            <p className="text-gray-300 mb-4">
              Die Einrichtung eines Kundenkontos erfolgt auf Basis der Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO). Ein
              Widerruf der Einwilligung führt zur Löschung der Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              3.9. Veröffentlichung von Anzeigen im Namen von Partnerunternehmen
            </h3>
            <p className="text-gray-300 mb-4">
              Bei Anzeigen in sozialen Medien, bei denen Interessenten ihre Kontaktdaten angeben, werden diese Daten an das benannte
              Partnerunternehmen weitergegeben. Die Verarbeitung erfolgt auf Basis der Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
            </p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.10. Technisch notwendige Cookies</h3>
            <p className="text-gray-300 mb-4">
              Unsere Website setzt technisch notwendige Cookies ein – etwa zur Speicherung von Suchbegriffen, Log-In-Daten,
              Zahlungsanbieter-Daten oder Flash-Cookies. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">3.11. Drittanbieter</h2>
            <p className="text-gray-300 mb-4">Wir nutzen verschiedene Drittanbieter-Dienste:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                <strong>Trustpilot:</strong> Für Kundenbewertungen. Weitere Informationen unter{' '}
                <a href="https://de.legal.trustpilot.com/for-businesses/business-privacy-policy" className="text-[#ff5500] hover:underline">
                  Trustpilot Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>LinkedIn Ads:</strong> Für Werbung. Datenschutzerklärung unter{' '}
                <a href="https://www.linkedin.com/legal/privacy-policy" className="text-[#ff5500] hover:underline">
                  LinkedIn Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>OpenStreetMap:</strong> Für Karten. Datenschutzerklärung unter{' '}
                <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" className="text-[#ff5500] hover:underline">
                  OSM Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Google Webfonts:</strong> Für Schriftarten. Datenschutzerklärung unter{' '}
                <a href="https://policies.google.com/privacy?hl=de" className="text-[#ff5500] hover:underline">
                  Google Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Onepage.io:</strong> Zur Erstellung von Websites. Datenschutzerklärung unter{' '}
                <a href="https://onepage.io/de/datenschutzerklarung" className="text-[#ff5500] hover:underline">
                  Onepage Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Perspective:</strong> Für die Erstellung von Klick-Funnels. Datenschutzerklärung unter{' '}
                <a href="https://www.perspective.co/privacy-policy" className="text-[#ff5500] hover:underline">
                  Perspective Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>HubSpot:</strong> Für Marketing, Lead-Generierung und Analyse. Datenschutzerklärung unter{' '}
                <a href="https://legal.hubspot.com/privacy-policy" className="text-[#ff5500] hover:underline">
                  HubSpot Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>HubSpot LiveChat:</strong> Für Live-Chat. Datenschutzerklärung unter{' '}
                <a href="https://legal.hubspot.com/de/privacy-policy" className="text-[#ff5500] hover:underline">
                  HubSpot LiveChat Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Typeform:</strong> Für Fragebögen und Formulare. Datenschutzerklärung unter{' '}
                <a href="https://admin.typeform.com/to/dwk6gt" className="text-[#ff5500] hover:underline">
                  Typeform Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Meta Pixel:</strong> Für Analyse. Datenschutzerklärung unter{' '}
                <a href="https://www.facebook.com/policy.php" className="text-[#ff5500] hover:underline">
                  Facebook Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Google Analytics:</strong> Für Analyse. Datenschutzerklärung unter{' '}
                <a href="https://policies.google.com/privacy?hl=de" className="text-[#ff5500] hover:underline">
                  Google Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Google Conversion Tag:</strong> Für Konvertierungs-Tracking. Datenschutzerklärung unter{' '}
                <a href="https://support.google.com/tagmanager/answer/9323295?hl=de&ref_topic=3441532" className="text-[#ff5500] hover:underline">
                  Google Conversion Tag Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>TikTok Pixel:</strong> Für Analyse und Werbung. Datenschutzerklärung unter{' '}
                <a href="https://www.tiktok.com/legal/privacy-policy?lang=de" className="text-[#ff5500] hover:underline">
                  TikTok Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>YouTube Videos:</strong> Für Videos. Datenschutzerklärung unter{' '}
                <a href="https://policies.google.com/privacy" className="text-[#ff5500] hover:underline">
                  YouTube Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Facebook Conversion API:</strong> Für Analyse. Datenschutzerklärung unter{' '}
                <a href="https://www.facebook.com/policy.php" className="text-[#ff5500] hover:underline">
                  Facebook Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Google Tag Manager:</strong> Für Analyse und Werbung. Datenschutzerklärung unter{' '}
                <a href="https://policies.google.com/privacy?hl=de" className="text-[#ff5500] hover:underline">
                  Google Tag Manager Datenschutzerklärung
                </a>
                .
              </li>
              <li>
                <strong>Facebook Custom Audiences:</strong> Für Werbung. Datenschutzerklärung unter{' '}
                <a href="https://www.facebook.com/policy.php" className="text-[#ff5500] hover:underline">
                  Facebook Datenschutzerklärung
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Datenverarbeitung auf Social Media-Plattformen
            </h2>
            <p className="text-gray-300 mb-4">
              Wir sind in Social Media-Netzwerken vertreten, um unsere Organisation und unsere Leistungen vorzustellen. Die Betreiber
              dieser Netzwerke verarbeiten Daten ihrer Nutzer zu Werbezwecken und erstellen Nutzerprofile. Weitere Informationen sowie
              Hinweise zum Widerspruch finden Sie in den Datenschutzerklärungen der jeweiligen Betreiber.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.1. Facebook</h3>
            <p className="text-gray-300 mb-4">
              Wir unterhalten ein Profil auf Facebook. Betreiber ist Meta Platforms Ireland Ltd. Weitere Informationen entnehmen Sie der
              Datenschutzerklärung von Facebook. Über die Einstellungen für Werbeanzeigen können Nutzer der Datenverarbeitung widersprechen.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.2. Instagram</h3>
            <p className="text-gray-300 mb-4">
              Wir unterhalten ein Profil auf Instagram. Betreiber ist Meta Platforms Ireland Ltd. Weitere Informationen entnehmen Sie der
              Datenschutzerklärung von Instagram.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.3. Tiktok</h3>
            <p className="text-gray-300 mb-4">
              Wir unterhalten ein Profil auf Tiktok. Betreiber ist TikTok Technology Limited. Weitere Informationen entnehmen Sie der
              Datenschutzerklärung von Tiktok.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.4. YouTube</h3>
            <p className="text-gray-300 mb-4">
              Wir unterhalten ein Profil auf YouTube. Betreiber ist Google Ireland Limited. Weitere Informationen entnehmen Sie der
              Datenschutzerklärung von YouTube.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.5. LinkedIn</h3>
            <p className="text-gray-300 mb-4">
              Wir unterhalten ein Profil auf LinkedIn. Betreiber ist LinkedIn Ireland Unlimited Company. Weitere Informationen entnehmen Sie
              der Datenschutzerklärung von LinkedIn.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Bereitstellung des Onlineangebotes
            </h2>
            <p className="text-gray-300 mb-4">
              Für die Bereitstellung unseres Onlineangebotes setzen wir den Dienstleister Perspective ein. Perspective speichert
              die Daten ausschließlich auf europäischen Servern. Es kann jedoch vorkommen, dass Ihre Daten für Einrichtungen in den
              USA zugänglich sind, da Perspective Unterverarbeiter in den USA einsetzt. Für die Datenübermittlung in die USA werden
              zusätzliche Maßnahmen und Garantien gemäß DSGVO getroffen.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              I. Beschreibung und Umfang der Datenverarbeitung
            </h3>
            <p className="text-gray-300 mb-4">
              Perspective verarbeitet Ihre Daten, damit wir Ihnen unsere Online-Dienste bereitstellen können. Hierzu wird
              automatisch Ihre IP-Adresse übermittelt, um Inhalte und Funktionen an Ihr Endgerät zu senden.
            </p>
            <p className="text-gray-300 mb-4">Folgende Daten können erhoben werden:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Internet-Service-Provider</li>
              <li>IP-Adresse des Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen Sie auf unsere Seite kamen („Referrer“)</li>
            </ul>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              II. Rechtsgrundlage für die Datenverarbeitung
            </h3>
            <p className="text-gray-300 mb-4">
              Perspective speichert die oben genannten Daten in Logfiles, um einen reibungslosen Verbindungsaufbau der Website,
              deren Stabilität und Sicherheit sowie administrative Zwecke zu gewährleisten. Die Speicherung der IP-Adresse ist
              für die Auslieferung der Website während der Sitzung notwendig. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">III. Dauer der Verarbeitung</h3>
            <p className="text-gray-300 mb-4">
              Die personenbezogenen Daten werden gelöscht, sobald sie für den Erfüllungszweck nicht mehr benötigt werden:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Bei Sitzungserfassung: nach Beendigung der Sitzung</li>
              <li>Bei Logfiles: spätestens nach 7 Tagen</li>
            </ul>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">IV. Betroffenenrechte</h3>
            <p className="text-gray-300 mb-4">
              Sie haben das Recht auf Auskunft, Berichtigung, Sperrung oder Löschung Ihrer Daten. Zudem können Sie der Verarbeitung widersprechen,
              sofern Ihre besondere Situation dem entgegensteht. Wenden Sie sich hierfür an die im Impressum angegebenen Kontaktdaten.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-gray-300 mb-4">
              Wir behalten uns das Recht vor, diese Datenschutzerklärung künftig zu ändern. Die jeweils aktuelle Version ist stets hier verfügbar.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">7. Fragen und Kommentare</h2>
            <p className="text-gray-300 mb-4">
              Für Fragen oder Kommentare zur Datenschutzerklärung stehen wir Ihnen unter den im Impressum angegebenen Kontaktdaten zur Verfügung.
            </p>
          </section>

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
