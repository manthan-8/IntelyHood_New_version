"use client";
import Image from "next/image";

interface Card {
  title: string;
  subtitle?: string;
  desc: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
}

interface LegendItem {
  color: string;
  text: string;
}

interface CardsSectionProps {
  cards: Card[];
  stats?: Stat[];
  mapImageSrc?: string;
  mapAlt?: string;
  legends?: LegendItem[];
  backgroundColor?: string;
  textColor?: string;
}

export default function CardsSection({
  cards,
  stats = [],
  mapImageSrc,
  mapAlt = "Map Image",
  legends = [],
  backgroundColor = "bg-black",
  textColor = "text-white",
}: CardsSectionProps) {
  return (
    <section
      className={`relative ${backgroundColor} ${textColor} py-24 px-6 md:px-12 lg:px-20 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-stretch">
        {/* ✅ Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1 min-h-[500px] lg:min-h-[600px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-full max-w-xs rounded-xl bg-black border border-gray-700 p-5 hover:border-white/60 transition-all duration-300 shadow-lg mx-auto"
            >
              <div className="flex gap-4 items-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  {card.subtitle && (
                    <span className="inline-block bg-gray-800 text-gray-300 text-[10px] font-medium px-2 py-0.5 rounded-md border border-gray-600 mt-1 w-fit">
                      {card.subtitle}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Right Info Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-10 flex-1">
          {/* Stats */}
          {stats.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h2 className="text-4xl font-bold mb-2">{stat.value}</h2>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Map Section */}
          {mapImageSrc && (
            <div className="w-full max-w-xl">
              <Image
                src={mapImageSrc}
                alt={mapAlt}
                width={600}
                height={400}
                className="opacity-90 w-full"
              />

              {/* Legend */}
              {legends.length > 0 && (
                <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400 flex-wrap">
                  {legends.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full`}
                        style={{ backgroundColor: item.color }}
                      ></span>
                      {item.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
