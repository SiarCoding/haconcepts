import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppChat from '@/components/WhatsAppChat';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NMC | Nextmove Consulting - Leadgenerierung für Immobilienmakler & Finanzberater',
  description: 'Nextmove Consulting generiert qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI. KI-gestützte Vertriebsstrategien und digitales Marketing für mehr Kunden und Umsatz. Hamburg & bundesweit.',
  keywords: [
    'Leadgenerierung Immobilienmakler', 
    'Leads Finanzberater', 
    'Immobilien Marketing', 
    'KI Vertriebsstrategien', 
    'Digitale Leadgenerierung', 
    'Immobilien Leads', 
    'Qualifizierte Leads Immobilien', 
    'LinkedIn Automation Immobilien', 
    'Facebook Werbung Immobilienmakler', 
    'Digitales Marketing Immobilien',
    'Immobilienmakler Leads generieren',
    'Finanzberater Kunden gewinnen',
    'Nextmove Consulting',
    'Immobilien Vertrieb optimieren',
    'Kapitalanleger Leads',
    'Immobilienmakler Hamburg',
    'Finanzberater Neukundengewinnung',
    'Performance Marketing Immobilien',
    'Immobilien Leads kaufen',
    'Makler Leads',
    'Immobilienmakler mehr Kunden',
    'Finanzberater Leadgenerierung',
    'ROI Immobilienmarketing',
    'Immobilienmakler Digitalisierung',
    'Immobilien Social Media Marketing',
    'Immobilienmarketing Hamburg',
    'Immobilienmakler Marketingagentur',
    'Online Marketing Immobilienmakler',
    'Immobilienmakler Kunden gewinnen digital',
    'Lead Akquise Immobilienmakler'
  ],
  authors: [{ name: 'Ali Alizadah', url: 'https://nextmoveconsulting.de' }],
  creator: 'Nextmove Consulting',
  publisher: 'Nextmove Consulting',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nextmoveconsulting.de',
    title: 'Nextmove Consulting - Leadgenerierung für Immobilienmakler & Finanzberater',
    description: 'Wir generieren qualifizierte Leads für Finanzberater und Immobilien-Profis mit nachweisbarem ROI',
    siteName: 'Nextmove Consulting',
    images: [
      {
        url: 'https://nextmove-consulting.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nextmove Consulting - Leadgenerierung für Immobilienmakler & Finanzberater'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextmove Consulting - Leadgenerierung für Immobilienmakler',
    description: 'Wir generieren qualifizierte Leads für Finanzberater und Immobilien-Profis mit nachweisbarem ROI',
    creator: '@nextmoveconsult',
    images: ['https://nextmove-consulting.de/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nextmove-consulting.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="Ihr-Google-Verifizierungscode" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nextmove Consulting',
              url: 'https://nextmoveconsulting.de',
              logo: 'https://nextmoveconsulting.de/CONSULTING.svg',
              description: 'Nextmove Consulting generiert qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+4930123456789',
                contactType: 'customer service',
                areaServed: 'DE',
                availableLanguage: ['German', 'English'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kedenburger Straße 44',
                addressLocality: 'Hamburg',
                postalCode: '22043',
                addressCountry: 'DE',
              },
              sameAs: [
                'https://www.facebook.com/nextmoveconsulting',
                'https://www.instagram.com/nextmoveconsulting',
                'https://www.linkedin.com/company/nextmoveconsulting',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Leadgenerierung für Immobilienmakler und Finanzberater',
              provider: {
                '@type': 'Organization',
                name: 'Nextmove Consulting'
              },
              description: 'Qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI durch KI-gestützte Vertriebsstrategien.',
              areaServed: {
                '@type': 'Country',
                name: 'Deutschland'
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Immobilienmakler, Finanzberater, Immobilienprofis'
              },
              serviceType: 'Digitales Marketing und Leadgenerierung'
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Wie generiere ich als Immobilienmakler effektiv neue Leads?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Erfolgreiche Leadgenerierung für Immobilienmakler basiert heute auf mehreren Säulen: Erstens, nutzen Sie Social Media-Plattformen wie Facebook und Instagram für zielgerichtete Anzeigen. Zweitens, optimieren Sie Ihre Online-Präsenz mit einer professionellen Website und SEO. Drittens, setzen Sie auf Content-Marketing mit Mehrwert für potenzielle Kunden. Bei professioneller Umsetzung sehen unsere Kunden oft schon nach 2-3 Wochen die ersten qualifizierten Leads, mit deutlicher Steigerung nach 4-6 Wochen dank kontinuierlicher Datenoptimierung.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie verkaufe ich meine Immobilien schneller und zu besseren Preisen?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Für schnellere Immobilienverkäufe zu besseren Preisen sind drei Faktoren entscheidend: Erstens, eine professionelle Präsentation mit hochwertigen Fotos, Videos und virtuellen Rundgängen. Zweitens, eine präzise Preisgestaltung basierend auf Marktanalysen. Drittens, die gezielte Ansprache der richtigen Käuferzielgruppe über digitale Kanäle. Unsere spezialisierten Marketingstrategien helfen Immobilienprofis, genau die Käufer zu erreichen, die aktiv nach Ihren Angeboten suchen, was zu schnelleren Abschlüssen und besseren Konditionen führt.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie gewinne ich als Finanzberater qualifizierte Neukunden?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die Neukundengewinnung für Finanzberater erfordert heute eine strategische digitale Präsenz: Erstens, setzen Sie auf LinkedIn für die B2B-Leadgenerierung mit gezieltem Content und Networking. Zweitens, nutzen Sie personalisierte E-Mail-Kampagnen mit wertvollen Finanzinformationen. Drittens, etablieren Sie sich als Experte durch Webinare und digitale Beratungsangebote. Unsere Kunden profitieren von einem transparenten Reporting-System, das genau zeigt, welche Strategien die besten Leads generieren.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Was kostet professionelle Leadgenerierung für Immobilienmakler?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Für effektive Leadgenerierung im Immobilienbereich empfehlen wir ein Werbebudget von mindestens 2.000€ monatlich plus unsere Betreuungsgebühr. Diese Investition rentiert sich schnell: Ein einziger erfolgreicher Immobilienabschluss bringt Ihnen ein Vielfaches davon ein. Unsere Kunden erzielen durchschnittlich 30-50 qualifizierte Leads pro Monat, was zu 5-10 Besichtigungsterminen und 1-3 Abschlüssen führt.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie steigere ich meine Sichtbarkeit als Immobilienmakler im Internet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Die digitale Sichtbarkeit für Immobilienmakler lässt sich durch mehrere Strategien deutlich erhöhen: Erstens, lokale SEO-Optimierung Ihrer Website für relevante Suchbegriffe in Ihrer Region. Zweitens, regelmäßige Erstellung von hochwertigem Content zu Immobilienthemen. Drittens, aktives Management Ihrer Google Business-Präsenz mit Kundenbewertungen. Viertens, strategisches Social-Media-Marketing auf Instagram und Facebook.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Wie nutze ich LinkedIn erfolgreich für die Kundenakquise?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'LinkedIn ist heute eines der effektivsten Tools für B2B-Leadgenerierung, besonders für Finanz- und Immobilienprofis. Erfolgreiche Strategien umfassen: Erstens, die Optimierung Ihres persönlichen Profils mit Fokus auf Kundennutzen. Zweitens, gezieltes Content-Marketing mit Branchenexpertise. Drittens, systematisches Networking mit Ihrer Zielgruppe. Viertens, automatisierte aber personalisierte Kontaktanfragen. Unsere LinkedIn-Automation-Lösungen ermöglichen es Ihnen, täglich 20-30 qualifizierte Kontakte zu knüpfen.'
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://nextmoveconsulting.de'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Leistungen',
                  item: 'https://nextmoveconsulting.de/leistungen'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Kontakt',
                  item: 'https://nextmoveconsulting.de/kontakt'
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Nextmove Consulting',
              image: 'https://nextmoveconsulting.de/CONSULTING.svg',
              '@id': 'https://nextmoveconsulting.de',
              url: 'https://nextmoveconsulting.de',
              telephone: '+4930123456789',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kedenburger Straße 44',
                addressLocality: 'Hamburg',
                postalCode: '22043',
                addressCountry: 'DE'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.587, 
                longitude: 10.079
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '09:00',
                closes: '18:00'
              },
              priceRange: '€€'
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollProgress className="bg-gradient-to-r from-[#ff5500] via-[#ff8040] to-[#ff5500]" />
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
