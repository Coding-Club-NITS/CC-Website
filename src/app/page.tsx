"use client";
// import { HeroParallax } from './components/ui/hero-parallax'
import ScrollCards from "./components/scrollcards";
import Testimonials from "./components/testimonials";
import { FlipWordsDemo } from "./components/flipwords";
import Parallax from "./components/parallax";
import SmoothScrolling from "./components/smoothScroll";

export default function page() {
  return (
    <SmoothScrolling>
      <div className="dark:bg-black-900 bg-white-800">
        <Parallax />
        <ScrollCards />
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <FlipWordsDemo />
          <Testimonials />
        </div>
      </div>
    </SmoothScrolling>
  );
}
