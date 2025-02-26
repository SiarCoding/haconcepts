import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppChat from '@/components/WhatsAppChat';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NMC | Nextmove Consulting - Leadgenerierung für Immobilienmakler & Finanzberater',
  description: 'Nextmove Consulting generiert qualifizierte Leads für Immobilienmakler und Finanzberater mit nachweisbarem ROI. KI-gestützte Vertriebsstrategien und digitales Marketing für mehr Kunden und Umsatz.',
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
    'Immobilien Social Media Marketing'
  ],
  authors: [{ name: 'Ali Alizadah', url: 'https://nextmove-consulting.de' }],
  creator: 'Nextmove Consulting',
  publisher: 'Nextmove Consulting',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nextmove-consulting.de',
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
              url: 'https://nextmove-consulting.de',
              logo: 'https://nextmove-consulting.de/CONSULTING.svg',
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
              areaServed: 'DE',
              serviceType: 'Digitales Marketing und Leadgenerierung'
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
