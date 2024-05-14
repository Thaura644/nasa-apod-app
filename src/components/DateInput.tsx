import React from 'react';

// DateInput component: Allows user to input a date
const DateInput: React.FC<{ onChange: (date: string) => void }> = ({ onChange }) => {
  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call the onChange function with the selected date
    onChange(e.target.value);
  };

  return (
    // Form element for date input
    <form>
      {/* Input field for date selection */}
      <input type="date" onChange={handleChange} className="bg-slate-300 rounded-md p-2 border" />
    </form>
  );
};

export default DateInput;
