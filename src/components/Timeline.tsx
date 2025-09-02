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

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center tracking-wide">
          <span className="text-text-light drop-shadow-sm">Our </span>
          <span className="text-text-inverse">PROCESS</span>
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-text-light mt-3 text-center max-w-2xl mx-auto px-4">
          A transparent and structured workflow that ensures<br /> efficiency, quality, and client satisfaction.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 space-y-8 pb-20">
        {steps.map((step, index) => (
          <MobileStepCard key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative" style={{ height: `${(steps.length - 1) * 120 + 100}vh` }}>
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary-main via-primary-light to-primary-dark -translate-x-1/2 shadow-lg" />

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
            w-8 h-8 bg-primary-main rounded-full 
            border-2 border-background-dark shadow-lg transition-all duration-500 
            flex items-center justify-center text-xs font-bold text-text-light
            ${isInView ? "scale-110 shadow-primary-main/50" : "scale-100"}
          `}
        >
          {step.id}
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-20 bg-gradient-to-b from-primary-main/50 to-primary-dark/30 mt-2" />
        )}
      </div>

      <div
        ref={ref}
        className={`
          flex-1 rounded-xl bg-background-main/60 border border-primary-main/40 
          p-4 backdrop-blur-sm transition-all duration-700 ease-out
          hover:border-primary-main hover:shadow-primary-main/20 hover:shadow-lg
          ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        <h3 className="text-lg font-semibold mb-2 tracking-wide bg-gradient-to-r from-primary-main via-primary-light to-primary-dark bg-clip-text text-transparent">
          {step.title}
        </h3>

        <p className="text-sm text-text-main/80 leading-relaxed mb-3">
          {step.desc}
        </p>

        <ul className="space-y-2 text-sm">
          {step.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2 text-primary-main/90 hover:text-primary-light transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-main to-primary-light shadow-sm flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-12 h-px bg-gradient-to-r from-primary-main via-primary-light to-primary-dark rounded-full ml-auto" />
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
    <div className="sticky h-screen flex items-start pt-8" style={{ top: `${stickyTop}px` }}>
      <div
        ref={ref}
        className={`
          w-[45%] xl:w-[40%] max-w-lg h-auto absolute rounded-2xl
          bg-background-main/60 border border-primary-main/40 shadow-md
          p-5 lg:p-6 backdrop-blur-sm
          transition-all duration-700 ease-out
          hover:scale-105 hover:shadow-primary-main/30 hover:shadow-2xl
          hover:border-primary-main
          ${isLeft ? "right-1/2 mr-8 lg:mr-16" : "left-1/2 ml-8 lg:ml-16"}
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <h2 className="text-lg lg:text-xl font-semibold mb-2 tracking-wide bg-gradient-to-r from-primary-main via-primary-light to-primary-dark bg-clip-text text-transparent">
          {step.title}
        </h2>

        <p className="text-sm lg:text-base text-text-main/80 leading-snug">
          {step.desc}
        </p>

        <ul className="space-y-1 text-sm mt-3">
          {step.points.map((point, i) => (
            <li key={i} className="flex items-center gap-2 text-primary-main/90 hover:text-primary-light transition-colors">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-main to-primary-light shadow-sm" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-14 h-px bg-gradient-to-r from-primary-main via-primary-light to-primary-dark rounded-full ml-auto" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-8">
        <div className={`
            w-6 h-6 bg-gradient-to-r from-primary-main to-primary-light rounded-full 
            border-4 border-background-dark shadow-lg transition-all duration-500
            ${isInView ? "scale-110 shadow-primary-main/50" : "scale-100"}
          `}
        >
          {isInView && (
            <div className="absolute inset-0 rounded-full bg-primary-main animate-ping opacity-30" />
          )}
        </div>
      </div>

      <div className={`
          absolute left-1/2 w-8 lg:w-14 h-0.5 bg-gradient-to-r transition-all duration-500 top-8 translate-y-3
          ${isLeft
            ? "-translate-x-[42px] lg:-translate-x-[66px] from-primary-main/50 to-transparent"
            : "translate-x-[12px] from-transparent to-primary-main/50"
          }
          ${isInView ? "opacity-100" : "opacity-30"}
        `}/>
    </div>
  );
}
