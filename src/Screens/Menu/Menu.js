import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton';
import DropdownMenu from '../../Components/Dropdowns/DropdownMenu';
import { changeOption } from '../../redux/dropdownSlice';
import { Container, PartOne, PartTwo, Title } from './MenuStyled';

const Menu = () => {
  const storedUsername = localStorage.getItem('username');
  const selectedOption = useSelector(
    (state) => state.dropdownReducer.selectedOption
  );
  const dispatch = useDispatch();

  function handleOptionChange(newOption) {
    dispatch(changeOption(newOption));
  }

  const options = ['Star Wars', 'Game of Thrones', 'Lord of the Rings'];

  return (
    <div>
      <Container>
        <Title>
          <PartOne>Memory</PartOne> <PartTwo>Game</PartTwo>
        </Title>
        <PrimaryButton
          screen='/Game'
          text={storedUsername ? 'Continue game' : 'PLAY'}
        />
        <SecondaryButton screen='/Leaderboard' text='Leaderboard' />
        <DropdownMenu
          options={options}
          value={selectedOption}
          onChange={handleOptionChange}
        />
      </Container>
    </div>
  );
};

export default Menu;
