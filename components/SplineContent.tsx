'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy-load Spline für bessere Performance
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <LoadingFallback />
});
const MobileSplineContent = dynamic(() => import('./MobileSplineContent'), {
  ssr: false
});

const SplineContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prüfen, ob mobile Ansicht
  useEffect(() => {
    setMounted(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (!mounted) return <LoadingFallback />;

  // Wenn mobile Ansicht, verwende die dedizierte mobile Komponente
  if (isMobile) {
    return <MobileSplineContent />;
  }

  // Desktop Ansicht
  return (
    <div className="w-full flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[700px]">
      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] flex justify-center items-center">
        <Spline 
          scene="/content.spline" 
          className="w-full h-full max-w-[350px] sm:max-w-full" 
        />
      </div>
    </div>
  );
};

// Fallback während Spline lädt
const LoadingFallback = () => {
  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[700px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#ff5500] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-sm sm:text-base">3D-Content wird geladen...</p>
      </div>
    </div>
  );
};

export default SplineContent; 