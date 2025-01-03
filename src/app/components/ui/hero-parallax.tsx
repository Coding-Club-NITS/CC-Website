"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { WavyBackground } from "../ui/wave";
import AnimatedPin from "../sample3d";
import event from "@/data/newEvent.json";

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

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40 mt-5">
        <motion.div
          className="relative w-full flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <motion.img
            src="/CC-logo.png"
            alt="Logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute bottom-0 mb-16 text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center font-monoton">
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
        </motion.div>

        <motion.p
          className="text-base md:text-4xl mt-0 text-white font-normal inter-var text-center font-keania-one"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
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
      </WavyBackground>

      <div
        ref={ref}
        className="h-[300vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <div className="absolute left-0 z-40 flex space-x-4">
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
                translateX.set(Math.max(translateX.get() - 500, -1000));
                translateXReverse.set(
                  Math.min(translateXReverse.get() + 500, 1000)
                );
              }}
              className="p-4 bg-red-500 bg-opacity-70 text-white rounded-full hover:bg-red-600 transition"
            >
              ➡
            </button>
          </div>

          <motion.div className="flex flex-row mb-10 space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        <div className="text-red-800">Coding Club</div>
        <div className="text-yellow-500">NIT Silchar</div>
      </h1>
      <div className="absolute top-200 left-100 flex flex-col pt-10 mt-10 sm:flex-row">
        <AnimatedPin />
      </div>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        The Coding Club at NIT Silchar fosters a vibrant community for
        programming enthusiasts. It offers workshops and coding contests,
        encouraging students to enhance their coding skills, collaboration,
        teamwork, and stay updated with the latest technology trends.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
