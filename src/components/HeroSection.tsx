"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 bg-black text-white overflow-hidden">
      
      {/* ✅ Left Side - Text Content (70%) */}
      <div className="mt-20 flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[70%] w-full z-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Accelerate <span className="text-white">AI Innovation.</span>
          <br />
          Build Smarter Intelligence.
          <br />
          Vetted Tech Talents.
        </motion.h1>

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Train, fine-tune, and deploy next-generation AI models that redefine
          what’s possible.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-3xl shadow-lg hover:bg-gray-200 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => router.push("/form")} // 👈 navigate to form page
        >
          Get Started →
        </motion.button>
      </div>

      {/* ✅ Right Side - Video Animation (30%) */}
      <motion.div
        className="relative mt-10 lg:mt-0 flex justify-center lg:w-[30%] w-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 1.2 }}
      >
        <video
          src="genaiAnimation.webm" // <-- replace with your animation/video file
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl w-full max-w-sm filter grayscale h-[500px] object-cover"
        />
      </motion.div>

      {/* ✅ Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
