
import SmoothScrolling from "./smoothScroll";
import FocusCards from "./ui/focuscard";
import team from "@/data/teams.json"; // Import the JSON data
export default function FocusCardsDemo() {

  return (
    <div>
      <SmoothScrolling>
        {Object.entries(team).map(([key, section]) => (
          <div key={key} className="mt-10  backdrop-blur-md">
            <div className="bg-white/10 backdrop-blur-lg py-4">
              <h1 className="text-white text-3xl font-bold italic text-center w-full">
                {section.title}
              </h1>
            </div>
                <FocusCards cards={section.data} />
          </div>
        ))}

        
      </SmoothScrolling>
    </div>
  );
}
