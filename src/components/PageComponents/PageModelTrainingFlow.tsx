"use client";
import Image from "next/image";

interface ModelTrainingFlowProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  note?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function ModelTrainingFlow({
  title,
  imageSrc,
  imageAlt = "Training Flow Diagram",
  note,
  backgroundColor = "bg-[#0a0a0a]",
  textColor = "text-white",
}: ModelTrainingFlowProps) {
  return (
    <section className={`${backgroundColor} ${textColor} py-20 px-6 md:px-20 text-center`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">{title}</h2>

        <div className="flex justify-center overflow-hidden rounded-2xl shadow-lg h-[500px]">
  <Image
    src={imageSrc}
    alt={imageAlt}
    width={1300}
    height={600}
    className="object-cover w-full h-full"
  />
</div>


        {note && (
          <p className="text-gray-400 text-sm mt-8 max-w-2xl mx-auto">{note}</p>
        )}
      </div>
    </section>
  );
}