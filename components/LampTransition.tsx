'use client';

import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';

const LampTransition = () => {
  return (
    <div className="py-10">
      <LampContainer className="min-h-[60vh]">
        <div>
          {/* Leerer Container für den Lamp-Effekt */}
        </div>
      </LampContainer>
    </div>
  );
};

export default LampTransition; 