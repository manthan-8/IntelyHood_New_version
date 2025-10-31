"use client";
import Image from "next/image";

interface InfoSplitSectionProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // if true → image on left, text on right
  backgroundColor?: string;
  textColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function InfoSplitSection({
  title,
  imageSrc,
  imageAlt = "Information image",
  reverse = false,
  backgroundColor = "bg-black",
  textColor = "text-white",
  gradientFrom = "from-black",
  gradientTo = "to-gray-800",
}: InfoSplitSectionProps) {
  return (
    <section
      className={`${backgroundColor} ${textColor} px-6 md:px-20 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-12`}
    >
      {/* Left / Right Text Block */}
      <div
        className={`md:w-1/2 h-[500px] flex justify-center items-center bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl p-6`}
      >
        <h4 className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 text-center md:text-left">
          {title}
        </h4>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-2xl overflow-hidden bg-[#0f0f0f] p-4 shadow-[0_0_80px_rgba(255,255,255,0.05)] h-[500px] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="rounded-2xl object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}