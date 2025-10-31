"use client";

interface QuoteSectionProps {
  quote: string;
  author: string;
  designation?: string;
  backgroundColor?: string;
  textColor?: string;
  cardColor?: string;
}

export default function QuoteSection({
  quote,
  author,
  designation,
  backgroundColor = "bg-black",
  textColor = "text-white",
  cardColor = "bg-[#0f0f0f]",
}: QuoteSectionProps) {
  return (
    <section
      className={`${backgroundColor} ${textColor} py-14 px-6 md:px-16 flex justify-center`}
    >
      <div
        className={`${cardColor} rounded-2xl p-10 md:p-16 shadow-[0_0_60px_rgba(255,255,255,0.05)] text-center max-w-5xl`}
      >
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
          {quote}
        </p>
        <div>
          <h3 className="text-lg font-semibold mb-1">{author}</h3>
          {designation && (
            <p className="text-gray-400 text-sm">{designation}</p>
          )}
        </div>
      </div>
    </section>
  );
}