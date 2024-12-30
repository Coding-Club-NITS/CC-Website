"use client";
import React from "react";
import { CardHoverEffectDemo } from "../../components/hovercard";
import ParticlesComponent from "../../components/particles";
import { BackgroundLinesDemo } from "../../components/bglines";
function fame() {
  return (
    <div>
      <BackgroundLinesDemo />
      <CardHoverEffectDemo />
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default fame;
