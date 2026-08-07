"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-1 w-full bg-white/5"
    >
      <motion.div
        className="
          h-full
          w-full
          origin-left
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-orange-500
          shadow-[0_0_14px_rgba(249,115,22,0.65)]
        "
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
}