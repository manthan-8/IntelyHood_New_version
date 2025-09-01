"use client";
import GalaxyBackground from "./GalaxyBg";
import { services } from "@/utilities/data";
import { FlipCard } from "./FlipCard";



export function ServiceCard() {
  return (
    <section className="relative px-6 py-15 lg:py-20">
      <div className="container max-w-screen-xl mx-auto overflow-hidden">
        <GalaxyBackground />
        <div className="space-y-20">
          <div className="space-y-5 text-center">
            <h1 className="text-3xl text-text-main font-bold tracking-tight sm:text-5xl">
              Our <span className="text-text-inverse">Services</span>
            </h1>
            <p className="text-sm text-white/80">
              We craft modern digital solutions for businesses of all sizes.
              Hover or tap a card to explore more.
            </p>
          </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0,6).map((c, i) => (
            <FlipCard key={i} {...c} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
