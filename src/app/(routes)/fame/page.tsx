import React from "react";
import ExpandableCardDemo from "../../components/expandableCard";
import TextRevealCardPreview from "../../components/textReveal";
import SpotlightPreview from "../../components/SpotlightPreview";
import SmoothScrolling from "@/app/components/smoothScroll";
import AchivementBoard from "@/app/components/ui/achivementBoard";

function page() {
  return (
    <div>
      <SmoothScrolling>
        <SpotlightPreview />
        <TextRevealCardPreview />
        <div className="mt-10">
          <AchivementBoard />
          <ExpandableCardDemo />
        </div>
      </SmoothScrolling>
    </div>
  );
}

export default page;
