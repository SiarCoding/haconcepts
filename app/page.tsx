import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import { MovingLogos } from '@/components/ui/moving-cards'
import Script from 'next/script';

export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

// Optimized Dynamic Imports with preload hints
const PainPoints = dynamic(() => import('@/components/PainPoints'), { 
  loading: () => <div className="w-full h-96 bg-black animate-pulse" />
});

const Solutions = dynamic(() => import('@/components/Solutions'), { 
  loading: () => <div className="w-full h-screen bg-black animate-pulse" />
});

const FlipWebsites = dynamic(() => import('@/components/unsere-loesung/flip-websites'), { 
  loading: () => <div className="w-full h-screen bg-black animate-pulse" />
});

const FailureReasons = dynamic(() => import('@/components/FailureReasons'), { 
  loading: () => <div className="w-full h-96 bg-black animate-pulse" />
});

const TestimonialVideo = dynamic(() => import('@/components/TestimonialVideo'), { 
  loading: () => <div className="w-full h-96 bg-black animate-pulse" />
});

const AdsDesign = dynamic(() => import('@/components/AdsDesign'), { 
  loading: () => <div className="w-full h-96 bg-black animate-pulse" />
});

const CaseStudySection = dynamic(() => import('@/components/CaseStudySection'), { 
  loading: () => <div className="w-full h-96 bg-white animate-pulse" />
});

// Further delayed components
const Team = dynamic(() => import('@/components/Team'));
const Timeline = dynamic(() => import('@/components/Timeline'));
const WhyUs = dynamic(() => import('@/components/WhyUs'));
const CTA = dynamic(() => import('@/components/CTA'));
const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'));
const Questions = dynamic(() => import('@/components/Questions'));
const Footer = dynamic(() => import('@/components/Footer'));
const NextMove = dynamic(() => import('@/components/NextMove'));
const BusinessSection = dynamic(() => import('@/components/BusinessSection'));

export const metadata: Metadata = {
  title: 'NextMove Digital | Leads für Finanzberater & Immobilienmakler',
  description: 'Professionelle Lead-Generierung für Finanzberater und Immobilienmakler. Qualifizierte Kunden durch Performance Marketing und Social Media Ads.',
  keywords: 'Leads für Finanzberater ohne Google Ads, organische Leads Immobilienmakler, Performance Marketing Finanzbranche, Social Media Leads, Lead-Generierung ohne Werbebudget, Finanzberater Neukundengewinnung, Immobilienmakler Leads organisch',
  alternates: {
    canonical: 'https://www.nextmove-digital.de/',
  },
};

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NextMove Digital",
            "url": "https://nextmove-digital.de",
            "logo": "https://nextmove-digital.de/CONSULTING.svg",
            "description": "Spezialisiert auf Lead-Generierung für Finanzberater und Immobilienmakler ohne Google Ads",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Papenstraße 23",
              "addressLocality": "Hamburg",
              "postalCode": "22089",
              "addressCountry": "DE"
            },
            "telephone": "+491795914490",
            "email": "info@nextmove-digital.de",
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.linkedin.com/company/nextmove-consulting",
              "https://www.instagram.com/nextmove_consulting",
              "https://www.facebook.com/nextmove-digital"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 53.5511,
                "longitude": 9.9937
              },
              "geoRadius": "1000"
            },
            "knowsAbout": [
              "Lead-Generierung für Finanzberater",
              "Performance Marketing",
              "Social Media Ads",
              "Organische Leads ohne Google Ads",
              "Digitales Marketing für Finanzbranche"
            ]
          }
        `}
      </Script>

      <Header />

      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section - erster Inhalt nach Header */}
        <div className="relative">
          <Hero />
        </div>

        <MovingLogos />
        <FailureReasons />
        <BusinessSection />


        {/* Übergang zwischen PainPoints und Solutions */}
        <div className="relative">
          <PainPoints />
          <TestimonialVideo />
          {/* Solutions enthält intern ein H1-Element in der Sticky-Überschrift. Das wird durch H2 ersetzt, um nur eine H1 auf der Seite zu haben. */}
          <Solutions />
        </div>
        <AdsDesign />
        <FlipWebsites />
        <CaseStudySection />
        <NextMove />
        <Team />
        <Timeline />
        <WhyUs />
        <CTA />
        <CalendlyWidget />
        <Questions />
        <Footer />
      </main>
    </>
  );
}
