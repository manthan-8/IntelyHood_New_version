"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdStar, MdPeople, MdTrendingUp, MdCode } from "react-icons/md";
import GalaxyBackground from "@/components/GalaxyBg";
import { FlipCard } from "@/components/FlipCard";
import { Border } from "@/components/Broder";
import { cardData, values } from "@/utilities/data";
import { Contact } from "@/components/Contact";

type TabType = "mission" | "vision" | "story";
type CounterKeys = "projects" | "clients" | "experience" | "satisfaction";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<CounterKeys, number>>({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  });

  const stats = [
    {
      key: "projects" as CounterKeys,
      label: "Projects Delivered",
      target: 480,
      suffix: "+",
      icon: MdCode,
      color: "text-white",
    },
    {
      key: "clients" as CounterKeys,
      label: "Satisfied Clients",
      target: 200,
      suffix: "+",
      icon: MdPeople,
      color: "text-white",
    },
    {
      key: "experience" as CounterKeys,
      label: "Years of Expertise",
      target: 8,
      suffix: "+",
      icon: MdTrendingUp,
      color: "text-white",
    },
    {
      key: "satisfaction" as CounterKeys,
      label: "Client Satisfaction",
      target: 98,
      suffix: "%",
      icon: MdStar,
      color: "text-white",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounters = () => {
      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }, 30);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black text-white px-6 pb-20 pt-32 lg:pb-32 lg:pt-40">
      <GalaxyBackground />

      <div className="container max-w-screen-xl mx-auto overflow-hidden relative z-10">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <MdPeople className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium tracking-wide">
              About Intelyhood Technologies
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Innovation
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Through Technology
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-white">Intelyhood</span>, we help
            global clients design, build, and scale modern digital products.
            From AI-driven platforms to full-stack web applications, we transform
            ideas into reliable, scalable, and beautiful software solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="relative rounded-2xl overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <Border>
                <div className="p-6 text-center">
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} opacity-90 mx-auto mb-4`}
                  />
                  <div className="text-3xl font-bold mb-2">
                    {counters[stat.key]}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </Border>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-wrap gap-6 px-6 py-16 justify-center">
          {cardData.map((card) => (
            <ExplodeCard key={card.id} title={card.title} content={card.content} />
          ))}
        </div> */}

        {/* Core Values */}

          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400">
              We believe in transparency, innovation, and excellence that drive
              meaningful business outcomes.
            </p>
          </div> */}

          
        </div>
    </section>
  );
};

function ExplodeCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [showContent, setShowContent] = useState(false);

  const handleHoverEnter = () => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
    }));
    setParticles(newParticles);
    setShowContent(true);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleHoverLeave = () => setShowContent(false);

  return (
    <div
      className="relative border border-white/20 rounded-2xl p-8 w-1/2 md:w-1/4 flex items-center justify-center text-center overflow-hidden cursor-pointer bg-white/5 hover:bg-white/10 transition"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {!showContent && (
        <motion.h2
          initial={{ opacity: 1, scale: 1 }}
          animate={
            particles.length > 0
              ? { opacity: 0, scale: 1.5, rotate: 360 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-bold text-white z-10"
        >
          {title}
        </motion.h2>
      )}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-2 h-2 bg-white rounded-full"
        />
      ))}

      {showContent && particles.length === 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 leading-relaxed"
        >
          {content}
        </motion.p>
      )}
    </div>
  );
}

export default AboutUs;
