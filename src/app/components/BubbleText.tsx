import React from "react";

type BubbleTextHelperProps = {
  title: string;
};

const BubbleTextHelper: React.FC<BubbleTextHelperProps> = ({ title }) => {
  return (
    <div className="grid h-32 place-content-center bg-black p-4">
      <BubbleText title={title} />
      <style>
        {`
          .hoverText {
            transition: 0.35s font-weight, 0.35s color;
          }

          .hoverText:hover {
            font-weight: 900;
            color: rgb(238, 242, 255);
          }

          .hoverText:hover + .hoverText {
            font-weight: 500;
            color: rgb(199, 210, 254);
          }

          .hoverText:hover + .hoverText + .hoverText {
            font-weight: 300;
          }

          .hoverText:has(+ .hoverText:hover) {
            font-weight: 500;
            color: rgb(199, 210, 254);
          }

          .hoverText:has(+ .hoverText + .hoverText:hover) {
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
};

type BubbleTextProps = {
  title: string;
};

const BubbleText: React.FC<BubbleTextProps> = ({ title }) => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {title.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleTextHelper;
