import FocusCards from "./ui/focuscard";
import team from "../../data/teams.json"; // Import the JSON data

export default function FocusCardsDemo() {
  return (
    <div>
      {Object.entries(team).map(([key, section]) => (
        <div key={key}>
          <h1 className="border-y-2 border-orange-300 text-red-500 align-middle text-center text-2xl font-sans tracking-tight md:text-4xl m-5 p-1">
            {section.title}
          </h1>
          <FocusCards cards={section.data} />
        </div>
      ))}
    </div>
  );
}
