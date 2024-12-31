"use client";
import React from "react";
import FocusCardsDemo from "@/app/components/focuscard";
import { LampDemo } from "@/app/components/lampdemo";
import SmoothScrolling from "@/app/components/smoothScroll";
function fame() {
  return (
    <div>
      <SmoothScrolling>
        <LampDemo />
        <div className="-translate-y-[14rem]">
          <FocusCardsDemo />
        </div>
      </SmoothScrolling>
    </div>
  );
}

export default fame;
