'use client';
import { Check, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import CountUp from "./ui/CountUp";


const BusinessSection = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 text-white">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge 
              variant="outline" 
              className="bg-gray-900/50 border-[#ff5500]/30 text-[#ff5500] px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm"
            >
              Wachstumsprognose
            </Badge>
            
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-montserrat text-white leading-tight">
                Ihr Wachstumspotenzial mit NextMove
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg font-inter">
                Sehen Sie, wie unsere maßgeschneiderten Strategien Ihren Umsatz steigern. 
                Wir verwandeln prädiktive Einblicke in reale Cashflows und optimieren 
                Ihre finanzielle Gesundheit nachhaltig.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff5500] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-inter">
                  Konstanter Strom qualifizierter Leads
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#ff5500] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-inter">
                  Messbare Steigerung der Abschlussquote
                </span>
              </div>
            </div>
            
            <button
                style={{
                background: 'rgba(255, 85, 0, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.5)',
                borderRadius: '16px',
                fontWeight: '600',
                fontSize: '18px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(255, 85, 0, 0.4)',
                cursor: 'pointer',
                lineHeight: '1.2',
                }}
                className="relative px-8 py-4"
            >
                <div
                style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.8) 0%, rgba(255, 85, 0, 0.4) 40%, transparent 70%)',
                    filter: 'blur(15px)',
                    opacity: '0.6',
                    zIndex: '-1',
                    transform: 'scale(1.1)'
                }}
                ></div>
                Potenzial entdecken
            </button>
          </div>
          
          {/* Right Dashboard */}
          <div className="relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] rounded-3xl p-6 md:p-8">
              
              {/* Shine Effect */}
              <div className="shine-effect" />

              {/* Main Chart */}
              <div className="relative z-10 mb-6">
                <h3 className="text-white text-xl font-semibold mb-6 font-montserrat">
                  ROI-Entwicklung mit NextMove
                </h3>
                
                <div className="relative h-64 w-full">
                  {/* Span effect behind curve */}
                  <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-[#ff5500]/10 to-transparent blur-3xl"></div>

                  {/* Chart Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                    <div className="border-b border-gray-600"></div>
                  </div>
                  
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-sm py-2">
                    <span>+60%</span>
                    <span>+45%</span>
                    <span>+30%</span>
                    <span>+15%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* Chart Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full ml-8" viewBox="0 0 400 200">
                    {/* Orange Line (ROI Growth) */}
                    <path
                      d="M 20 180 Q 80 170 120 140 T 200 80 T 280 60 T 360 40"
                      stroke="#ff5500"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-[0_0_10px_#ff5500]"
                    />
                    
                    {/* White Line (Baseline) */}
                    <path
                      d="M 20 180 Q 60 178 100 175 T 180 170 T 260 168 T 360 165"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="3"
                      fill="none"
                    />
                    
                    {/* Orange Line Glow Effect */}
                    <path
                      d="M 20 180 Q 80 170 120 140 T 200 80 T 280 60 T 360 40"
                      stroke="#ff5500"
                      strokeWidth="6"
                      fill="none"
                      opacity="0.3"
                      className="blur-sm"
                    />
                  </svg>
                  
                  <div className="absolute bottom-0 right-8 text-gray-400 text-sm">
                    Letzte 6 Monate
                  </div>
                </div>
              </div>
              
              {/* Revenue Card */}
              <Card className="relative z-10 bg-black/20 border-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white/80 font-medium font-inter text-sm">
                    Monatlicher Mehrumsatz
                  </h4>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-baseline justify-between">
                  <div className="relative">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white">€</span>
                      <CountUp
                        to={12890}
                        duration={3}
                        className="text-3xl font-bold text-white"
                        separator="."
                      />
                    </div>
                    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-md opacity-50"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-gray-400 font-inter">
                      +45%
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Floating Elements for Premium Feel */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff5500]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#ff5500]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 15%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 130, 64, 0.2), transparent);
          animation: shine 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          transform: translateX(-150%);
          pointer-events: none;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-150%) skewX(-25deg);
          }
          50% {
            transform: translateX(800%) skewX(-25deg);
          }
          100% {
            transform: translateX(800%) skewX(-25deg);
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessSection; 