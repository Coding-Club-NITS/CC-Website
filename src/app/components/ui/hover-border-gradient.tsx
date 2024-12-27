// src/components/ui/hover-border-gradient.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];

const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 50%, rgba(55, 2, 25, 0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 50%, rgba(55, 2, 25, 0) 100%)",
  BOTTOM:
    "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 50%, rgba(55, 2, 25, 0) 100%)",
  RIGHT:
    "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 50%, rgba(55, 2, 25, 0) 100%)",
};

const highlight: string =
  "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(55, 2, 0, 1) 50%)";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: string;
  duration?: number;
  clockwise?: boolean;
  style?: React.CSSProperties; // Add this line to support style prop
}

export function HoverBorderGradient({
  children,
  containerClassName = "",
  className = "",
  // as: Component = "button",
  duration = 1,
  clockwise = true,
  style, // Add this to the destructured props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style} // Add this line to pass the style prop
      className={`relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit ${containerClassName}`}
    >
      <div
        className={`w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit] ${className}`}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </div>
  );
}