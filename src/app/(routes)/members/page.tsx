"use client";
import React from "react";
import FocusCardsDemo from "../../components/focuscard";
import { LampDemo } from "../../components/lampdemo";
function fame() {
  return (
    <>
      <LampDemo />

      <div>
        <h1 className="border-y-2 border-orange-300 text-red-500 align-middle text-center text-2xl font-small tracking-tight  md:text-4xl m-5 p-1">
          Final Years
        </h1>
        <FocusCardsDemo />
      </div>

      <div>
        <h1 className="border-y-2 border-orange-300 text-red-500 align-middle text-center text-2xl font-small tracking-tight  md:text-4xl m-5 p-1">
          Pre-Final Years
        </h1>
        <FocusCardsDemo />
      </div>

      <div>
        <h1 className="border-y-2 border-orange-300 text-red-500 align-middle text-center text-2xl font-small tracking-tight  md:text-4xl m-5 p-1">
          Our Junior Members
        </h1>
        <FocusCardsDemo />
      </div>
    </>
  );
}

export default fame;
