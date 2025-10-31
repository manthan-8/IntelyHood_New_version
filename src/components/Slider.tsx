"use client";

import React from "react";
import Image from "next/image";

interface SliderProps {
  images: string[];
  direction?: "left" | "right";
}

export default function Slider({ images, direction = "left" }: SliderProps) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-16 whitespace-nowrap ${
          direction === "right" ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 relative w-28 h-14 sm:w-40 sm:h-16"
          >
            <Image
              src={img}
              alt={`client-${idx}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 160px"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
