'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGraphUpArrow, BsEyeFill, BsPeopleFill, BsCurrencyEuro, BsLightning, BsCheckCircleFill } from 'react-icons/bs';

const StatItem = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
  <div className="flex items-start text-left">
    <Icon className="w-5 h-5 text-[#ff5500] mr-3 flex-shrink-0 mt-1.5" />
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-white leading-none">{value}</div>
      <div className="text-sm sm:text-base text-white/80 mt-1">{label}</div>
    </div>
  </div>
);

const CaseStudySection = () => {
  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const stats1 = [
    { value: '100+', label: 'Qualifizierte Leads', icon: BsPeopleFill },
    { value: '200k+', label: 'Impressionen', icon: BsEyeFill },
    { value: '70k', label: 'Reichweite', icon: BsGraphUpArrow },
    { value: '10€', label: 'Lead-Preis', icon: BsCurrencyEuro },
    { value: '70', label: 'Pre-Qualifiziert', icon: BsCheckCircleFill },
    { value: '30', label: 'Tage', icon: BsLightning },
  ];

  const stats2 = [
    { value: '150+', label: 'Qualifizierte Leads', icon: BsPeopleFill },
    { value: '300k+', label: 'Impressionen', icon: BsEyeFill },
    { value: '120k', label: 'Reichweite', icon: BsGraphUpArrow },
    { value: '8€', label: 'Lead-Preis', icon: BsCurrencyEuro },
    { value: '90%', label: 'Pre-Qualifiziert', icon: BsCheckCircleFill },
    { value: '45', label: 'Tage', icon: BsLightning },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Orange Blur Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="blur-xl md:blur-2xl filter opacity-10 md:opacity-15 w-full h-full" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M135.205 112.719C17.1445 64.6648 -28.2636 -70.487 -76.3175 47.574C-124.371 165.635 107.858 481.381 225.919 529.435C343.98 577.488 303.165 339.654 351.219 221.593C399.273 103.532 253266 160.773 135.205 112.719Z" fill="url(#orange-gradient-bg)" />
          <defs>
            <linearGradient id="orange-gradient-bg" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff8040" />
              <stop offset="100%" stopColor="#ff5500" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Additional floating blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/5 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full bg-orange-500/10 blur-2xl md:blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        
        {/* H1 Title like Team/WhyUs - centered */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Unsere <span className="text-[#ff5500]">Erfolgsgeschichten</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-6 lg:mt-8 max-w-3xl mx-auto">
            Sehen Sie, wie unsere Content-Marketing-Reels messbare Ergebnisse für unsere Kunden generiert haben
          </p>
        </motion.div>

        {/* First Row: Card Left, GIF Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          
          {/* Left Card - First Case Study */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Orange Blur Effect behind Card */}
            <div className="absolute -inset-8 pointer-events-none z-0">
              <svg className="blur-xl md:blur-2xl filter opacity-10 md:opacity-15 w-full h-full" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.205 112.719C17.1445 64.6648 -28.2636 -70.487 -76.3175 47.574C-124.371 165.635 107.858 481.381 225.919 529.435C343.98 577.488 303.165 339.654 351.219 221.593C399.273 103.532 253.266 160.773 135.205 112.719Z" fill="url(#orange-gradient-card1)" />
                <defs>
                  <linearGradient id="orange-gradient-card1" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff8040" />
                    <stop offset="100%" stopColor="#ff5500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] transition-all duration-500 ease-out overflow-hidden z-10">
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  Von 0 auf <span className="text-[#ff5500]">100 Leads</span> in{' '}
                  <span className="relative inline-block">
                    30 Tagen
                    <span className="absolute bottom-[-6px] md:bottom-[-5px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]/40" />
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                  Dieses Content-Marketing-Reel generierte für Azim hochqualifizierte Immobilien-Leads für nur 10€ pro Stück und revolutionierte sein Business.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {stats1.map((stat, index) => (
                  <StatItem key={index} value={stat.value} label={stat.label} icon={stat.icon} />
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={handleCtaClick}
                  style={{
                    background: 'rgba(255, 85, 0, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 85, 0, 0.5)',
                    borderRadius: '14px',
                    fontWeight: '600',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                    cursor: 'pointer',
                    lineHeight: '1.2',
                  }}
                  className="relative px-8 py-4 btn-orange-glow"
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                      filter: 'blur(12px)',
                      opacity: '0.6',
                      zIndex: '-1',
                      transform: 'scale(1.1)'
                    }}
                  ></div>
                  Diese Zahlen erreichen!
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right GIF */}
          <motion.div 
            className="relative flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/Purple Daily Horoscope Phone Video Instagram Story.gif"
                alt="Content Marketing Reel - Case Study 1"
                width={640}
                height={1136}
                className="rounded-3xl shadow-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
                unoptimized
              />
              {/* Glow effect around GIF */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-3xl blur-2xl opacity-40 -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Second Row: GIF Left, Card Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left GIF */}
          <motion.div 
            className="relative flex justify-center order-1 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/Purple Daily Horoscope Phone Video Instagram Story.gif"
                alt="Content Marketing Reel - Case Study 2"
                width={640}
                height={1136}
                className="rounded-3xl shadow-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
                unoptimized
              />
              {/* Glow effect around GIF */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#ff8040] to-[#ff5500] rounded-3xl blur-2xl opacity-40 -z-10"></div>
            </div>
          </motion.div>

          {/* Right Card - Second Case Study */}
          <motion.div 
            className="relative order-2 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Orange Blur Effect behind Card */}
            <div className="absolute -inset-8 pointer-events-none z-0">
              <svg className="blur-xl md:blur-2xl filter opacity-10 md:opacity-15 w-full h-full" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.205 112.719C17.1445 64.6648 -28.2636 -70.487 -76.3175 47.574C-124.371 165.635 107.858 481.381 225.919 529.435C343.98 577.488 303.165 339.654 351.219 221.593C399.273 103.532 253.266 160.773 135.205 112.719Z" fill="url(#orange-gradient-card2)" />
                <defs>
                  <linearGradient id="orange-gradient-card2" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff8040" />
                    <stop offset="100%" stopColor="#ff5500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] transition-all duration-500 ease-out overflow-hidden z-10">
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  Ihre möglichen <span className="relative inline-block">
                    <span className="text-[#ff5500]">Resultate</span>
                    <span className="absolute bottom-[-6px] md:bottom-[-5px] left-0 w-full h-1.5 md:h-2 bg-[#ff5500]/40" />
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                  Mit unserem bewährten Content-Marketing-System können auch Sie diese beeindruckenden Zahlen erreichen und Ihr Business transformieren.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {stats2.map((stat, index) => (
                  <StatItem key={index} value={stat.value} label={stat.label} icon={stat.icon} />
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={handleCtaClick}
                  style={{
                    background: 'rgba(255, 85, 0, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 85, 0, 0.5)',
                    borderRadius: '14px',
                    fontWeight: '600',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 15px rgba(255, 85, 0, 0.4)',
                    cursor: 'pointer',
                    lineHeight: '1.2',
                  }}
                  className="relative px-8 py-4 btn-orange-glow"
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                      filter: 'blur(12px)',
                      opacity: '0.6',
                      zIndex: '-1',
                      transform: 'scale(1.1)'
                    }}
                  ></div>
                  Ihren Erfolg starten!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;