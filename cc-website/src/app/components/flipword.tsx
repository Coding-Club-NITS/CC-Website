import React from "react";
import { FlipWords } from "./ui/type";

export function FlipWordsDemo() {
  const words = ["life", "art", "beautiful", "passion"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Coding is
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
