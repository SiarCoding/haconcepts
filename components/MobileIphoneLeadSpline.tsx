'use client';

import React from 'react';
import SplineCanvas from '@/components/ui/spline-canvas';

const MobileIphoneLeadSpline = () => {
  return (
    <div className="w-full flex justify-center items-center h-[300px]">
      {/* Mobile Spline 3D Content - vereinfachter Container */}
      <div className="relative w-[160px] h-[300px] mx-auto">
        <SplineCanvas 
          scene="/leads.spline" 
          className="w-full h-full" 
        />
      </div>
    </div>
  );
};

export default MobileIphoneLeadSpline; 