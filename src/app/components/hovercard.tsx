import SmoothScrolling from "./smoothScroll";
import { HoverEffect } from "./ui/hover";
import alumini from "@/data/alumini.json";
import BubbleTextHelper from "./BubbleText";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto pt-20">
      <SmoothScrolling>
        {Object.entries(team).map(([year, items]) => (
          <div key={year} className="mb-10">
            <h1 className="text-white text-3xl font-bold italic text-center ">
              <BubbleTextHelper title={year} />
            </h1>
            <HoverEffect items={items} />
          </div>
        ))}
      </SmoothScrolling>
    </div>
  );
}
export const team = alumini;
