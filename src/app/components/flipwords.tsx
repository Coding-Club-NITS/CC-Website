import React from "react";
import { FlipWords } from "./ui/type";

export function FlipWordsDemo() {
  const words = ["life", "art", "beauty", "passion"];

  return (
    <div className=" flex justify-center items-center rounded">
      <div className="text-4xl mx-auto font-extrabold text-yellow-500 dark:text-yellow-500-600 bg-red-500 p-2 rounded-s">
        Coding is
      </div>
      <FlipWords
        words={words}
        className="text-4xl mx-auto text-center font-extrabold text-red-500 dark:text-yellow-500-600 bg-yellow-500 w-40 p-2 rounded-e"
      />
      <br />
    </div>
  );
}
