"use client";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogosSectionProps {
  backgroundColor?: string;
  textColor?: string;
  tagText?: string;
  heading: string;
  description: string;
}

export default function LogosSection({
  backgroundColor = "bg-black",
  textColor = "text-white",
  tagText,
  heading,
  description,
}: LogosSectionProps) {
  return (
    <section
      className={`${backgroundColor} ${textColor} py-10 px-6 md:px-20 text-center`}
    >

      {/* Text Content */}
      <div className="max-w-3xl mx-auto">
        {tagText && (
          <p className="text-gray-400 tracking-widest text-xs mb-4 uppercase">
            {tagText}
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">{heading}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  );
}