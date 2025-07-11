'use client';

import React from 'react';
import { motion } from 'framer-motion';

const videoTestimonials = [
  {
    id: 1,
    name: "Michael Schürdt",
    company: "Kapitalanlage-Berater",
    videoSrc: "https://play.gumlet.io/embed/6827315c105cb03a34441df5?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
  },
  {
    id: 2,
    name: "Jens Freyer",
    company: "Freyer Immobilien",
    // HINWEIS: Bitte ersetzen Sie diesen Link durch Ihre zweite Video-URL
    videoSrc: "https://play.gumlet.io/embed/6838f13e71151e6b584f492d?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false",
  }
];

export default function TestimonialVideo() {
  return (
    <section className="relative bg-black py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[120px] animate-pulse-orange"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 filter blur-[120px] animate-pulse-orange" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-montserrat">
            Erfolge in <span className="relative">
              <span className="relative z-10 text-[#ff5500]">Bewegtbild</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto font-inter">
            Sehen Sie selbst, wie unsere Partner durch die Zusammenarbeit mit uns ihre Ziele erreichen und übertreffen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    loading="lazy"
                    title={`Gumlet video player for ${testimonial.name}`}
                    src={testimonial.videoSrc}
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 