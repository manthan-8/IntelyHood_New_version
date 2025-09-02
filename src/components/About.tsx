"use client";
import { motion } from "framer-motion";
import GalaxyBackground from "./GalaxyBg";
import { reasons } from "@/utilities/data";


export function WhyChooseUs() {
  return (
    <section className="relative px-6 py-15 lg:py-20">
      <div className="container max-w-screen-xl mx-auto overflow-hidden">
      <GalaxyBackground />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-12 items-center h-full justify-center text-white">
        {/* Left Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Why <span className="text-text-inverse">Choose Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-text-light">
            We craft experiences that drive growth, innovation, and trust. Here's why businesses rely on us.
          </p>
        </div>

        {/* Right Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/40 text-text-inverse"
                >
                  <Icon size={24} />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">{r.title}</h4>
                  <p className="mt-1 text-sm text-white/80">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
