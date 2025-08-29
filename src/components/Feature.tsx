"use client";

import { FC } from "react";
import Image from "next/image";


type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const aiModels: CardProps[] = [
  {
    title: "Atul PATEL 5",
    subtitle: "All Rounder Explainer",
    description:
      "Great for questions, brainstorming, and clear step-by-step explanations.",
    icon: "🤖",
  },
  {
    title: "gOUATAM  4",
    subtitle: "Co-Writing Master",
    description:
      "Refines polished emails, essays, and scripts while keeping your style.",
    icon: "✍️",
  },
  {
    title: "Tanish Pro",
    subtitle: "Long Context Master",
    description:
      "Handles long documents and images, tracking full context and details.",
    icon: "✨",
  },
  {
    title: "Aditya Pro",
    subtitle: "Live Web Researcher",
    description:
      "Delivers fresh answers and news from credible, real-time sources.",
    icon: "🌐",
  },
  {
    title: "Prakhar Deep",
    subtitle: "Reasoning Specialist",
    description:
      "Excels at logic, math, and coding with clear, detailed solutions.",
    icon: "🧠",
  },
  {
    title: "Akash 4",
    subtitle: "Creative Powerhouse",
    description:
      "Bold, unconventional ideas and punchy copy for trend-focused content.",
    icon: "🎨",
  },
];

const Card: FC<CardProps> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="w-full max-w-xs rounded-xl bg-gray-900/60 border border-cyan-500/40 p-3 hover:border-cyan-400 transition-all duration-300 shadow-md">
      <div className="flex gap-4">
        {/* Profile Photo */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-300">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Subtitle */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <span className="inline-block bg-cyan-900/40 text-cyan-300 text-[10px] font-medium px-2 py-0.5 rounded-md border border-cyan-500/40 mt-1 w-fit">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-xs leading-relaxed mt-2">
        {description}
      </p>
    </div>



  );
};

export default function AIShowcase() {
  return (
    <section
      className="relative py-20 px-6 bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/ff.avif')",
        backgroundSize: "440px 440px",
        backgroundPosition: "center 200px",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pick the best characteristics <br /> of each AI model
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-23">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {aiModels.slice(0, 3).map((model, i) => (
            <Card key={i} {...model} />
          ))}
        </div>

        {/* Center glowing circle */}
        <div className="relative flex items-center justify-center">
          {/* Glowing background */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>
          {/* Inner black circle */}
          <div className="relative w-52 h-52 rounded-full flex items-center justify-center bg-black z-10">
            {/* Orbit lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit1 w-44 h-44"></div>
              <div className="orbit2 w-36 h-36"></div>
            </div>


            {/* Logo inside */}
            <div className="w-20 h-20 flex items-center justify-center">
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
          {aiModels.slice(3).map((model, i) => (
            <Card key={i} {...model} />
          ))}
        </div>
      </div>
    </section>

  );
}
