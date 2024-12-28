import { StickyScroll } from "./ui/scroll";
import { scrollContent } from "@/data/events";

export default function ScrollCards() {
  return (
    <>
      <StickyScroll content={scrollContent} />
    </>
  );
}
