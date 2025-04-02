"use client";  // Ensure this is at the top

import Image from "next/image";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import Logo from '../../public/zybit-logo.svg'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {

  const handleEmailRedirect = () => {
    const email = "zybit25@gmail.com";
    const subject = encodeURIComponent("Inquiry about your services");
    const body = encodeURIComponent("Hello, I would like to know more about your company.");
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
  };
  

  if (typeof window === 'undefined') return null; // Prevent SSR entirely for this component

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1 flex gap-2 rounded-full bg-gray-600/50 pl-3 pr-6 text-lg items-center">
          <Image src="/zlogo.png" width={60} height={60} alt="ZYBIT LOGO" />
          Z Y B I T
        </span>
        <h1 className="max-w-3xl font-sans text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 via-neutral-50 to-neutral-500 font-semibold text-center sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Something Exciting is Coming Your Way
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        We're working on something special to bring festive magic to your doorstep. Stay tuned for updates 
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="cursor-pointer group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/50 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          onClick={handleEmailRedirect}
        >
          Stay In Touch
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}
