import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

export default function SpotlightPreview() {
  return (
    <div className="h-[10rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96]  bg-grid-white/[0.02]  overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
    </div>
  );
}
