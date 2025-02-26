declare module '@splinetool/react-spline' {
  import React from 'react';
  
  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  
  const Spline: React.FC<SplineProps>;
  
  export default Spline;
} 