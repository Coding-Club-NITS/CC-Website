"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[30rem] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 h-[2px] w-3/4 blur-lg dark:bg-gradient-to-r dark:from-red-600 dark:via-yellow-500 dark:to-red-600" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 h-px w-3/4 blur-lg dark:bg-gradient-to-r dark:from-red-600 dark:via-yellow-500 dark:to-red-600" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 h-[5px] w-1/4 blur-lg dark:bg-gradient-to-r dark:from-red-600 dark:via-yellow-500 dark:to-red-600" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 h-px w-1/4 blur-lg dark:bg-gradient-to-r dark:from-red-600 dark:via-yellow-500 dark:to-red-600" />

        {/* Core component */}
        <SparklesCore
          background="white"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-[15rem]"
          particleColor="#FFFFFF"
        />

        {/* Modified gradient fade */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
