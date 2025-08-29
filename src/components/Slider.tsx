import React from "react";
import Image, { StaticImageData } from "next/image";

interface SliderProps {
  images: (string | StaticImageData)[];
  direction: "left" | "right";
}

const Slider: React.FC<SliderProps> = ({ images, direction }) => {
  return (
    <div className={`flex animate-slide-${direction}`}>
      <div className="flex space-x-8 min-w-full">
        {images.map((client, index) => (
          <div
            key={index}
            className=" rounded-lg bg-white/90 p-5 text-center group  transition-colors flex-shrink-0"
          >
            <Image
              src={client}
              alt={`Client ${index + 1}`}
              height={80}
              width={200}
              className="mx-auto transition-all duration-300 object-contain"
            />
          </div>
        ))}
        {images.map((client, index) => (
          <div
            key={`duplicate-${index}`}
            className="bg-white/90 rounded-lg p-5 text-center group flex-shrink-0"
          >
            <Image
              src={client}
              alt={`Client duplicate ${index + 1}`}
              height={80}
              width={200}
              className="mx-auto transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
