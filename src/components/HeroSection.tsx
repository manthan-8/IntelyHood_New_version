"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HackingParticlesLogo() {
    const particles = Array.from({ length: 200 }, (_, i) => {
        // Use viewport-relative positioning for better responsiveness
        const startX = (Math.random() - 0.5) * 100; // -50vw to 50vw
        const startY = (Math.random() - 0.5) * 100; // -50vh to 50vh
        const endX = (Math.random() - 0.5) * 100;
        const endY = (Math.random() - 0.5) * 100;

        return {
            id: i,
            startX,
            startY,
            endX,
            endY,
            delay: Math.random() * 5,
            duration: 4 + Math.random() * 4,
        };
    });

    return (
        <section className="relative min-h-screen px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-20 bg-black text-white overflow-hidden">
            <div className="container max-w-screen-xl mx-auto h-full">
                <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 sm:gap-12">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Pulse Background - Responsive sizes */}
                        <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full bg-cyan-400/80 blur-2xl sm:blur-3xl"
                        />

                        {/* Orbits - Responsive sizes */}
                        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full orbit1 z-10"></div>
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full orbit2 z-0"></div>

                        {/* Logo - Responsive sizes */}
                        <motion.img
                            src="/logo.png"
                            alt="Patch Line Logo"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 z-20 relative drop-shadow-[0_0_15px_cyan] sm:drop-shadow-[0_0_25px_cyan] md:drop-shadow-[0_0_30px_cyan]"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex flex-col items-center text-center px-4 max-w-4xl">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold z-20 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Welcome to <span className="text-text-inverse">Patch Line</span>
                        </motion.h1>
                        
                        <motion.p
                            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-text-light/80 z-20 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Empowering innovation with futuristic hacking vibes ⚡
                        </motion.p>

                        {/* CTA Button - Responsive sizing */}
                        <motion.button
                            className="mt-6 sm:mt-8 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 bg-text-inverse/90 hover:bg-cyan-600 text-black font-semibold rounded-lg shadow-lg z-20 text-sm sm:text-base transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Floating Particles - Responsive positioning */}
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-text-inverse rounded-full shadow-[0_0_5px_cyan] sm:shadow-[0_0_8px_cyan] md:shadow-[0_0_10px_cyan]"
                            initial={{ 
                                x: `${p.startX}vw`, 
                                y: `${p.startY}vh`, 
                                opacity: 0.6, 
                                scale: 0.5 
                            }}
                            animate={{
                                x: `${p.endX}vw`,
                                y: `${p.endY}vh`,
                                opacity: 0,
                                scale: 0,
                            }}
                            transition={{
                                duration: p.duration,
                                delay: p.delay,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}