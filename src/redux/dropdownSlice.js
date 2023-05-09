import { createSlice } from '@reduxjs/toolkit';
import lordOfTheRingsArr from '../Data/lordOfTheRingsArray';
import gameOfThronesArr from '../Data/gameOfThronesArray';
import starWarsArr from '../Data/starWarsArray';

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    selectedOption: 'Star Wars',
  },
  reducers: {
    changeOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { changeOption } = dropdownSlice.actions;

export const arrSelector = (state) => {
  if (!state || !state.dropdown || !state.dropdown.selectedOption) {
    return gameOfThronesArr;
  }

  if (state.dropdown.selectedOption === 'Star Wars') {
    console.log('is starwars');
    return starWarsArr;
  } else if (state.dropdown.selectedOption === 'Game of Thrones') {
    console.log('is got');
    return gameOfThronesArr;
  } else if (state.dropdown.selectedOption === 'Lord of the Rings') {
    console.log('is lotr');
    return lordOfTheRingsArr;
  }
};

export const cardListSelector = (state) => {
  const arr = arrSelector(state);
  console.log('arr', arr);
  const list = [];

  for (var i = 0; i < arr.length; i++) {
    list.push({
      name: arr[i],
      isOpen: false,
      isFind: false,
    });
  }

  return shuffle([...list, ...list]);
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default dropdownSlice.reducer;
