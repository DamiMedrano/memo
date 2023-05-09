import React, { useState } from 'react';
import { DropdownContainer, Label, Select } from './DropdownMenuStyled';

function DropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  function handleOptionChange(event) {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    props.onChange(newOption);
  }

  return (
    <DropdownContainer>
      <Label>
        Select an option:
        <Select value={selectedOption} onChange={handleOptionChange}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Label>
    </DropdownContainer>
  );
}

export default DropdownMenu;
