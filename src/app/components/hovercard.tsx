import { HoverEffect } from "./ui/hover";
import alumini from "../../data/alumini.json";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto pt-20">
      {Object.entries(team).map(([year, items]) => (
        <div key={year} className="mb-10">
          <h1 className="text-3xl font-bold text-center mb-6">{year}</h1>
          <HoverEffect items={items} />
        </div>
      ))}
    </div>
  );
}
export const team = alumini;
