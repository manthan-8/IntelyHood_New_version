"use client";

import { FC } from "react";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const aiModels: CardProps[] = [
  {
    title: "ChatGPT 5",
    subtitle: "All Rounder Explainer",
    description:
      "Great for questions, brainstorming, and clear step-by-step explanations.",
    icon: "🤖",
  },
  {
    title: "Claude Sonnet 4",
    subtitle: "Co-Writing Master",
    description:
      "Refines polished emails, essays, and scripts while keeping your style.",
    icon: "✍️",
  },
  {
    title: "Gemini 2.5 Pro",
    subtitle: "Long Context Master",
    description:
      "Handles long documents and images, tracking full context and details.",
    icon: "✨",
  },
  {
    title: "Perplexity Sonar Pro",
    subtitle: "Live Web Researcher",
    description:
      "Delivers fresh answers and news from credible, real-time sources.",
    icon: "🌐",
  },
  {
    title: "DeepSeek",
    subtitle: "Reasoning Specialist",
    description:
      "Excels at logic, math, and coding with clear, detailed solutions.",
    icon: "🧠",
  },
  {
    title: "Grok 4",
    subtitle: "Creative Powerhouse",
    description:
      "Bold, unconventional ideas and punchy copy for trend-focused content.",
    icon: "🎨",
  },
];

const Card: FC<CardProps> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="rounded-xl bg-gray-900/60 border border-green-500/40 p-4 hover:border-green-400 transition-all duration-300 shadow-lg max-w-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <span className="text-sm text-green-400 font-medium">{subtitle}</span>
      <p className="text-gray-300 text-sm mt-1">{description}</p>
    </div>
  );
};

export default function AIShowcase() {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pick the best characteristics <br /> of each AI model
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {aiModels.slice(0, 3).map((model, i) => (
            <Card key={i} {...model} />
          ))}
        </div>

        {/* Center glowing circle */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-black border border-green-400 shadow-[0_0_50px_20px_rgba(34,197,94,0.5)]">
            <span className="text-4xl">⚛️</span>
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
