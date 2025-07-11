"use client";
import React from "react";

import Image from "next/image";

const AdsDesign = () => {
  return (
    <section className="relative w-screen overflow-hidden flex flex-col items-center justify-center bg-black py-20 sm:py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 text-center z-10 mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-8">
          Performance Marketing auf allen Kanälen
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Wir schalten Werbung auf den Plattformen, die für Ihr Unternehmen am
          relevantesten sind, um maximale Ergebnisse zu erzielen.
        </p>
      </div>
      <div className="w-full">
        <Image
          src="/nextmove give small.gif"
          alt="Performance Marketing GIF"
          width={1920}
          height={1080}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </section>
  );
};

export default AdsDesign;
