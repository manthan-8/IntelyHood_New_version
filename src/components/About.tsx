"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaCode,
  FaIndustry,
  FaFlask,
  FaImage,
  FaDatabase,
  FaLock,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";
import GalaxyBackground from "./GalaxyBg";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-black text-white overflow-hidden">
      <GalaxyBackground />

      <div className="relative z-10 container mx-auto max-w-screen-xl flex flex-col items-center gap-20">
        {/* 🔬 Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Bridging <span className="text-white/80">AI Research</span> & Real-World Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">IntelyHood</span> partners with research labs and enterprises
            to bridge the gap between AI research and real-world results.  
            We help organizations train, deploy, and optimize intelligent systems  
            that deliver measurable business value.
          </p>
        </motion.div>

        {/* 🧩 Core Capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl"
        >
          <h3 className="text-center text-3xl sm:text-4xl font-bold mb-12">
            Our <span className="text-white/80">Core Capabilities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
  title: "Train Custom AI Models",
  desc: "Design, train, and fine-tune powerful AI models using proprietary datasets and reinforcement learning environments — built for precision and scalability.",
  icon: FaBrain,
},
{
  title: "Deploy Intelligent Systems",
  desc: "Transform research into real-world impact by deploying optimized, production-ready AI models that deliver consistent, high-performance results.",
  icon: FaRobot,
},
{
  title: "Hire Top AI Talent",
  desc: "Collaborate with world-class AI engineers, data scientists, and researchers to accelerate innovation and product development within your organization.",
  icon: FaIndustry,
},
{
  title: "AI Data Annotation & Labeling",
  desc: "Leverage human-in-the-loop precision to build high-quality datasets that power accurate, efficient, and unbiased AI model training.",
  icon: FaDatabase,
},
{
  title: "Cloud-Based AI Infrastructure",
  desc: "Deploy scalable AI workloads in secure, high-performance cloud environments designed for distributed training, fine-tuning, and deployment.",
  icon: FaCloud,
},
{
  title: "AI Ethics, Safety & Compliance",
  desc: "Build responsible AI with transparency, fairness, and data security — ensuring every deployment aligns with global safety and ethical standards.",
  icon: FaLock,
},

            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="p-6 border border-gray-800 rounded-2xl bg-gray-900/40 backdrop-blur-md text-center shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all"
              >
                <div className="flex justify-center mb-4 text-white/80">
                  <item.icon size={40} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/solutions"
              className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-medium rounded-lg shadow-lg transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>

        {/* 📦 Key Domains */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl"
        >
          <h3 className="text-center text-3xl sm:text-4xl font-bold mb-12">
            Key <span className="text-white/80">Domains</span> of Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: "Coding AI",
                desc: "Code understanding, generation & debugging.",
              },
              {
                icon: FaFlask,
                title: "STEM Intelligence",
                desc: "Physics, chemistry, biology & math models.",
              },
              {
                icon: FaImage,
                title: "Multimodal AI",
                desc: "Image, text, audio & video understanding.",
              },
              {
                icon: FaIndustry,
                title: "Enterprise AI",
                desc: "Finance, healthcare, legal, and industrial AI.",
              },
              {
                icon: FaRobot,
                title: "Robotics",
                desc: "Simulation, sensor data & embodied AI systems.",
              },
              {
                icon: FaChartLine,
                title: "Predictive Analytics",
                desc: "Data-driven insights and trend forecasting.",
              },
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-800 rounded-2xl bg-gray-900/40 backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <domain.icon className="text-white/80" size={30} />
                  <h4 className="text-xl font-semibold">{domain.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
