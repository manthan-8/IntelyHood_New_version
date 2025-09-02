"use client";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-background-main flex items-center justify-center z-50">
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3),
                        0 0 40px rgba(6, 182, 212, 0.2),
                        0 0 60px rgba(6, 182, 212, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.5),
                        0 0 60px rgba(6, 182, 212, 0.3),
                        0 0 90px rgba(6, 182, 212, 0.2);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Loader Container */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          
          {/* Central Core */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-background-main via-background-main mask-b-to-background-dark border-2 border-primary-main/30 z-10 animate-[pulse-glow_3s_infinite]">
            
            {/* Inner Ring */}
            <div className="absolute inset-2 rounded-full border border-primary-main/20 bg-gradient-to-br from-background-dark/50 to-transparent"></div>
            
            {/* Reverse Scanning Effect */}
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary-main animate-spin"
              style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
            ></div>
            
            {/* Logo */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative z-10">
              <Image
                src="/logo-white.png"
                alt="Loading..."
                width={64}
                height={64}
                className="object-contain filter drop-shadow-lg"
                style={{ animation: "float 4s ease-in-out infinite" }}
              />
            </div>

            {/* Main Scanning Effect */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-main animate-spin"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
