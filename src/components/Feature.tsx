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
    <div className="w-full max-w-xs rounded-xl bg-background-main/60 border border-primary-main/40 p-3 hover:border-primary-main transition-all duration-300 shadow-md">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-main/40 bg-primary-dark/10 text-primary-main">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-text-light">{title}</h3>
          <span className="inline-block bg-primary-dark/10 text-primary-main text-[10px] font-medium px-2 py-0.5 rounded-md border border-primary-main/40 mt-1 w-fit">
            {subtitle}
          </span>
        </div>
      </div>
      <p className="text-text-main text-xs leading-relaxed mt-2">{description}</p>
    </div>
  );
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 px-6 bg-center bg-no-repeat bg-contain md:bg-[url('/ff.avif')]"
      style={{
        backgroundSize: "440px 440px",
        backgroundPosition: "center 200px",
      }}
    >
      <GalaxyBackground />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light">
          Our <span className="text-text-inverse">Features</span>
        </h2>
        <p className="text-text-light">Empowering You With Smarter Solutions</p>
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
          <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-primary-main/30 blur-3xl animate-pulse"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center bg-background-main z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit1 w-32 h-32 md:w-44 md:h-44"></div>
              <div className="orbit2 w-24 h-24 md:w-36 md:h-36"></div>
            </div>

            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <Image
                src="/logo-white.png"
                alt="Profile"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {features.slice(3).map((model, i) => (
            <Card key={i} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}
