'use client';

import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';

const LampTransition = () => {
  return (
    <div className="py-10">
      <LampContainer className="min-h-[60vh]">
        {/* Leerer Container für den Lamp-Effekt ohne Text */}
      </LampContainer>
    </div>
  );
};

export default LampTransition; 