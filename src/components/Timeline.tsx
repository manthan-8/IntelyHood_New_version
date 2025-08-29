"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: 1, title: "Step 1", desc: "This is the first step of the process." },
  { id: 2, title: "Step 2", desc: "This is the second step with more details." },
  { id: 3, title: "Step 3", desc: "Here comes the third step." },
  { id: 4, title: "Step 4", desc: "Almost there! This is step four." },
  { id: 5, title: "Step 5", desc: "The final step is revealed here." },
];

export default function ScrollSteps() {
  return (
    <div className="relative w-full bg-gray-950 text-white">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 -translate-x-1/2" />

      <div className="h-[500vh] relative">
        {steps.map((step, i) => (
          <StepCard key={step.id} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}

function StepCard({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const isLeft = index % 2 === 0; // alternate left/right

  return (
    <div className="sticky top-0 h-screen flex items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`bg-gray-800/70 border border-gray-600 shadow-xl rounded-2xl p-8 max-w-md absolute top-1/2 -translate-y-1/2 ${
          isLeft ? "right-1/2 mr-16 text-right" : "left-1/2 ml-16 text-left"
        }`}
      >
        <h2 className="text-3xl font-bold mb-3 text-cyan-400">
          {step.title}
        </h2>
        <p className="text-lg text-gray-300">{step.desc}</p>
      </motion.div>

      {/* Connector dot */}
      <span className="absolute left-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-950 -translate-x-1/2" />
    </div>
  );
}
