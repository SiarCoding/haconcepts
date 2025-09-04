import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import { MovingLogos } from '@/components/ui/moving-cards'
import { JsonLd, schemas } from '@/components/SEO/JsonLd';

export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

// Dynamisches Laden für Komponenten "below the fold"
const PainPoints = dynamic(() => import('@/components/PainPoints'));
const Solutions = dynamic(() => import('@/components/Solutions'));
const FlipWebsites = dynamic(() => import('@/components/unsere-loesung/flip-websites'));
const SocialMediaContent = dynamic(() => import('@/components/SocialMediaContent'));
const FailureReasons = dynamic(() => import('@/components/FailureReasons'));
const Team = dynamic(() => import('@/components/Team'));
const Timeline = dynamic(() => import('@/components/Timeline'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const TestimonialVideo = dynamic(() => import('@/components/TestimonialVideo'));
const WhyUs = dynamic(() => import('@/components/WhyUs'));
const CTA = dynamic(() => import('@/components/CTA'));
const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'));
const Questions = dynamic(() => import('@/components/Questions'));
const Footer = dynamic(() => import('@/components/Footer'));
const NextMove = dynamic(() => import('@/components/NextMove'));
const BusinessSection = dynamic(() => import('@/components/BusinessSection'));
const CaseStudySection = dynamic(() => import('@/components/CaseStudySection'));
const AdsDesign = dynamic(() => import('@/components/AdsDesign'));

export const metadata: Metadata = {
  title: 'NextMove Digital | Lead-Generierung für Finanzberater & Immobilienmakler DACH',
  description: 'Performance Marketing für Finanzberater und Immobilienmakler in Deutschland, Österreich und der Schweiz. Qualifizierte Leads ohne hohe Werbekosten.',
  alternates: {
    canonical: 'https://nextmove-digital.de',
    languages: {
      'de-DE': 'https://nextmove-digital.de/de',
      'de-AT': 'https://nextmove-digital.de/at',
      'de-CH': 'https://nextmove-digital.de/ch'
    }
  },
  openGraph: {
    title: 'NextMove Digital | Lead-Generierung DACH',
    description: 'Performance Marketing für Finanzberater und Immobilienmakler in Deutschland, Österreich und der Schweiz.',
    url: 'https://nextmove-digital.de',
    siteName: 'NextMove Digital',
    locale: 'de_DE',
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemas.organization} id="organization" />
      
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
