import React, { useState } from 'react';
import styled from 'styled-components';

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

const Label = styled.div`
  font-weight: 600;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  margin: 12px 0 0;
  min-width: 180px;
  min-height: 40px;
  border-radius: 4px;
  padding-left: 8px;
`;

const DropdownContainer = styled.div`
  margin: 20px 0 0;
`;
