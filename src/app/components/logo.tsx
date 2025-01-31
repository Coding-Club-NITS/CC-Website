"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import event from "@/data/newEvent.json";
import Link from "next/link";

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

      {event.visible && (
        <motion.button
          className="p-6 m-5 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <Link href="/register">
            <div className="px-8 py-5 hover:bg-red-500 bg-gradient-to-r from-indigo-500 to-purple-500 rounded relative transition duration-2000 text-white animate-bounce">
              {event.title}
            </div>
          </Link>
        </motion.button>
      )}
    </motion.div>
  );
}
