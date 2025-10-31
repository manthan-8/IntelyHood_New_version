"use client";

import React from "react";
import GalaxyBackground from "@/components/GalaxyBg"; // aapka galaxy bg component

import { services } from "@/utilities/data";
import { FlipCard } from "@/components/FlipCard";
 // FlipCard ko alag rakha hai

export default function ServicesPage() {
 

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <GalaxyBackground />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Page Header */}
        <div className="text-center py-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-text-light">
            Our <span className="text-text-inverse">Services</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-text-light/80">
            We craft modern digital solutions for businesses of all sizes.
            Hover or tap a card to explore more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((c, i) => (
            <FlipCard key={i} {...c} />
          ))}
        </div>
      </div>
    </main>
  );
}
