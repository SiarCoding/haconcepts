"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from "lucide-react";
import Image from 'next/image';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "second" | "third" | "fourth" | "fifth";
  id: number;
  author: string;
  avatar: string;
  role: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, avatar, role }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  const variants = {
    front:  { x: "0%",   rotate: "-6deg", scale: 1,    zIndex: 5 },
    second: { x: "15%",  rotate: "-3deg", scale: 0.95, zIndex: 4 },
    third:  { x: "30%",  rotate: "0deg",  scale: 0.9,  zIndex: 3 },
    fourth: { x: "45%",  rotate: "3deg",  scale: 0.85, zIndex: 2 },
    fifth:  { x: "60%",  rotate: "6deg",  scale: 0.8,  zIndex: 1 },
  };

  const animationProps = variants[position];

  return (
    <motion.div
      style={{
        zIndex: animationProps.zIndex
      }}
      animate={animationProps}
      drag={isFront}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        let clientX = 0;
        if ('touches' in e && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
        } else if ('clientX' in e) {
          clientX = e.clientX;
        }
        dragRef.current = clientX;
      }}
      onDragEnd={(e) => {
        let clientX = 0;
        if ('changedTouches' in e && e.changedTouches.length > 0) {
          clientX = e.changedTouches[0].clientX;
        } else if ('clientX' in e) {
          clientX = e.clientX;
        }
        if (dragRef.current - clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[480px] w-[380px] select-none place-content-center space-y-6 rounded-2xl border border-white/10 bg-black/70 p-6 shadow-2xl backdrop-blur-xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={avatar}
        alt={`Avatar of ${author}`}
        width={96}
        height={96}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border-2 border-orange-500 bg-white object-cover shadow-lg"
      />
      <div className="text-center">
        <span className="block text-base font-bold text-orange-500 font-montserrat">{author}</span>
        <span className="block text-sm text-white/70 font-inter">{role}</span>
      </div>
      <span className="text-center text-lg italic text-white/90 font-inter">"{testimonial}"</span>
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-[#ff5500] fill-[#ff5500]"
          />
        ))}
      </div>
    </motion.div>
  );
} 