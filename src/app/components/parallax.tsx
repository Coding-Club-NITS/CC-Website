"use client";
import { HeroParallax } from "./ui/hero-parallax";
// import homedata from "@/data/homedata.json";
import LanguageIcon from "@/data/languages.json";

export default function Parallax() {
  return (
    <div>
      <HeroParallax products={LanguageIcon} />
    </div>
  );
}
