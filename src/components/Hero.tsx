"use client";

import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 ">

        {/* Glow effects */}
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[180px] top-1/6 left-1/3 animate-pulse"></div>

      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 3 + 1; // 1px - 4px
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.8,
                animationDuration: `${2 + Math.random() * 4}s`, // random pulse speed
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          );
        })}
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Central AI badge */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-3xl border border-gray-600 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <Image
              src="/logo.png"   // 👈 replace with your logo path in /public
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

          <h2 className="text-xl md:text-2xl font-bold text-[#00E7FF] mb-8 tracking-tight">
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
        <p className="text-[#88F3FF] text-lg md:text-xl text-center max-w-5xl mb-12 leading-relaxed font-medium">
          "Performance, flexibility, and scalability for any AI workload — built for startups and enterprises alike.",
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            Get started
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
