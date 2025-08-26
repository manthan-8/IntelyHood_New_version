"use client";

import { useState } from "react";

type FlipCardProps = {
  title: string;
  subtitle: string;
  features: string[];
  cta?: string;
};

function FlipCard({ title, subtitle, features, cta = "Learn more" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className="group relative h-72 w-full cursor-pointer select-none [perspective:1200px]"
      onClick={toggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden">
        <div className="absolute inset-0 rounded-2xl animate-rotateGlow">
          {/* Only a small glowing arc */}
          <div className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,#00E7FFaa_0deg,#00E7FFaa_20deg,transparent_20deg,transparent_360deg)] blur-md" />
        </div>

        {/* Card background */}
        <div className="absolute inset-[2px] rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur" />
      </div>

      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d]
        ${flipped ? "rotate-y-180" : ""} group-hover:rotate-y-180`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center [backface-visibility:hidden]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#00E7FF]/15 ring-1 ring-[#00E7FF]/30">
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
              <path
                d="M12 3l9 6-9 6-9-6 9-6zm0 7.5l9 6-9 6-9-6 9-6z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{subtitle}</p>
          <p className="mt-2 text-xs text-neutral-500">Hover or tap to reveal details</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <h4 className="text-lg font-semibold">What we deliver</h4>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-200">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#00E7FF]"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <button
                className="w-full rounded-xl px-4 py-2 text-sm font-medium text-black shadow-sm ring-1 ring-inset ring-[#00E7FF]/50 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00E7FF]"
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
    },
    {
      title: "Mobile App Development",
      subtitle: "iOS & Android solutions",
      features: [
        "Cross-platform apps (React Native)",
        "Smooth performance & UI",
        "App store deployment support",
      ],
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Deploy, scale, and secure",
      features: [
        "AWS, Azure, Google Cloud",
        "CI/CD pipelines",
        "Monitoring & cost optimization",
      ],
    },
    {
      title: "UI/UX Design",
      subtitle: "User-focused experiences",
      features: [
        "Wireframes & prototypes",
        "Design systems & style guides",
        "Accessibility best practices",
      ],
    },
    {
      title: "E-commerce Solutions",
      subtitle: "Sell smarter online",
      features: [
        "Custom storefronts",
        "Payment gateway integration",
        "Analytics & growth tracking",
      ],
    },
    {
      title: "AI & Automation",
      subtitle: "Future-ready innovations",
      features: [
        "Chatbots & assistants",
        "Workflow automation",
        "Data-driven insights",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-neutral-50 p-6 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Services
            </h1>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
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
