"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GalaxyBackground from "./GalaxyBg";
type FlipCardProps = {
  title: string;
  subtitle: string;
  features: string[];
  cta?: string;
  icon?: string;
};

export function FlipCard({ title, subtitle, features, cta = "Learn more", icon }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className="group relative h-72 w-full cursor-pointer  select-none [perspective:1200px]"
      onClick={toggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden">
        <div className="absolute inset-0 rounded-2xl animate-rotateGlow">
          <div className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,#00E7FFaa_0deg,#00E7FFaa_20deg,transparent_20deg,transparent_360deg)] blur-md" />
        </div>
        <div className="absolute inset-[2px] rounded-2xl bg-gray-900/90 backdrop-blur" />
      </div>

      {/* 3D Flip */}
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d]
        ${flipped ? "rotate-y-180" : ""} group-hover:rotate-y-180`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center [backface-visibility:hidden]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 border border-primary-main overflow-hidden">
            <img src={icon} alt={`${title} icon`} className="h-12 w-12 object-contain" />
          </div>
          <h3 className="text-xl text-text-inverse font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-text-light dark:text-neutral-300">{subtitle}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <h4 className="text-lg text-text-inverse font-semibold">What we deliver</h4>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-200">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary-main"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <button
                className="w-full rounded-xl px-4 py-2 text-sm font-medium text-black shadow-sm ring-1 ring-inset ring-primary-main/50 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-main"
                style={{
                  background: "linear-gradient(135deg, #00E7FF 0%, #7AFFF7 100%)",
                }}
              >
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceCard() {
  const cards = [
    {
      title: "Web Development",
      subtitle: "Modern & scalable websites",
      features: [
        "Responsive UI/UX design",
        "Next.js & React expertise",
        "SEO & performance optimization",
      ],
      icon: "../assets/icons/WebDev.gif",
    },
    {
      title: "Mobile App Development",
      subtitle: "iOS & Android solutions",
      features: [
        "Cross-platform apps (React Native)",
        "Smooth performance & UI",
        "App store deployment support",
      ],
      icon: "../assets/icons/MobileDev.gif",
    },
    {
      title: "Software Development",
      subtitle: "Deploy, scale, and secure",
      features: [
        "AWS, Azure, Google Cloud",
        "CI/CD pipelines",
        "Monitoring & cost optimization",
      ],
      icon: "../assets/icons/SoftwareDev.gif",
    },
    {
      title: "UI/UX Design",
      subtitle: "User-focused experiences",
      features: [
        "Wireframes & prototypes",
        "Design systems & style guides",
        "Accessibility best practices",
      ],
      icon: "../assets/icons/UIUX.gif",
    },
    {
      title: "cybersecurity",
      subtitle: "Protect your digital assets",
      features: [
        "Custom storefronts",
        "Payment gateway integration",
        "Analytics & growth tracking",
      ],
      icon: "../assets/icons/CyberSecurity.gif",
    },
    {
      title: "AI & Automation",
      subtitle: "Future-ready innovations",
      features: [
        "Chatbots & assistants",
        "Workflow automation",
        "Data-driven insights",
      ],
      icon: "../assets/icons/AI&Automation.gif",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      <GalaxyBackground />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl p-6">
        <header className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
              Our <span className="text-text-inverse">Services</span>
            </h1>
            <p className="mt-1 text-sm text-white/80">
              We craft modern digital solutions for businesses of all sizes.
              Hover or tap a card to explore more.
            </p>
          </div>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FlipCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
