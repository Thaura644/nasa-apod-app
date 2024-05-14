import React, { useState } from 'react';

// Photo component: Displays a single photo with title, date, image, and explanation
const Photo: React.FC<{ photo: { date: string; title: string; url: string; explanation: string } }> = ({ photo }) => {
  // State variable to manage explanation visibility
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Function to toggle explanation visibility
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation); // Toggle explanation visibility state
  };

  return (
    <div key={photo.date} className="bg-slate-400 rounded-md shadow-md p-4">
      {/* Photo title */}
      <h3 className="text-lg font-semibold">{photo.title}</h3>
      {/* Photo date */}
      <h1 className="text-sm font-medium">taken on {photo.date}</h1>
      {/* Photo image */}
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-auto rounded-lg"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
      />

      {/* Explanation section */}
      <p className={`text-sm ${showExplanation ? 'block' : 'hidden'}`}>{photo.explanation}</p>
      
      {/* Button to toggle explanation visibility */}
      <button
        onClick={toggleExplanation}
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
      </button>
    </div>
  );
};

export default Photo;
