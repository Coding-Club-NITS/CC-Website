"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center rounded-2xl ">
      <TextRevealCard
        text="Inspired Yet?"
        revealText="The Hall of Fame awaits your name!"
      ></TextRevealCard>
    </div>
  );
}
