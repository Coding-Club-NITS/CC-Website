"use client";
import React from "react";
import Timelinedemo from "@/app/components/timelinedemo";
import SmoothScrolling from "@/app/components/smoothScroll";
export default function Page() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <SmoothScrolling>
        <Timelinedemo />
      </SmoothScrolling>
    </div>
  );
}
