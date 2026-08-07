"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const background = useMotionTemplate`
    radial-gradient(
      420px circle at ${smoothX}px ${smoothY}px,
      rgba(37, 99, 235, 0.14),
      rgba(249, 115, 22, 0.07) 35%,
      transparent 70%
    )
  `;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseLeave = () => {
      mouseX.set(-500);
      mouseY.set(-500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[40]
        hidden
        lg:block
      "
      style={{
        background,
      }}
    />
  );
}