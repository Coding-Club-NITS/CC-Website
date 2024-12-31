"use client";
import { HeroParallax } from "./ui/hero-parallax";
import homedata from "@/data/homedata.json";

export default function Parallax() {
  return (
    <div>
      <HeroParallax products={homedata} />
    </div>
  );
}
