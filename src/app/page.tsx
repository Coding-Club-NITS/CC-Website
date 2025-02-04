"use client";

import ScrollCards from "./components/scrollcards";
import Testimonials from "./components/testimonials";
import { FlipWordsDemo } from "./components/flipwords";
import Parallax from "./components/parallax";
import SmoothScrolling from "./components/smoothScroll";
import { ThemeProvider } from "next-themes";

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SmoothScrolling>
        <div className="dark:bg-black bg-white">
          <Parallax />
          <ScrollCards />
          <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <FlipWordsDemo />
            <Testimonials />
          </div>
        </div>
      </SmoothScrolling>
    </ThemeProvider>
  );
}
