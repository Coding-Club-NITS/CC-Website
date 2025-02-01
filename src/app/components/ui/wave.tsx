/* eslint-disable */
"use client";
import { cn } from "../utils/cn";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: string | React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const noise = useRef(createNoise3D());

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentMode = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "light";

  const darkModeColors = ["#f87171", "#ef4444", "#facc15", "#eab308"];
  const lightModeColors = ["#93c5fd", "#3b82f6", "#a5b4fc", "#818cf8"];
  const waveColors =
    colors ?? (currentMode === "dark" ? darkModeColors : lightModeColors);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
  }, [blur]);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;

    const drawWave = (n: number) => {
      nt += getSpeed();
      ctx.globalAlpha = waveOpacity;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];

        for (let x = 0; x < w; x += 5) {
          const y = noise.current(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      if (!ctx) return;
      drawWave(5);
      animationRef.current = requestAnimationFrame(render);
    };

    // Initialize animation
    render();

    // Throttle window resize
    const handleResize = () => requestAnimationFrame(resizeCanvas);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    mounted,
    currentMode,
    colors,
    resizeCanvas,
    waveOpacity,
    waveWidth,
    blur,
  ]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 hidden lg:block md:block"
        ref={canvasRef}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
