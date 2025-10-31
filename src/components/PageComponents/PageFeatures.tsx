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
    <section className="bg-black text-white py-24 px-8 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {features.map((feature, i) => (
            <div
              key={i}
              className="w-full max-w-sm rounded-2xl bg-[#0d0d0d] border border-gray-700 p-7 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              <div className="flex gap-5 items-center mb-4">
<div className="flex items-center justify-center">
  <Image
    src={feature.icon}
    alt={feature.title}
    width={40}
    height={40}
    className="rounded-full object-cover"
  />
</div>


                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <span className="inline-block bg-gray-800 text-gray-300 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-gray-600 mt-1 w-fit">
                      {feature.subtitle}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
