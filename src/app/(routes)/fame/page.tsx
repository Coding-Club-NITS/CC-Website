import React from "react";
import ExpandableCardDemo from "../../components/expandableCard";
import TextRevealCardPreview from "../../components/textReveal";
import SpotlightPreview from "../../components/SpotlightPreview";
import SmoothScrolling from "@/app/components/smoothScroll";

function page() {
  return (
    <div>
      <SmoothScrolling>
        <SpotlightPreview />
        <TextRevealCardPreview />
        <div className="mt-10">
          <ExpandableCardDemo />
        </div>
      </SmoothScrolling>
    </div>
  );
}

export default page;
