"use client";
import GalaxyBackground from "./GalaxyBg";
import { services } from "@/utilities/data";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // default icon if needed

export function ServiceCard() {
  return (
    <section className="relative px-6 py-20 bg-black text-white overflow-hidden">
      <GalaxyBackground />

      <div className="container max-w-screen-xl mx-auto relative z-10">
        <div className="space-y-20">
          {/* Heading */}
          <div className="space-y-5 text-center">
            <h1 className="text-white font-bold tracking-tight sm:text-5xl text-3xl">
              Our <span className="text-gray-400">Services</span>
            </h1>
            <p className="text-sm text-gray-300">
              We craft modern digital solutions for businesses of all sizes.
              Hover over a card to explore more.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-6 rounded-2xl border border-gray-700 bg-black/60 backdrop-blur-sm 
                           hover:bg-black/80 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center text-white mb-4">
                  <c.icon className="text-3xl text-white-400" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {c.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{c.subtitle}</p>

                {/* Features list */}
                <ul className="text-gray-300 text-sm space-y-1">
                  {c.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-gray-400">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
