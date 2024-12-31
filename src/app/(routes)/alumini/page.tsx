"use client";
import React from "react";
import { CardHoverEffectDemo } from "@/app/components/hovercard";
import ParticlesComponent from "@/app/components/particles";
import { BackgroundLinesDemo } from "@/app/components/bglines";
import SmoothScrolling from "@/app/components/smoothScroll";

function fame() {
  return (
    <div>
      <SmoothScrolling>
        <BackgroundLinesDemo />
        <CardHoverEffectDemo />
      </SmoothScrolling>
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default fame;
