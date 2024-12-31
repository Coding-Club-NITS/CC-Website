"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react"; // Import ReactNode for typing

interface SmoothScrollingProps {
  children: ReactNode; // Properly type children
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.01, duration: 0.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;