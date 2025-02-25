'use client';

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

export default function Home() {
  return (
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
  );
}