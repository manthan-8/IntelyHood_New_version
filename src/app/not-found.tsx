import GalaxyBackground from "@/components/GalaxyBg";
import Button from "@/templates/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <GalaxyBackground />

      <div className="relative z-10 text-center px-6 py-12">
        {/* 404 Illustration */}
        <div className="flex items-center justify-center space-x-4">
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-white opacity-80">
            4
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Sad Robot"
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 grayscale contrast-125 opacity-90"
          />
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-white opacity-80">
            4
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-200">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
          Looks like our little robot lost connection to this page.  
          Don’t worry — let’s get you back home.
        </p>
        
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-90" />
    </section>
  );
};

export default NotFound;
