import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
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

export default dropdownSlice.reducer;
