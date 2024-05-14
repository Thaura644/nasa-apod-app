import React, { useState, useEffect } from 'react';

// Gallery component: Displays a grid of NASA's Astronomy Picture of the Day
const Gallery: React.FC = () => {
  // State variables
  const [photos, setPhotos] = useState<any[]>([]); // State for storing fetched photos
  const [showExplanation, setShowExplanation] = useState<boolean[]>([]); // State for toggling photo explanations

  // Fetch photos from NASA API on component mount
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=k9LR0JsrnPMuZdjcXsn3wdl70c5YfjNbZpanJUsD&count=10`)
      .then((response) => response.json())
      .then((data) => {
        // Sort photos by date in descending order
        const sortedPhotos = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPhotos(sortedPhotos); // Update photos state with sorted photos
        // Initialize showExplanation state array to false for each photo
        setShowExplanation(Array(sortedPhotos.length).fill(false));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to toggle explanation visibility for a photo
  const toggleExplanation = (index: number) => {
    const updatedShowExplanation = [...showExplanation]; // Create a copy of showExplanation array
    updatedShowExplanation[index] = !updatedShowExplanation[index]; // Toggle explanation visibility for the selected photo
    setShowExplanation(updatedShowExplanation); // Update showExplanation state with the modified array
  };

  return (
    // Grid layout for displaying photos
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      {/* Map through each photo and render it */}
      {photos.map((photo, index) => (
        <div key={photo.date} className="bg-zinc-400 rounded-md size-fit shadow-md overflow-hidden">
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
          {/* Photo explanation */}
          <div className="md:flex md:justify-between">
            {/* Conditional rendering of explanation based on showExplanation state */}
            <p className={`text-sm ${showExplanation[index] ? 'block' : 'hidden'}`}>{photo.explanation}</p>
            {/* Button to toggle explanation visibility */}
            {photo.explanation && (
              <button
                onClick={() => toggleExplanation(index)} // Click handler to toggle explanation visibility
                className="text-blue-900 hover:text-blue-400 focus:outline-none"
              >
                {/* Button text based on showExplanation state */}
                {showExplanation[index] ? 'Hide Explanation' : 'Show Explanation'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
