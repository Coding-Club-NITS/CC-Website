"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WavyBackground } from "../ui/wave";

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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

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
  return (
    <>
     {/* Navbar begins here */}
    <nav className="absolute w-full z-10 pt-5 pr-5">
  <div className="flex items-center justify-between">
    <a href="#"
      className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
      
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500">
          <a href="#" className="flex items-center transition-colors hover:text-red-500">
            Pages
          </a>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500">
          <a href="#" className="flex items-center transition-colors hover:text-red-500">
            Account
          </a>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500">
          <a href="#" className="flex items-center transition-colors hover:text-red-500">
            Blocks
          </a>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500">
          <a href="#" className="flex items-center transition-colors hover:text-red-500">
            Docs
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<WavyBackground className="max-w-4xl mx-auto pb-40 mt-5">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Welcome
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        to the official website of Coding Club NIT Silchar
      </p>
    </WavyBackground>
{/* navbar ends here */}
    <div
      ref={ref}
      className="h-[300vh] py-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row  mb-10 space-x-20 ">
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
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        <div className="text-red-800">Coding Club</div><div className="text-yellow-500">NIT Silchar</div>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Welcome to the Coding Club of NITS! Join us to explore, learn, and innovate with like-minded enthusiasts. Dive into coding challenges, projects, and events that fuel your passion for technology and development
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
        className="block group-hover/product:shadow-2xl "
      >
        <Image
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
