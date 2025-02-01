import SmoothScrolling from "./smoothScroll";
import FocusCards from "./ui/focuscard";
import team from "@/data/teams.json"; // Import the JSON data
import BubbleTextHelper from "./BubbleText";
export default function FocusCardsDemo() {
  return (
    <div>
      <SmoothScrolling>
        {Object.entries(team).map(([key, section]) => (
          <div key={key} className="mt-10  backdrop-blur-md">
            <h1 className="text-white text-3xl font-bold italic text-center ">
              <BubbleTextHelper title={section.title} />
            </h1>

            <div className="w-full bg-blue-gray-900/30 backdrop-blur-md py-4">
              <FocusCards cards={section.data} />
            </div>
          </div>
        ))}
      </SmoothScrolling>
    </div>
  );
}
