"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.5, color: "red" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, color: "white" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-red-300 to-red-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  md:text-7xl"
      >
        Team <br /> Members
      </motion.h1>
    </LampContainer>
  );
}
