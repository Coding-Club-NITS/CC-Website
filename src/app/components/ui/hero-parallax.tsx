"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WavyBackground } from "../ui/wave";
import AnimatedPin from "../sample3d";
import HSI from "./horizontalScrollImages";
import ProductCard from "@/app/components/ui/langLogos";
import event from "@/data/newEvent.json";
import Link from "next/link";
import Logo from "@/app/components/logo";
import Header from "./headerHome";
import ImageParallax from "../imageParalax";
import VelocityText from "./velocityText";
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
      {event.visible && (
        <motion.button
          className="p-6 m-5 z-50 sticky top-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <Link href="/register">
            <div className="px-8 py-5 hover:bg-red-500 bg-gradient-to-r from-indigo-500 to-purple-500  transition duration-2000 text-white animate-bounce ">
              {event.title}
            </div>
          </Link>
        </motion.button>
      )}

      <WavyBackground className="max-w-4xl mx-auto pb-40 mt-5">
        <Logo />
      </WavyBackground>

      <div
        ref={ref}
        className="h-[220vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <div className="bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-900/60 to-black" />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
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

      <VelocityText />
      <HSI />
      <div className="flex flex-col justify-around sm:flex-row">
        <AnimatedPin />
      </div>
      <ImageParallax />
    </>
  );
};
