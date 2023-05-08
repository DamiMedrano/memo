import React, { useState } from 'react';

function DropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  function handleOptionChange(event) {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    props.onChange(newOption);
  }

  return (
    <div>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleOptionChange}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default DropdownMenu;
