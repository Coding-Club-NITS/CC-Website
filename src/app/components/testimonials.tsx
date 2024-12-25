import React from "react";
import { InfiniteMovingCards } from "./ui/comments";
import testimonial from "../../data/testimonials.json";
function Testimonials() {
  const testimonials = testimonial;
  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
}

export default Testimonials;
