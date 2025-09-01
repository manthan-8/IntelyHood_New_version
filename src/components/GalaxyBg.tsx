"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GalaxyBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
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
    </div>
  );
}
