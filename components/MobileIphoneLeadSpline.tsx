'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy-load Spline für bessere Performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const MobileIphoneLeadSpline = () => {
  return (
    <div className="w-full flex justify-center items-center h-[300px]">
      {/* Mobile Spline 3D Content - vereinfachter Container */}
      <div className="relative w-[160px] h-[300px] mx-auto">
        <Suspense fallback={<LoadingFallback />}>
          <Spline 
            scene="/leads.spline" 
            className="w-full h-full" 
          />
        </Suspense>
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