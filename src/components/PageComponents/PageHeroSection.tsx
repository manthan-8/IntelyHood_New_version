"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc?: string;
  videoSrc?: string;
  bottomText?: string;
  bottomLinkText?: string;
  bottomLink?: string;
  reverse?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  imageSrc,
  videoSrc,
  bottomText,
  bottomLinkText,
  bottomLink = "#",
  reverse = false,
}: HeroProps) {
  return (
    <section
      className={`bg-black text-white min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-14 pt-12 md:pt-8 lg:pt-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left (or Right if reversed) */}
      <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
          {subtitle}
        </p>

        <a href={buttonLink}>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-transform transform hover:scale-105">
            {buttonText} →
          </button>
        </a>

        {bottomText && (
          <p className="mt-10 text-sm text-gray-400 text-center md:text-left">
            {bottomText}{" "}
            {bottomLinkText && (
              <a
                href={bottomLink}
                className="text-white underline hover:text-gray-300"
              >
                {bottomLinkText} →
              </a>
            )}
          </p>
        )}
      </div>

      {/* Right (or Left if reversed) */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-10 md:mb-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="AI visualization"
            width={500}
            height={500}
            className="object-contain w-[80%] sm:w-[60%] md:w-[90%] lg:w-[500px] mx-auto rounded-2xl"
            priority
          />
        ) : (
          <video
            src={videoSrc || "/defaultVideo.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover rounded-2xl w-[80%] sm:w-[60%] md:w-[90%] lg:w-[500px] mx-auto shadow-lg"
          />
        )}
      </div>
    </section>
  );
}
