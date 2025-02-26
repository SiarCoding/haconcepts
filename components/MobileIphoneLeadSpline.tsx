'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy-load Spline für bessere Performance
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <LoadingFallback />
});

const MobileIphoneLeadSpline = () => {
  return (
    <div className="w-full flex justify-center items-center h-[300px]">
      {/* Mobile Spline 3D Content - vereinfachter Container */}
      <div className="relative w-[160px] h-[300px] mx-auto">
        <Spline 
          scene="/leads.spline" 
          className="w-full h-full" 
        />
      </div>
    </div>
  );
};

// Fallback während Spline lädt
const LoadingFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-3 border-[#ff5500] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-white text-xs">Wird geladen...</p>
      </div>
    </div>
  );
};

export default MobileIphoneLeadSpline; 