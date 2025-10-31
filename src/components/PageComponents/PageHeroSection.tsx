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
  reverse?: boolean; // <-- new prop
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
      className={`bg-black text-white min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-20 md:flex-row md:justify-between ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left (or Right if reversed) */}
      <div className="max-w-xl text-center md:text-left relative">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">{subtitle}</p>

        <a href={buttonLink}>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            {buttonText} →
          </button>
        </a>

        {bottomText && (
          <p className="absolute bottom-10 text-sm text-gray-400 text-center w-full">
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
      <div className="mt-10 md:mt-0">
  {imageSrc ? (
    <Image
      src={imageSrc}
      alt="AI visualization"
      width={500}
      height={500}
      className="object-contain"
    />
  ) : (
    <video
      src={videoSrc || "/defaultVideo.mp4"} // fallback video if needed
      autoPlay
      loop
      muted
      playsInline
      className="object-contain rounded-2xl w-full max-w-sm h-[500px] object-cover"
    />
  )}
</div>

    </section>
  );
}