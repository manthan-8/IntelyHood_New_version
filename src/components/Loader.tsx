"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function VideoLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => setShowLoader(false), 1000);
    }, 2500); // video duration before sliding
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Loader Video */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: slideOut ? 0 : 1,
              x: slideOut ? "-100%" : 0,
              transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            }}
            exit={{ opacity: 0 }}
          >
            <video
              src="/animate.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-cyan-400">Intelyhood</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl">
          Building the future of AI — one model at a time.
        </p>
      </motion.div>
    </div>
  );
}
