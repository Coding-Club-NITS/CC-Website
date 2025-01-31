"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { WavyBackground } from "../ui/wave";
import AnimatedPin from "../sample3d";
import HSI from "./horizontalScrollImages";
import ProductCard from "@/app/components/ui/langLogos";
import Logo from "@/app/components/logo";
import Header from "./headerHome";
import ImageParallax from "../imageParalax";
export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 150, damping: 35, bounce: 0.5 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [50, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 2], [-900, -250, 900]),
    springConfig
  );
  const translateYReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 1], [900, 250, -900]),
    springConfig
  );

  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40 mt-5">
        <Logo />
      </WavyBackground>
      <HSI />
      <div
        ref={ref}
        className="h-[220vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {firstRow.map((product) => (
              <div className="p-5 m-2">
                <ProductCard
                  product={product}
                  translate={translateY}
                  key={product.title}
                />
              </div>
            ))}
          </motion.div>
          {/* <div className="absolute left-0 z-40 flex space-x-4">
            <button
              onClick={() => {
                translateX.set(Math.min(translateX.get() + 500, 1500));
                translateXReverse.set(
                  Math.max(translateXReverse.get() - 500, -1500)
                );
              }}
              className="p-4 bg-red-500 bg-opacity-70 text-white rounded-full hover:bg-red-600 transition"
            >
              ⬅
            </button>
          </div>
          <div className="absolute right-0 z-40 flex space-x-4">
            <button
              onClick={() => {
                translateX.set(Math.max(translateX.get() - 500, -100));
                translateXReverse.set(
                  Math.min(translateXReverse.get() + 500, 100)
                );
              }}
              className="p-4 bg-red-500 bg-opacity-70 text-white rounded-full hover:bg-red-600 transition"
            >
              ➡
            </button>
          </div> */}

          <motion.div className="flex flex-row space-x-20">
            {secondRow.map((product) => (
              <div className="p-5 m-2">
                <ProductCard
                  product={product}
                  translate={translateYReverse}
                  key={product.title}
                />
              </div>
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <div className="p-5 m-2">
                <ProductCard
                  product={product}
                  translate={translateY}
                  key={product.title}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-around sm:flex-row">
        <AnimatedPin />
      </div>
      <ImageParallax />
    </>
  );
};
