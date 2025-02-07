"use client";
import { useEffect, useRef, useState } from "react";

export default function BounceGame404() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ball = {
      x: canvas.width / 2,
      y: 50,
      dx: 3,
      dy: 4,
      radius: 20,
      img: new Image(),
    };
    ball.img.src = favicon ? favicon.href : "";

    const paddle = {
      x: canvas.width / 2 - 75,
      y: canvas.height - 30,
      width: 150,
      height: 10,
    };

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      paddle.x = Math.max(
        0,
        Math.min(event.clientX - paddle.width / 2, canvas.width - paddle.width)
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawBall = () => {
      if (ball.img.complete) {
        ctx.drawImage(
          ball.img,
          ball.x - ball.radius,
          ball.y - ball.radius,
          ball.radius * 2,
          ball.radius * 2
        );
      } else {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
      }
    };

    const drawPaddle = () => {
      ctx.fillStyle = "yellow";
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
      }
      if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
      }

      if (
        ball.y + ball.radius > paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy = -ball.dy;
        setScore((prev) => prev + 1);
        ball.dx *= 1.05;
        ball.dy *= 1.05;
      }

      if (ball.y - ball.radius > canvas.height) {
        cancelAnimationFrame(animationFrame);
        setMaxScore((prev) => Math.max(prev, score));
        setGameStarted(false);
        return;
      }

      animationFrame = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [gameStarted]);

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-10 left-20 text-white opacity-50 text-4xl font-bold shadow-md">
        404 - Page Not Found
      </div>
      {!gameStarted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <button
            onClick={() => {
              setScore(0);
              setGameStarted(true);
            }}
            className="bg-none border-none cursor-pointer"
          >
            <img src="/favicon.ico" alt="Start Game" className="w-15 h-15" />
          </button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${gameStarted ? "block" : "hidden"}`}
      />
      <div className="absolute top-10 left-10 text-2xl text-white">
        <div className="text-yellow-800">Score: {score}</div>
        <div className="text-red-800">Max Score: {maxScore}</div>
      </div>
    </div>
  );
}
