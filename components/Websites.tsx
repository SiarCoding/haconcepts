"use client";

import React from 'react';
import InteractiveSelector from '@/components/ui/website-selector';

const Websites = () => {
  const websiteOptions = [
    {
      title: "CD-Immobilien",
      description: "cd-immo.de",
      image: "/azim-webdesign.png",
      link: "https://cd-immo.de"
    },
    {
      title: "Freyer Immobillien",
      description: "freyer.immo",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80",
      link: "https://freyer.immo"
    },
    {
      title: "HMS Finance",
      description: "hmsfinance.de",
      image: "/hmsfinance.png",
      link: "https://hmsfinance.de"
    },
    {
      title: "Kedro Immobilien",
      description: "kedro-immobilien.de",
      image: "/kedro1.png",
      link: "https://kedro-immobilien.de"
    }
  ];

  return (
    <section className="bg-black">
        <InteractiveSelector 
            options={websiteOptions}
            headline="Einblicke in unsere Arbeit"
            subheadline="Wir gestalten nicht nur Webseiten, wir schaffen digitale Erlebniswelten, die konvertieren und begeistern. Hier sind einige unserer jüngsten Projekte."
        />
    </section>
  );
};

export default Websites; 