import React from "react";
import { BackgroundLines } from "./ui/bglines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black/50">
      <h2 className="bg-clip-text text-center bg-gradient-to-b  text-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        The Alumini Page of <br /> Coding Club NITS!!
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Leagacy of the past seniors and their contribution to the club will
        never be forgotten.
      </p>
    </BackgroundLines>
  );
}
