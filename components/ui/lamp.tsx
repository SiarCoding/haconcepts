"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-32 sm:h-40 md:h-56 overflow-visible w-[16rem] sm:w-[20rem] md:w-[30rem] bg-gradient-conic from-[#ff5500] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-20 sm:h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 sm:w-32 md:w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-32 sm:h-40 md:h-56 w-[16rem] sm:w-[20rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#ff8040] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 sm:w-32 md:w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-20 sm:h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-24 sm:h-32 md:h-48 w-full translate-y-8 sm:translate-y-10 md:translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 sm:h-32 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-20 sm:h-28 md:h-36 w-[16rem] sm:w-[22rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-[#ff5500] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "10rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-20 sm:h-28 md:h-36 w-32 sm:w-48 md:w-64 -translate-y-[3rem] sm:-translate-y-[4rem] md:-translate-y-[6rem] rounded-full bg-[#ff8040] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[16rem] sm:w-[22rem] md:w-[30rem] -translate-y-[4rem] sm:-translate-y-[5rem] md:-translate-y-[7rem] bg-[#ff5500]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-28 sm:h-36 md:h-44 w-full -translate-y-[8rem] sm:-translate-y-[10rem] md:-translate-y-[12.5rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-8 sm:-translate-y-12 md:-translate-y-16 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}; 