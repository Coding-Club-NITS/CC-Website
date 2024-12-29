import React from "react";
import details from "../../../data/newEvent.json";

const CodeRunner: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {details.visible ? (
        <iframe
          src={details.formlink}
          width="100%"
          height="100%"
          className="flex-1 border rounded overflow-hidden mt-20"
          title={details.title}
        >
          Loading…
        </iframe>
      ) : (
        <h1 className="text-2xl font-bold text-center">
          The form is currently not visible.
          <br />
          Contact the admin for more details
        </h1>
      )}
    </div>
  );
};

export default CodeRunner;
