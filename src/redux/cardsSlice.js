import { createSlice } from '@reduxjs/toolkit';
import { cardListSelector, shuffle } from './dropdownSlice';
import { changeOption } from './dropdownSlice';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: cardListSelector({}), // default: Star Wars
    selected: '',
    selectedId: 0,
    totalSelect: 0,
    point: 100,
    found: 0,
  },
  reducers: {
    select: (state, action) => {
      state.cards[action.payload.id].isOpen = true;
      if (state.selected === '') {
        state.selected = action.payload.name;
        state.selectedId = action.payload.id;
        state.totalSelect = 1;
      } else state.totalSelect = 2;
    },
    compare: (state, action) => {
      if (state.cards.length === 0) return; // Validate not empty
      if (state.selected === action.payload.name) {
        state.cards[state.selectedId].isFind = true;
        state.cards[action.payload.id].isFind = true;
        state.point += 50;
        state.found += 1;
      } else {
        state.cards[state.selectedId].isOpen = false;
        state.cards[action.payload.id].isOpen = false;
        state.point -= state.point > 0 ? 10 : 0;
      }
      state.selected = '';
      state.selectedId = 0;
      state.totalSelect = 0;
    },
    closeAll: (state) => {
      state.cards.map((c) => {
        c.isOpen = false;
        c.isFind = false;
        return null; // for linting purposes;
      });
    },
    reload: (state) => {
      state.selectedId = 0;
      state.selected = '';
      let list = shuffle([...state.cards]);
      state.cards = list;
      state.point = 100;
      state.found = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeOption, (state, action) => {
      const selectedOption = action.payload;
      state.cards = cardListSelector({ dropdown: { selectedOption } });
    });
  },
});

export const { select, compare, reload, closeAll } = cardsSlice.actions;

export default cardsSlice.reducer;

export const changeOptionThunk = (option) => (dispatch) => {
  dispatch(changeOption(option));
};
