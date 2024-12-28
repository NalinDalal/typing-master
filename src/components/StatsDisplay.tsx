import React from "react";

interface StatsDisplayProps {
  wpm: number | null;
  accuracy: number | null;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ wpm, accuracy }) => {
  return (
    <div className="mt-4 text-center">
      <div className="text-2xl font-bold animate-fade-in">
        WPM: {Math.round(wpm || 0)}
      </div>
      <div className="mt-2 text-2xl font-bold animate-fade-in">
        Accuracy: {accuracy?.toFixed(2)}%
      </div>
    </div>
  );
};

export default StatsDisplay;
