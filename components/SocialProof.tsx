'use client';

import { Carousel } from '@/components/ui/carousel';

const slides = [
  {
    title: "Gerade in Berlin: 520.000€ MFH-Anfrage",
    button: "Details ansehen",
    src: "/leads/berlin-lead.jpg"
  },
  {
    title: "⭐️ 4.98/5 auf Trustpilot",
    button: "Bewertungen ansehen",
    src: "/social/trustpilot.jpg"
  },
  {
    title: "11:32h täglich eingesparte Bearbeitungszeit",
    button: "Mehr erfahren",
    src: "/stats/time-saved.jpg"
  },
  {
    title: "Kundenstimme: 'Beste Entscheidung 2024'",
    button: "Video abspielen",
    src: "/social/linkedin-review.jpg"
  }
];

export default function SocialProof() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal">
            Über
            <span className="relative mx-2">
              <span className="relative z-10">23 Mio. €</span>
              <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
            </span>
            <br />
            Maklerprovisionen in 2024 generiert
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
} 