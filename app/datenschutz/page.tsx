'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-[#ff5500] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Impressum dieser Website entnehmen.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Wie erfassen wir Ihre Daten?</h4>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, 
            die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
            Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung 
            dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Wofür nutzen wir Ihre Daten?</h4>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
            zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu 
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit 
            für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der 
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der 
            zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="mb-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen 
            Adresse an uns wenden.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
          <p className="mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Externes Hosting</h3>
          <p className="mb-4">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf 
            den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und 
            Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website 
            generiert werden, handeln.
          </p>
          <p className="mb-4">
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden 
            (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres 
            Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende 
            Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO 
            und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im 
            Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit 
            widerrufbar.
          </p>
          <p className="mb-4">
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich 
            ist und unsere Weisungen in Bezug auf diese Daten befolgen.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
            Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mb-4">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
            mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
            erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p className="mb-4">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken 
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="mb-4 space-y-1">
            <p>Ali Alizadah</p>
            <p>Nextmove Consulting</p>
            <p>Kedenburger Straße 44</p>
            <p>22043 Hamburg</p>
            <p>Telefon: +49 30 123 456 789</p>
            <p>E-Mail: info@nextmove-consulting.de</p>
          </div>
          <p className="mb-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke 
            und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Cookies</h3>
          <p className="mb-4">
            Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät 
            keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
            (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. 
            Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung 
            durch Ihren Webbrowser erfolgt.
          </p>
          <p className="mb-4">
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). 
            Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten 
            (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="mb-4">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne 
            diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur 
            Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p className="mb-4">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen 
            erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des 
            Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, 
            sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der 
            Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern 
            eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt 
            die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); 
            die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
            Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
            Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
            dieser Website eingeschränkt sein.
          </p>
          <p className="mb-4">
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Analyse-Tools und Werbung</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Google Analytics</h3>
          <p className="mb-4">
            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited 
            ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mb-4">
            Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält 
            der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und 
            Herkunft des Nutzers. Diese Daten werden dem jeweiligen Endgerät des Users zugeordnet. Eine Zuordnung zu einer User-ID 
            erfolgt nicht.
          </p>
          <p className="mb-4">
            Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner 
            verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt 
            Machine-Learning-Technologien bei der Datenanalyse ein.
          </p>
          <p className="mb-4">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 
            TTDSG. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
            <Link href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-[#ff5500] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              https://privacy.google.com/businesses/controllerterms/mccs/
            </Link>
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Plugins und Tools</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Google Fonts</h3>
          <p className="mb-4">
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt 
            werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten 
            korrekt anzuzeigen.
          </p>
          <p className="mb-4">
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt 
            Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt 
            auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen 
            Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die 
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung 
            die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im 
            Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
          </p>
          <p className="mb-4">
            Weitere Informationen zu Google Fonts finden Sie unter 
            <Link href="https://developers.google.com/fonts/faq" className="text-[#ff5500] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              https://developers.google.com/fonts/faq
            </Link> 
            und in der Datenschutzerklärung von Google: 
            <Link href="https://policies.google.com/privacy?hl=de" className="text-[#ff5500] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy?hl=de
            </Link>
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 