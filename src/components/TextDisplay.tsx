import React from "react";

interface TextDisplayProps {
  text: string;
  userInput: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, userInput }) => {
  const renderedText = text.split("").map((char, index) => {
    const inputChar = userInput[index];
    const className =
      inputChar == null
        ? ""
        : inputChar === char
          ? "text-green-500"
          : "text-red-500";
    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  });

  return (
    <div className="p-4 mb-4 font-mono text-xl bg-gray-200 rounded-md">
      {renderedText}
    </div>
  );
};

export default TextDisplay;
