"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedDots = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const dots: any[] = [];
    const circleRadius = 1;
    const margin = 30;

    if (!svg) return;

    const bounding = svg.getBoundingClientRect();
    const width = bounding.width;
    const height = bounding.height;

    const dotSize = circleRadius + margin;
    const rows = Math.floor(height / dotSize);
    const cols = Math.floor(width / dotSize);
    const xStart = (width % dotSize) / 2;
    const yStart = (height % dotSize) / 2;

    // Create dots
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = {
          x: xStart + col * dotSize,
          y: yStart + row * dotSize,
          velocity: { x: 0, y: 0 },
        };

        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", String(dot.x));
        circle.setAttribute("cy", String(dot.y));
        circle.setAttribute("r", String(circleRadius));
        circle.setAttribute("fill", "white"); // White dots

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttribute("stroke", "white"); // White paths

        svg.appendChild(circle);
        svg.appendChild(path);

        dots.push({ ...dot, el: circle, path });
      }
    }

    // GSAP Animation
    const onMouseMove = (e: MouseEvent) => {
      dots.forEach((dot) => {
        const dx = e.clientX - dot.x;
        const dy = e.clientY - dot.y;
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1); // Avoid division by zero
        const force = Math.min(200 / distance, 3); // Increased force factor for more movement

        dot.velocity.x += (dx / distance) * force;
        dot.velocity.y += (dy / distance) * force;

        gsap.to(dot.el, {
          cx: dot.x + dot.velocity.x,
          cy: dot.y + dot.velocity.y,
          duration: 0.05, // Faster updates
          ease: "power2.out", // Responsive easing
        });

        dot.velocity.x *= 0.8; // Reduced friction for faster motion
        dot.velocity.y *= 0.8;
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      {/* Black background */}
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      />
    </div>
  );
};

export default AnimatedDots;
