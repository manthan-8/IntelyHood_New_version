"use client";

import Image from "next/image";

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface CollectionSectionProps {
  data: CardData[];
}

export default function CollectionSection({ data }: CollectionSectionProps) {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-[250px]"
              />
            </div>
            <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}