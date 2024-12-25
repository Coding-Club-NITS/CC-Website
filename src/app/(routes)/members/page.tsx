"use client";
import React from "react";
import FocusCardsDemo from "../../components/focuscard";
import { LampDemo } from "../../components/lampdemo";
function fame() {
  return (
    <div>
      <LampDemo />
      <div className="-translate-y-[12rem]">
        <FocusCardsDemo />
      </div>
    </div>
  );
}

export default fame;
