"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import GalaxyBackground from "./GalaxyBg";
import Button from "@/templates/Button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <GalaxyBackground />
      <div className="absolute inset-0 ">
        {/* Glow effects */}
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[180px] top-1/6 left-1/3 animate-pulse"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Central AI badge */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-3xl border border-gray-600 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="AI Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            PATCH LINE
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-text-inverse mb-8 tracking-tight">
            <ReactTyped
              strings={[
                "Code. Create. Deliver.",
                "Build. Scale. Innovate.",
                "Ideas into Reality.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
            />
          </h2>
        </div>

        <p className="text-text-inverse text-lg md:text-xl text-center max-w-5xl mb-12 leading-relaxed font-medium">
          "Performance, flexibility, and scalability for any AI workload — built for startups and enterprises alike."
        </p>

        {/* CTA Buttons */}
        <div className="">
          <Button href="/">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
