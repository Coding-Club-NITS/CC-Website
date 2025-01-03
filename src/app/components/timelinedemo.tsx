import React from "react";
import { Timeline } from "./ui/timeline";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import data from "@/data/timeline";

export default function Timelinedemo() {
  return (
    <div className="w-full">
      <ShootingStars />
      <StarsBackground />
      <Timeline data={data} />
    </div>
  );
}
