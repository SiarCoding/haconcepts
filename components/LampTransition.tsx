'use client';

import React from 'react';
import { LampContainer } from '@/components/ui/lamp';

const LampTransition = () => {
  return (
    <div className="relative overflow-hidden w-full -mb-8 sm:-mb-16 md:-mb-24">
      <LampContainer className="min-h-[20vh] sm:min-h-[25vh] md:min-h-[30vh] p-0 m-0">
        <></> {/* Empty fragment as children */}
      </LampContainer>
    </div>
  );
};

export default LampTransition; 