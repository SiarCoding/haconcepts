import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import Timeline from '@/components/Timeline';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import { MovingLogos } from '@/components/ui/moving-cards'
import SocialProof from '@/components/SocialProof';
import Questions from '@/components/Questions';
import LampTransition from '@/components/LampTransition';
import FailureReasons from '@/components/FailureReasons';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'NextMove Consulting | Leads für Finanzberater ohne Google Ads | Performance Marketing',
  description: 'Spezialisierte Lead-Generierung für Finanzberater und Immobilienmakler. Gewinnen Sie qualifizierte Kunden durch organisches Performance Marketing und Social Media Ads ohne hohe Werbekosten.',
  keywords: 'Leads für Finanzberater ohne Google Ads, organische Leads Immobilienmakler, Performance Marketing Finanzbranche, Social Media Leads, Lead-Generierung ohne Werbebudget, Finanzberater Neukundengewinnung, Immobilienmakler Leads organisch',
  alternates: {
    canonical: '/',
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
            "name": "NextMove Consulting",
            "url": "https://nextmoveconsulting.de",
            "logo": "https://nextmoveconsulting.de/CONSULTING.svg",
            "description": "Spezialisiert auf Lead-Generierung für Finanzberater und Immobilienmakler ohne Google Ads",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kedenburgstraße 44",
              "addressLocality": "Hamburg",
              "postalCode": "22043",
              "addressCountry": "DE"
            },
            "telephone": "+4930123456789",
            "email": "info@nextmove-consulting.de",
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.linkedin.com/company/nextmove-consulting",
              "https://www.instagram.com/nextmove_consulting",
              "https://www.facebook.com/nextmoveconsulting"
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
      <main className="flex min-h-screen flex-col bg-black">
        {/* Container mit leicht negativem Margin für Hero */}
        <div className="-space-y-4 sm:-space-y-6 md:-space-y-8">
          <Header />
          <Hero />
        </div>
        <MovingLogos />
        <PainPoints />
        <LampTransition />
        <Solutions />
        <SocialProof />
        <FailureReasons />
        <Timeline />
        <Testimonials />
        <WhyUs />
        <CTA />
        <Questions />
        <Footer />
        <WhatsAppChat />
      </main>
    </>
  );
}