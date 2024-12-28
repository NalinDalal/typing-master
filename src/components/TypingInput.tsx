import React from "react";

interface TypingInputProps {
  userInput: string;
  onInputChange: (input: string) => void;
}

const TypingInput: React.FC<TypingInputProps> = ({
  userInput,
  onInputChange,
}) => {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Type here..."
      className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
};

export default TypingInput;
