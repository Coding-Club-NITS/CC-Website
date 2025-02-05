"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Logo() {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const moveX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const moveY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-full flex flex-col justify-center items-center"
      style={{
        x: moveX,
        y: moveY,
        rotateX,
        rotateY,
      }}
    >
      <motion.img
        src="/CC-logo.png"
        alt="Logo"
        className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="absolute bottom-0 mb-16 text-2xl md:text-4xl lg:text-7xl text-gray-900 dark:text-white font-bold inter-var text-center font-monoton">
        <div className="w-full flex justify-center">
          <motion.span
            initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="text-4xl lg:text-7xl font-bold tracking-wider"
          >
            Coding
          </motion.span>
        </div>

        <div className="w-full flex justify-center">
          <motion.span
            initial={{ opacity: 0, rotateX: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="text-4xl lg:text-7xl font-bold tracking-wider"
          >
            Club
          </motion.span>
        </div>
      </div>

      <motion.p
        className="text-base md:text-4xl mt-0 text-gray-700 dark:text-white font-normal inter-var text-center font-keania-one"
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      >
        NIT Silchar
      </motion.p>
    </motion.div>
  );
}
