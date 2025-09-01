"use client";
import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import GalaxyBackground from "./GalaxyBg";
import Button from "@/templates/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative px-6 pb-20 pt-40 lg:pb-30 lg:pt-50">
      <div className="container max-w-screen-xl mx-auto overflow-hidden">
        <GalaxyBackground />
        <div className="absolute inset-0 z-90">
          {/* Glow effects */}
          <div className="absolute w-[400px] h-[400px] bg-primary-dark/30 rounded-full blur-[180px] top-1/6 left-1/3 animate-pulse"></div>
        </div>
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center px-4 space-y-5 z-99">
          <div className="bg-primary-main rounded-3xl border border-border-light flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="AI Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-text-light tracking-tight">
            PATCH LINE
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-text-inverse tracking-tight">
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

          <p className="text-text-main text-lg md:text-xl max-w-5xl leading-relaxed">
            Empowering Your Vision with Reliable, Innovative, and Client-Focused Software Solutions
          </p>

        {/* CTA Buttons */}
        <div className="">
          <Button href="/">Get Started</Button>
        </div>
      </div>
      </div>
    </section>
  );
};


export default HeroSection;
