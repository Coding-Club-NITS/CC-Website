"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const AchivementBoard = () => {
  return (
    <div className="border-8 border-brown-900 p-4 bg-neutral-900 shadow-xl rounded-lg m-2">
      <div className="relative w-full h-full border-4 border-brown-700 flex items-center justify-center">
        <section className="relative grid min-h-screen w-full place-content-center text-center overflow-hidden bg-neutral-950">
          <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
            Top Achievements<span className="text-yellow-500">.</span>
          </h2>
          <Cards />
        </section>
      </div>
    </div>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="0%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="12deg"
        top="20%"
        left="20%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="8deg"
        top="20%"
        left="70%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="18deg"
        top="60%"
        left="25%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="60%"
        left="65%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({ containerRef, src, top, left, rotate, className }: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
      className={twMerge(
        "drag-elements absolute text-black bg-neutral-200 p-1 pb-4 min-h-[40vh] min-w-[20vw] group overflow-hidden rounded-xl shadow-lg",
        className
      )}
      //   src={src}
      //   alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    >
      {/* <img src={src} alt={alt} className="drag-elements" /> */}

      <div className="absolute inset-0 bg-black/40 group-hover:backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4  text-white">
        <h1 className="mb-2 text-4xl font-bold">Achievement</h1>
        <h3 className="mb-2 font-bold">Name</h3>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          cumque?
        </p>
      </div>
    </motion.div>
  );
};

export default AchivementBoard;
