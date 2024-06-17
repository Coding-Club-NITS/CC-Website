import React from "react";
import { FlipWords } from "./ui/type";

export function FlipWordsDemo() {
  const words = ["life", "art", "beauty", "passion"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 pb-10">
      <div className="text-4xl mx-auto font-normal text-red-600 dark:text-black-600">
        Coding is
        <FlipWords words={words} className="text-yellow-500 dark:text-black-600" /> <br />
      </div>
    </div>
  );
}
