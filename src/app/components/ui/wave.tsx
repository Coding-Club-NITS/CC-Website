"use client";
import { cn } from "../utils/cn";
import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  // [key: string]: any;
}) => {
  const { theme, resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const noise = useRef(createNoise3D());

  const currentMode = theme === "system" ? resolvedTheme : theme;
  const darkModeColors = ["#ff8c00", "#ff4500", "#ffd700", "#dc143c"];
  const lightModeColors = ["#00bfff", "#1e90ff", "#87cefa", "#6495ed"];
  const waveColors =
    colors ?? (currentMode === "dark" ? darkModeColors : lightModeColors);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
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
      drawWave(4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentMode, colors, waveOpacity, waveWidth, blur]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas className="absolute inset-0 z-0" ref={canvasRef} />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
