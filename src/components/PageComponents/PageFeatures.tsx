"use client";
import Image from "next/image";

interface Feature {
  icon: string;
  title: string;
  desc: string;
  subtitle?: string;
}

export default function FeaturesSection({ features }: { features: Feature[] }) {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {features.map((feature, i) => (
            <div
              key={i}
              className="w-full max-w-xs rounded-xl bg-black border border-gray-700 p-5 hover:border-white/60 transition-all duration-300 shadow-lg"
            >
              <div className="flex gap-4 items-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={20}
                    height={20}
                    className="opacity-90"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <span className="inline-block bg-gray-800 text-gray-300 text-[10px] font-medium px-2 py-0.5 rounded-md border border-gray-600 mt-1 w-fit">
                      {feature.subtitle}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed mt-2">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
