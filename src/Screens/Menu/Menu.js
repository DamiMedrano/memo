import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PrimaryLinkButton from '../../Components/Buttons/PrimaryLinkButton';
import SecondaryLinkButton from '../../Components/Buttons/SecondaryLinkButton';
import DropdownMenu from '../../Components/Dropdowns/DropdownMenu';
import { changeOption } from '../../redux/dropdownSlice';
import { Container, PartOne, PartTwo, Title } from './MenuStyled';

const Menu = () => {
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
        <PrimaryLinkButton screen='/Game' text='PLAY' />
        <SecondaryLinkButton screen='/Leaderboard' text='Leaderboard' />
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
