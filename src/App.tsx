import React, { useState } from "react";
import StatsDisplay from "./components/StatsDisplay";
import TextDisplay from "./components/TextDisplay";
import TypingInput from "./components/TypingInput";

const App: React.FC = () => {
  const [text, setText] = useState(generateRandomText());
  const [userInput, setUserInput] = useState("");
  const [timeStart, setTimeStart] = useState<number | null>(null);
  const [wpm, setWPM] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function generateRandomText() {
    const words = [
      "hello",
      "world",
      "typing",
      "speed",
      "test",
      "practice",
      "keyboard",
      "accuracy",
      "javascript",
      "react",
      "developer",
      "frontend",
      "performance",
    ];
    return Array.from(
      { length: 30 },
      () => words[Math.floor(Math.random() * words.length)],
    ).join(" ");
  }

  const handleInputChange = (input: string) => {
    if (!timeStart) setTimeStart(Date.now());
    setUserInput(input);
  };

  const handleSubmit = () => {
    if (!timeStart) return;

    const timeElapsed = (Date.now() - timeStart) / 1000 / 60; // in minutes
    const wordCount = userInput.split(" ").length;

    const calculatedWPM = timeElapsed > 0 ? wordCount / timeElapsed : 0;
    const correctChars = userInput
      .split("")
      .filter((char, index) => char === text[index]).length;

    const calculatedAccuracy =
      text.length > 0 ? (correctChars / text.length) * 100 : 0;

    setWPM(calculatedWPM);
    setAccuracy(calculatedAccuracy);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setText(generateRandomText());
    setUserInput("");
    setTimeStart(null);
    setWPM(null);
    setAccuracy(null);
    setIsSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-gray-800 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:text-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="p-8 w-full max-w-3xl bg-white rounded-lg shadow-xl dark:bg-gray-900">
        <h1 className="mb-6 text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          Typing Speed Test
        </h1>
        <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-100 shadow-inner dark:bg-gray-800 dark:border-gray-700">
          <TextDisplay text={text} userInput={userInput} />
        </div>
        {!isSubmitted ? (
          <div className="mt-6">
            <TypingInput
              userInput={userInput}
              onInputChange={handleInputChange}
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={handleSubmit}
                className="py-3 px-8 font-semibold text-white bg-indigo-500 rounded-full shadow-md transition-transform transform hover:bg-indigo-600 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <StatsDisplay wpm={wpm} accuracy={accuracy} />
            <div className="flex justify-center mt-6">
              <button
                onClick={handleRestart}
                className="py-3 px-8 font-semibold text-white bg-green-500 rounded-full shadow-md transition-transform transform hover:bg-green-600 hover:scale-105"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        <footer className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          Built with 💻 and ❤️ by [Your Name]
        </footer>
      </div>
    </div>
  );
};

export default App;
