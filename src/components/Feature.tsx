"use client";

import { FC } from "react";
import Image from "next/image";
import GalaxyBackground from "./GalaxyBg";
import { features } from "@/utilities/data";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
};

const Card: FC<CardProps> = ({ title, subtitle, description, icon: Icon }) => {
  return (
    <div className="w-full max-w-xs rounded-xl bg-black border border-gray-700 p-3 hover:border-white/60 transition-all duration-300 shadow-lg">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <span className="inline-block bg-gray-800 text-gray-300 text-[10px] font-medium px-2 py-0.5 rounded-md border border-gray-600 mt-1 w-fit">
            {subtitle}
          </span>
        </div>
      </div>
      <p className="text-gray-300 text-xs leading-relaxed mt-2">{description}</p>
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden">
      {/* Galaxy Background Layer */}
      <GalaxyBackground />

      {/* ✅ Separate ff.avif image layer with white filter */}
      <div
        className="absolute inset-0 flex justify-center items-start pointer-events-none mt-8"
        style={{
          backgroundImage: "url('/ff.avif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "440px 440px",
          backgroundPosition: "center 200px",
          filter: "invert(1) brightness(5)", // makes only this image white
          zIndex: 0,
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl text-3xl font-bold text-text-light">
            Our <span className="text-gray-400">Features</span>
          </h2>
          <p className="text-text-light">
            Empowering You With Smarter Solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-23">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 3).map((model, i) => (
              <Card key={i} {...model} />
            ))}
          </div>

          {/* Center glowing circle */}
          <div className="relative flex items-center justify-center my-10 md:my-0">
            <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center bg-background-main z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit1 w-32 h-32 md:w-44 md:h-44"></div>
                <div className="orbit2 w-24 h-24 md:w-36 md:h-36"></div>
              </div>
              <h2 className="text-2xl font-light text-white tracking-wide">
                Intely<span className="text-white">Hood</span>
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {features.slice(3).map((model, i) => (
              <Card key={i} {...model} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
