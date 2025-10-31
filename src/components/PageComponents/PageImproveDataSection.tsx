"use client";

interface ImproveDataSectionProps {
  tagText?: string;
  title: string;
  subtitle?: string;
  highlightColor?: string;
  backgroundFrom?: string;
  backgroundVia?: string;
  backgroundTo?: string;
  textColor?: string;
  minHeight?: string;
}

export default function ImproveDataSection({
  tagText = "BUILD AI",
  title,
  subtitle,
  highlightColor = "text-sky-400",
  backgroundFrom = "from-black",
  backgroundVia = "via-[#0a0a0a]",
  backgroundTo = "to-black",
  textColor = "text-white",
}: ImproveDataSectionProps) {
  return (
    <section
      className={`relative flex flex-col justify-center items-center text-center ${textColor} py-30 bg-black px-4`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${backgroundFrom} ${backgroundVia} ${backgroundTo} opacity-70 -z-10`}
      ></div>

      {/* Text Content */}
      <div className="max-w-4xl z-10">
        {tagText && (
          <p className={`${highlightColor} text-sm tracking-[0.2em] mb-6`}>
            {tagText}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}