"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaShieldAlt, FaClock, FaDollarSign, FaHandsHelping } from "react-icons/fa";

const reasons = [
  { icon: FaUsers, title: "Expert Team", desc: "Certified professionals with proven industry experience." },
  { icon: FaLightbulb, title: "Innovation Driven", desc: "Cutting-edge solutions with AI & automation." },
  { icon: FaHandsHelping, title: "Customer-Centric", desc: "Tailored solutions, transparent communication, and support." },
  { icon: FaClock, title: "On-Time Delivery", desc: "Agile workflows ensure fast delivery without compromising quality." },
  { icon: FaShieldAlt, title: "Quality Assurance", desc: "Secure, scalable, and tested solutions for peace of mind." },
  { icon: FaDollarSign, title: "Affordable Pricing", desc: "Flexible pricing and high ROI on every project." },
];

export function WhyChooseUs() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <div className="galaxy-bg">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              top: `${s.y}%`,
              left: `${s.x}%`,
              width: s.size,
              height: s.size,
            }}
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-12 items-center h-full justify-center text-white">
        {/* Left Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Why <span className="text-[#00E7FF]">Choose Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
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
                  className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#00E7FF]/40 text-[#00E7FF]"
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
    </section>
  );
}
