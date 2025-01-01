// import { StickyScroll } from "./ui/scroll";
import scrollContent from "@/data/events.json";
import { AnimatedTestimonials } from "@/app/components/ui/slidecards";
export default function ScrollCards() {
  return (
    <>
      {/* <StickyScroll content={scrollContent} /> */}
      <AnimatedTestimonials testimonials={scrollContent} />
    </>
  );
}
