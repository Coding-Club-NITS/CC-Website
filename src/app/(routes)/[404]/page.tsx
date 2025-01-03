"use client";
import { useEffect, useRef, useState } from "react";
export default function BounceGame404() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  let scr = 0;
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
      x: 0,
      y: canvas.height - 30,
      width: 150,
      height: 10,
    };
    let animationFrame: number;
    const handleMouseMove = (event: MouseEvent) => {
      paddle.x = event.clientX - paddle.width / 2;
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
      ctx.fillStyle = "blue";
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
        scr += 1;
        ball.dx *= 1.05;
        ball.dy *= 1.05;
        setScore(scr);
      }
      if (ball.y - ball.radius > canvas.height) {
        cancelAnimationFrame(animationFrame);
        setMaxScore((prevMax) => Math.max(prevMax, score));
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
    <div
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "100%",
          textAlign: "center",
          color: "white",
          opacity: 0.5,
          fontSize: "4rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px black",
        }}
      >
        404 - Page Not Found
      </div>
      {!gameStarted && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <button
            onClick={() => {
              setScore(0);
              setGameStarted(true);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="/favicon.ico"
              alt="Start Game"
              style={{ width: "60px", height: "60px" }}
            />
          </button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          display: gameStarted ? "block" : "none",
          width: "100%",
          height: "100%",
          cursor: "none",
        }}
      />
      {/* Score Component */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          transform: "translateX(-50%)",
          fontSize: "2rem",
          color: "white",
        }}
      >
        <div className="text-yellow-800">Score: {score}</div>
        <div className="text-red-800">Max Score: {maxScore}</div>
      </div>
    </div>
  );
}
