"use client";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import { FlipWords } from "@/app/components/ui/flip-words";
import React from "react";
import ImageComponent from "@/app/components/imagecomponent";

export default function Home() {
  const words = [
    "DIFFERENCE",
    "PROGRESS",
    "IMPACT",
    "FUTURE",
    "SUCCESS",
    "CHANGE",
  ];
  return (
    <>
    <BackgroundBeamsWithCollision>
      {/* Heading: Coding Club and NIT Silchar */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-red-500 font-bold text-5xl opacity-80 hover:opacity-100 transition-opacity duration-500">
          Coding Club
        </h1>
        <h2 className="text-yellow-500 font-bold text-3xl opacity-80 hover:opacity-100 transition-opacity duration-500">
          NIT Silchar
        </h2>
      </div>

      {/* Welcome text about Coding Club */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 mt-8 px-6 text-center max-w-4xl">
        <p className="text-white text-lg leading-relaxed font-medium opacity-90">
          Welcome to the Coding Club! At Coding Club, we are dedicated to
          nurturing and guiding young talents in the world of coding. Our
          mission is to empower aspiring developers and problem solvers with the
          knowledge, skills, and confidence needed to excel in their coding
          journeys.
        </p>
        <p className="text-white text-lg leading-relaxed font-medium opacity-90 mt-4">
          We mentor students through hands-on sessions, workshops, and projects,
          covering essential topics such as data structures, algorithms, and
          cutting-edge technologies. Our comprehensive training prepares members
          for upcoming interviews, coding assessments, and competitive
          programming challenges.
        </p>
        <p className="text-white text-lg leading-relaxed font-medium opacity-90 mt-4">
          Join us, and let’s shape the future together, one line of code at a
          time!
        </p>

        {/* New Design Section */}
        <div className="mt-12 text-center">
          <h3 className="text-[transparent] text-4xl font-extrabold inline bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            TOGETHER WE{" "}
          </h3>
          <h3 className="text-[transparent] text-4xl font-extrabold inline bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            CAN MAKE{" "}
          </h3>
          <h3 className="text-[transparent] text-4xl font-extrabold inline bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            A
          </h3>
        </div>

        {/* DIFFERENCE */}
        <div className="mt-8 text-center">
          <h3 className="text-5xl font-extrabold inline bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            <FlipWords words={words} />
          </h3>{" "}
          {/* Color changed to flame color gradient */}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
    <ImageComponent/>
   </>
    
  );
}
