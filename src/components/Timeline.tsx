"use client";
import Aos from "aos";
import { useRef, useEffect, useState } from "react";
import GalaxyBackground from "./GalaxyBg";
import { steps } from "@/utilities/data";
import "aos/dist/aos.css";

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

export default function ScrollSteps() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative px-6 pb-20 pt-30 lg:pb-30 lg:pt-40">
      <div className="container max-w-screen-xl mx-auto overflow-hidden">
        <GalaxyBackground />

        <h2 className="sm:text-5xl text-3xl font-bold text-center tracking-wide text-white">
          Our <span className="text-gray-400">Process</span>
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-gray-300 mt-3 text-center max-w-2xl mx-auto px-4">
          A transparent and structured workflow that ensures <br />
          efficiency, quality, and client satisfaction.
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
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-white/60 via-gray-400/40 to-gray-700/40 -translate-x-1/2 shadow-lg" />

        {steps.map((step, i) => (
          <DesktopStepCard key={step.id} step={step} index={i} />
        ))}
      </div>
    </section>
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center flex-shrink-0 mt-2">
        <div
          className={`
            w-8 h-8 bg-white rounded-full border-2 border-gray-600 shadow-md
            flex items-center justify-center text-xs font-bold text-black
            transition-all duration-500
            ${isInView ? "scale-110 shadow-white/40" : "scale-100"}
          `}
        >
          {step.id}
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-white/50 to-gray-700/30 mt-2" />
        )}
      </div>

      <div
        ref={ref}
        className={`
          flex-1 rounded-xl bg-white/5 border border-white/20 p-4 backdrop-blur-sm
          transition-all duration-700 ease-out hover:scale-[1.02] hover:border-white/40
          ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        <h3 className="text-lg font-semibold mb-2 tracking-wide text-white">
          {step.title}
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed mb-3">
          {step.desc}
        </p>

        <ul className="space-y-2 text-sm text-gray-200">
          {step.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-12 h-px bg-gradient-to-r from-white/80 to-gray-500 rounded-full ml-auto" />
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

    if (ref.current) observer.observe(ref.current);
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
          bg-white/5 border border-white/20 shadow-md p-5 lg:p-6 backdrop-blur-sm
          transition-all duration-700 ease-out hover:scale-[1.03] hover:border-white/40 hover:shadow-white/20
          ${isLeft ? "right-1/2 mr-8 lg:mr-16" : "left-1/2 ml-8 lg:ml-16"}
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <h2 className="text-lg lg:text-xl font-semibold mb-2 tracking-wide text-white">
          {step.title}
        </h2>

        <p className="text-sm lg:text-base text-gray-300 leading-snug">
          {step.desc}
        </p>

        <ul className="space-y-1 text-sm mt-3 text-gray-200">
          {step.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70 shadow-sm" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-14 h-px bg-gradient-to-r from-white/70 to-gray-400 rounded-full ml-auto" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-8">
        <div
          className={`
            w-6 h-6 bg-white rounded-full border-4 border-gray-800 shadow-lg
            transition-all duration-500
            ${isInView ? "scale-110 shadow-white/50" : "scale-100"}
          `}
        >
          {isInView && (
            <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
          )}
        </div>
      </div>

      <div
        className={`
          absolute left-1/2 w-8 lg:w-14 h-0.5 bg-gradient-to-r top-8 translate-y-3
          ${isLeft
            ? "-translate-x-[42px] lg:-translate-x-[66px] from-white/40 to-transparent"
            : "translate-x-[12px] from-transparent to-white/40"}
          ${isInView ? "opacity-100" : "opacity-40"}
        `}
      />
    </div>
  );
}
