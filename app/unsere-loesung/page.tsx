import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const ObjectMarketingHero = dynamic(() => import('@/components/unsere-loesung/ObjectMarketingHero'));
const PremiumServices = dynamic(() => import('@/components/unsere-loesung/PremiumServices'));
const TechnologyShowcase = dynamic(() => import('@/components/unsere-loesung/TechnologyShowcase'));
const FlipWebsites = dynamic(() => import('@/components/unsere-loesung/flip-websites'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'Unsere Lösung - NextMove Consulting | Premium Objektvermarktung & Drohnenaufnahmen',
  description: 'Professionelle Objektvermarktung mit Drohnenaufnahmen, 4K-Videografie, 360° Virtual Tours und High-End Fotografie. Hollywood-Qualität für Ihre Immobilien.',
  keywords: 'Drohnenaufnahmen Immobilien, Objektfotografie, Virtual Tours, 4K Immobilienvideo, Luftbildaufnahmen, Immobilien Marketing, Professional Real Estate Photography',
  alternates: {
    canonical: '/unsere-loesung',
  },
};

export default function UnsereLoesung() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden max-w-full pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section für Objektvermarktung */}
        <div className="relative">
          <ObjectMarketingHero />
        </div>
        
        {/* Website Showcase */}
        <FlipWebsites />
        
        {/* Premium Services Overview */}
        <div className="relative">
          <PremiumServices />
        </div>

        {/* Technology Showcase */}
        <TechnologyShowcase />
        
        {/* Call to Action */}
        <CTA />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}