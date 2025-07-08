"use client";
import React, { useState } from "react";
import { TestimonialCard } from "./testimonial-cards";
import { MoveLeft, MoveRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial: "Wir generieren täglich qualifizierte Leads mit Nextmove Consulting. Mehr Termine, mehr Abschlüsse und ein signifikantes Wachstum unseres Geschäfts.",
    author: "Michael Schürdt",
    avatar: "/P1039493.jpg",
    role: "Kapitalanlage-Berater"
  },
  {
    id: 2,
    testimonial: "Mehr als 40 Anfragen in den ersten Wochen! 16 neue Besichtigungstermine und eine Reichweite von über 160.000 Konten.",
    author: "Jens Freyer",
    avatar: "/P1039309.jpg",
    role: "Freyer Immobilien"
  },
  {
    id: 3,
    testimonial: "Innerhalb der ersten 3 Wochen konnten wir bereits mithilfe von NextMove Consulting über 100 Leads generieren.",
    author: "Azim Chowdhury",
    avatar: "/azim.png",
    role: "CD Immoportfolio GmbH"
  },
  {
    id: 4,
    testimonial: "Die Zusammenarbeit hat unsere Erwartungen übertroffen. Professionell, zielgerichtet und mit messbaren Ergebnissen.",
    author: "Alexander Banzhaf",
    avatar: "/banzhaf.jpeg",
    role: "Banzhaf Immobilien"
  },
  {
    id: 5,
    testimonial: "Endlich ein Partner, der die Immobilienbranche versteht. Die Lead-Qualität ist hervorragend.",
    author: "Alexander Kedro",
    avatar: "/kedro.jpeg",
    role: "Kedro Immobilien"
  }
];

const positions = ["front", "second", "third", "fourth", "fifth"] as const;

export default function Testimonials() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const handleShuffle = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[600px] py-20 bg-black">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-center max-w-[90vw] sm:max-w-none text-white mb-20">
        Was unsere
        <div className="relative inline-block mx-2">
          <span className="relative z-10">Kunden</span>
          <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
        </div>
        <span className="block sm:inline">sagen</span>
      </h2>
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[480px] mx-auto">
        {order.map((idx, i) => (
          <TestimonialCard
            key={testimonials[idx].id}
            handleShuffle={handleShuffle}
            testimonial={testimonials[idx].testimonial}
            position={positions[i]}
            id={testimonials[idx].id}
            author={testimonials[idx].author}
            avatar={testimonials[idx].avatar}
            role={testimonials[idx].role}
          />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center text-white/50 space-x-4">
        <MoveLeft className="w-6 h-6" />
        <span className="text-sm font-medium uppercase tracking-widest">
          Wischen zum Entdecken
        </span>
        <MoveRight className="w-6 h-6" />
      </div>
    </section>
  );
}