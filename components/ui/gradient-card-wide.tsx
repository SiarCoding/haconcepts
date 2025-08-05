'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Lock, Sparkles, TrendingUp } from "lucide-react";
import { RiCheckboxCircleFill } from 'react-icons/ri';

const icons: { [key: string]: React.ElementType } = {
  Zap,
  Cpu,
  Lock,
  Sparkles,
  TrendingUp,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
  points?: string[]; // Neue optionale Property für Checkboxen-Punkte
  websiteUrl?: string; // Neue optionale Property für Website-Links
}

interface GradientCardWideProps {
  feature: Feature;
}

export const GradientCardWide: React.FC<GradientCardWideProps> = ({ feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
      const rotateX = -(y / rect.height) * 3; // Reduziert für schmale Card
      const rotateY = (x / rect.width) * 6; // Erhöht für schmale Card
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  
  const IconComponent = icons[feature.icon];

  return (
      <motion.div
        ref={cardRef}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full backdrop-blur-md bg-white/[0.02] border border-white/[0.08] shadow-2xl"
        style={{
          height: "100%", // Gleiche Höhe wie die Website Card
          transformStyle: "preserve-3d",
          boxShadow: "0 -10px 60px 6px rgba(255, 85, 0, 0.1), 0 0 6px 0 rgba(0, 0, 0, 0.4)",
        }}
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -2 : 0,
          rotateX: rotation.x,
          rotateY: rotation.y,
          perspective: 1000,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute inset-0 z-35 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0.5,
            rotateX: -rotation.x * 0.2,
            rotateY: -rotation.y * 0.2,
            z: 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(180deg, #000000 0%, #000000 70%)" }}
          animate={{ z: -1 }}
        />
        <motion.div
          className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
          animate={{ z: -0.5 }}
        />
        <motion.div
          className="absolute inset-0 opacity-10 mix-blend-soft-light z-11 pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='smudge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23smudge)'/%3E%3C/svg%3E")`, backdropFilter: "blur(1px)" }}
          animate={{ z: -0.25 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3/4 z-20"
          style={{
            background: `
              radial-gradient(ellipse at bottom center, rgba(255, 85, 0, 0.8) -20%, rgba(255, 85, 0, 0) 80%),
              radial-gradient(ellipse at bottom right, rgba(255, 128, 64, 0.6) -15%, rgba(255, 128, 64, 0) 75%)
            `,
            filter: "blur(35px)",
          }}
          animate={{
            opacity: isHovered ? 0.9 : 0.8,
            y: isHovered ? rotation.x * 0.4 : 0,
            z: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(255, 85, 0, 0.9) -25%, rgba(255, 85, 0, 0) 70%)
            `,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: isHovered ? 0.85 : 0.75,
            y: isHovered ? `calc(8% + ${rotation.x * 0.2}px)` : "8%",
            z: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] z-25"
          style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.05) 100%)" }}
          animate={{
            boxShadow: isHovered
              ? "0 0 25px 5px rgba(255, 85, 0, 0.9), 0 0 35px 7px rgba(255, 85, 0, 0.7), 0 0 45px 9px rgba(255, 128, 64, 0.5)"
              : "0 0 20px 4px rgba(255, 85, 0, 0.8), 0 0 30px 6px rgba(255, 85, 0, 0.6), 0 0 40px 8px rgba(255, 128, 64, 0.4)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className="relative flex flex-col h-full px-1.5 py-2.5 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6 z-40 justify-between overflow-hidden"
          animate={{ z: 2 }}
        >
          {/* Icon Section - Sehr kompakt für Mobile */}
          <motion.div
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex-shrink-0"
            style={{ background: "linear-gradient(225deg, #171c2c 0%, #121624 100%)", position: "relative", overflow: "hidden" }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              boxShadow: isHovered
                ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
                : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
              z: isHovered ? 10 : 5,
              y: isHovered ? -2 : 0,
              rotateX: isHovered ? -rotation.x * 0.5 : 0,
              rotateY: isHovered ? -rotation.y * 0.5 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-2/3 h-2/3 opacity-40" style={{ background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)", pointerEvents: "none", filter: "blur(6px)" }} />
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-50" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)", pointerEvents: "none", backdropFilter: "blur(2px)" }} />
            <div className="flex items-center justify-center w-full h-full relative z-10 text-orange-400">
                <IconComponent size={10} className="sm:scale-110 md:scale-125 lg:scale-150" />
            </div>
          </motion.div>

          {/* Header Section - Ultra kompakt für Mobile */}
          <motion.div
            className="text-center mb-1 sm:mb-1.5 md:mb-2 flex-shrink-0"
            animate={{
              z: isHovered ? 5 : 2,
              rotateX: isHovered ? -rotation.x * 0.3 : 0,
              rotateY: isHovered ? -rotation.y * 0.3 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.h3
              className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm font-medium text-white leading-tight mb-2 sm:mb-3 overflow-hidden"
              style={{ letterSpacing: "-0.01em", wordBreak: "break-word" }}
            >
              {feature.title}
            </motion.h3>
          </motion.div>

          {/* Checkbox Points Section - Ultra kompakt */}
          {feature.points && (
            <motion.div
              className="flex-grow overflow-hidden flex flex-col"
              animate={{
                z: isHovered ? 5 : 2,
                rotateX: isHovered ? -rotation.x * 0.3 : 0,
                rotateY: isHovered ? -rotation.y * 0.3 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 overflow-hidden flex-grow">
                {feature.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <RiCheckboxCircleFill className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#ff5500] flex-shrink-0 mt-0.5" />
                    <span className="ml-1 sm:ml-1.5 md:ml-2 text-[9px] sm:text-xs md:text-sm text-gray-200 leading-tight group-hover:text-white/90 transition-colors duration-300 overflow-hidden" style={{ wordBreak: "break-word" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Website Button */}
              {feature.websiteUrl && (
                <div className="mt-2 sm:mt-3">
                  <motion.a
                    href={feature.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white text-[8px] sm:text-xs md:text-sm font-medium group"
                    whileHover={{
                      filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))"
                    }}
                  >
                    Zur Website
                    <motion.svg
                      className="ml-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4"
                      width="8"
                      height="8"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{
                        x: isHovered ? 2 : 0
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.a>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
  );
};