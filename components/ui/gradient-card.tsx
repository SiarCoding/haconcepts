'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Lock, Sparkles } from "lucide-react";

const icons: { [key: string]: React.ElementType } = {
  Zap,
  Cpu,
  Lock,
  Sparkles,
};

interface Feature {
  icon: string; // Changed to string
  title: string;
  description: string;
}

interface GradientCardProps {
  feature: Feature;
}

export const GradientCard: React.FC<GradientCardProps> = ({ feature }) => {
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
      const rotateX = -(y / rect.height) * 8; 
      const rotateY = (x / rect.width) * 8;
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
        className="relative rounded-[32px] overflow-hidden w-full"
        style={{
          height: "380px",
          transformStyle: "preserve-3d",
          backgroundColor: "#0e131f",
          boxShadow: "0 -10px 100px 10px rgba(255, 85, 0, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
        }}
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -5 : 0,
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
          className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, rgba(255, 85, 0, 0.7) -10%, rgba(255, 85, 0, 0) 70%),
              radial-gradient(ellipse at bottom left, rgba(255, 128, 64, 0.7) -10%, rgba(255, 128, 64, 0) 70%)
            `,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: isHovered ? 0.9 : 0.8,
            y: isHovered ? rotation.x * 0.5 : 0,
            z: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(255, 85, 0, 0.7) -20%, rgba(255, 85, 0, 0) 60%)
            `,
            filter: "blur(45px)",
          }}
          animate={{
            opacity: isHovered ? 0.85 : 0.75,
            y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
            z: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
          style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)" }}
          animate={{
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(255, 85, 0, 0.9), 0 0 30px 6px rgba(255, 85, 0, 0.7), 0 0 40px 8px rgba(255, 128, 64, 0.5)"
              : "0 0 15px 3px rgba(255, 85, 0, 0.8), 0 0 25px 5px rgba(255, 85, 0, 0.6), 0 0 35px 7px rgba(255, 128, 64, 0.4)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className="relative flex flex-col h-full p-6 z-40"
          animate={{ z: 2 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
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
            <div className="absolute top-0 left-0 w-2/3 h-2/3 opacity-40" style={{ background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)", pointerEvents: "none", filter: "blur(10px)" }} />
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-50" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)", pointerEvents: "none", backdropFilter: "blur(3px)" }} />
            <div className="flex items-center justify-center w-full h-full relative z-10 text-orange-400">
                <IconComponent size={24} />
            </div>
          </motion.div>

          <motion.div
            className="flex-grow flex flex-col"
            animate={{
              z: isHovered ? 5 : 2,
              rotateX: isHovered ? -rotation.x * 0.3 : 0,
              rotateY: isHovered ? -rotation.y * 0.3 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div>
                <motion.h3
                  className="text-xl font-medium text-white mb-2"
                  style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-300"
                  style={{ lineHeight: 1.5, fontWeight: 350 }}
                >
                  {feature.description}
                </motion.p>
            </div>
            
            <div className="mt-auto">
                <motion.a
                href="#"
                className="inline-flex items-center text-white text-sm font-medium group"
                whileHover={{
                    filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))"
                }}
                >
                Mehr erfahren
                <motion.svg
                    className="ml-1 w-4 h-4"
                    width="8"
                    height="8"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                    x: isHovered ? 4 : 0
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
          </motion.div>
        </motion.div>
      </motion.div>
  );
}; 