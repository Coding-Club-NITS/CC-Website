import React from "react";
import HeroSection from "@/app/components/HeroSection";
import FeaturedResources from "@/app/components/FeaturedResources";
import SmoothScrolling from "@/app/components/smoothScroll";
export default function ResourcePage(){
  return(
    <SmoothScrolling>
    <HeroSection/>
    <FeaturedResources/>
    </SmoothScrolling>
  )
}