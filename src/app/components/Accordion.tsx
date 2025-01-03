"use client"
import React, { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-none">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <span className="text-sm font-medium">{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 11.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 14z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 text-gray-600 text-sm">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
