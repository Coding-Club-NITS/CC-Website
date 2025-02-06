"use client";
import { useState, useEffect } from "react";
import ScrollCards from "./components/scrollcards";
import Testimonials from "./components/testimonials";
import { FlipWordsDemo } from "./components/flipwords";
import Parallax from "./components/parallax";
import SmoothScrolling from "./components/smoothScroll";
import { ThemeProvider } from "next-themes";
import PageLoader from "./components/pageLoader";
import React from "react";
import { StarsBackground } from "./components/ui/stars-background";
export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <StarsBackground />
      {loading ? (
        <PageLoader />
      ) : (
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
      )}
    </ThemeProvider>
  );
}
