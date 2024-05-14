import React, { useState } from 'react';
import DateInput from './components/DateInput.tsx'; // Importing DateInput component
import Photo from './components/Photo.tsx'; // Importing Photo component
import Gallery from './components/Gallery.tsx'; // Importing Gallery component

// Main App Component
const App: React.FC = () => {
  // State variables
  const [date, setDate] = useState(""); // State for selected date
  const [photo, setPhoto] = useState(""); // State for fetched photo data
  const [showGallery, setShowGallery] = useState<boolean>(false); // State for gallery visibility
  const [searchText, setSearchText] = useState<string>(""); // State for search text

  // State for navigation bar visibility
  const [openNavigation, setOpenNavigation] = useState(false);

  // Function to handle date change
  const handleChangeDate = (selectedDate: string) => {
    setDate(selectedDate);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Fetching photo data from NASA API based on selected date
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=k9LR0JsrnPMuZdjcXsn3wdl70c5YfjNbZpanJUsD`)
      .then((response) => response.json())
      .then((data) => setPhoto(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  // Function to toggle gallery visibility
  const handleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-sm fixed top-0 left-0 w-full z-50 lg:static lg:flex md:flex md:static lg:mx-auto lg:bg-transparent text-white p-4 justify-between items-center">
        
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          {/* Title */}
          <h1 className="text-3xl font-semibold">NASA's <span className='font-bold text-amber-700'>Astronomy Picture</span> of the Day</h1>
          
          {/* Date Input */}
          <div className='text-black ml-5 mt-2'><DateInput onChange={handleChangeDate} /></div>
         
          {/* Get Photo Button */}
          <button onClick={handleSubmit} className="bg-blue-900 text-amber-700 px-4 py-2 rounded-md ml-2 mt-2">Get Photo</button>
          
          {/* Gallery Button */}
          <button onClick={handleShowGallery} className="bg-blue-900 text-amber-700 px-4 py-2 rounded-md ml-2  mt-2">
            {showGallery ? 'Hide Gallery' : 'Show Gallery'}
          </button>
        </div>
      </nav>
      
      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Render Photo or Gallery based on state */}
        {photo && !showGallery && <Photo photo={photo} />} {/* Display photo if available and gallery is not shown */}
        {showGallery && <Gallery />} {/* Display gallery if showGallery state is true */}
      </div>
    </div>
  );
};

export default App;
