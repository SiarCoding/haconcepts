'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LampContainer } from '@/components/ui/lamp';

interface LampEffectProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  showContent?: boolean;
}

export const LampEffect: FC<LampEffectProps> = ({ 
  children, 
  className = "",
  title = "",
  description = "",
  showContent = true
}) => {
  return (
    <LampContainer className={cn(className)}>
      {showContent && (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      )}
      
      {children}
    </LampContainer>
  );
}; 