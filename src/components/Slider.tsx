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
        className={`flex gap-8 animate-scroll ${
          direction === "right" ? "animate-scroll-reverse" : ""
        }`}
      >
        {/* 👇 images ko 2 bar map karo taki infinite loop lag sake */}
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 h-20 relative bg-white rounded-lg shadow-sm p-2"
          >
            <Image
              src={img}
              alt={`client-${idx}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
