"use client";
import Aos from "aos";
import { useRef, useEffect, useState } from "react";

type Step = {
  id: number;
  title: string;
  desc: string;
  points: string[];
};

interface StepCardProps {
  step: Step;
  index: number;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery & Requirement Gathering",
    desc: "We start by understanding your goals, challenges, and expectations. This stage builds the foundation for a customized.",
    points: ["Wireframes & Architecture", "Tech Stack Finalization", "Timelines & Milestones"],
  },
  {
    id: 2,
    title: "Planning & Architecture",
    desc: "We design the roadmap, project architecture, and delivery plan based on the discovered requirements.",
    points: ["Client Consultation", "Business Requirement Analysis", "Scope Definition"],
  },
  {
    id: 3,
    title: "Design & Development",
    desc: "From UX/UI to backend logic, our team builds the solution iteratively with regular updates and feedback cycles.",
    points: ["UI/UX Design", "Frontend & Backend Development", "API Integrations"],
  },
  {
    id: 4,
    title: "Quality Assurance & Launch",
    desc: "We ensure the product is stable, tested, and ready to launch — meeting performance and security benchmarks.",
    points: ["Manual & Automated Testing", "Bug Fixing", "Deployment & Go-Live"],
  },
  {
    id: 5,
    title: "Post-Launch Support",
    desc: "We don't just deliver — we stand by our clients with continuous updates, optimizations, and support.",
    points: ["Performance Monitoring", "Feature Enhancements", "Ongoing Support & Maintenance"],
  },
];

export default function ScrollSteps() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // animation runs once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white min-h-screen">
      <div className="text-center mb-8 md:mb-14 relative pt-12 md:pt-20 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide">
          <span className="text-white drop-shadow-sm">Our </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent 
                     drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
            PROCESS
          </span>
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-gray-400 mt-3 max-w-2xl mx-auto px-4">
          A transparent and structured workflow that ensures efficiency, quality, and client satisfaction.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 space-y-8 pb-20">
        {steps.map((step, index) => (
          <MobileStepCard key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden md:block relative"
        style={{ height: `${(steps.length - 1) * 120 + 100}vh` }}
      >
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600 -translate-x-1/2 shadow-lg" />

        {steps.map((step, i) => (
          <DesktopStepCard key={step.id} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}

function MobileStepCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-start gap-4">
      {/* Timeline dot */}
      <div className="flex flex-col items-center flex-shrink-0 mt-2">
        <div
          className={`
            w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full 
            border-2 border-gray-950 shadow-lg transition-all duration-500 
            flex items-center justify-center text-xs font-bold text-white
            ${isInView ? "scale-110 shadow-cyan-400/50" : "scale-100"}
          `}
        >
          {step.id}
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-cyan-400/50 to-cyan-600/30 mt-2" />
        )}
      </div>

      {/* Card content */}
      <div
        ref={ref}
        className={`
          flex-1 rounded-xl bg-gray-900/60 border border-cyan-500/40 
          p-4 backdrop-blur-sm transition-all duration-700 ease-out
          hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg
          ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        <h3 className="text-lg font-semibold mb-2 tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-600 bg-clip-text text-transparent">
          {step.title}
        </h3>

        <p className="text-sm text-gray-300/80 leading-relaxed mb-3">
          {step.desc}
        </p>

        <ul className="space-y-2 text-sm">
          {step.points.map((point, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-cyan-400/90 hover:text-cyan-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-sm flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-12 h-px bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full ml-auto" />
      </div>
    </div>
  );
}

function DesktopStepCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const stickyTop = index * 115;

  return (
    <div
      className="sticky h-screen flex items-start pt-8"
      style={{ top: `${stickyTop}px` }}
    >
      <div
        ref={ref}
        className={`
          w-[45%] xl:w-[40%] max-w-lg h-auto absolute rounded-2xl
          bg-gray-900/60 border border-cyan-500/40 shadow-md
          p-5 lg:p-6 backdrop-blur-sm
          transition-all duration-700 ease-out
          hover:scale-105 hover:shadow-cyan-500/30 hover:shadow-2xl
          hover:border-cyan-400
          ${isLeft ? "right-1/2 mr-8 lg:mr-16" : "left-1/2 ml-8 lg:ml-16"}
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* Title */}
        <h2 className="text-lg lg:text-xl font-semibold mb-2 tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-600 bg-clip-text text-transparent">
          {step.title}
        </h2>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-300/80 leading-snug">
          {step.desc}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-1 text-sm mt-3">
          {step.points.map((point, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-cyan-400/90 hover:text-cyan-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-sm" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Bottom line */}
        <div className="mt-4 w-14 h-px bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full ml-auto" />
      </div>

      {/* Connector dot */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8">
        <div
          className={`
            w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full 
            border-4 border-gray-950 shadow-lg transition-all duration-500
            ${isInView ? "scale-110 shadow-cyan-400/50" : "scale-100"}
          `}
        >
          {isInView && (
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
          )}
        </div>
      </div>

      {/* Side connecting line */}
      <div
        className={`
          absolute left-1/2 w-8 lg:w-14 h-0.5 bg-gradient-to-r transition-all duration-500 top-8 translate-y-3
          ${isLeft
            ? "-translate-x-[42px] lg:-translate-x-[66px] from-cyan-400/50 to-transparent"
            : "translate-x-[12px] from-transparent to-cyan-400/50"
          }
          ${isInView ? "opacity-100" : "opacity-30"}
        `}
      />
    </div>
  );
}