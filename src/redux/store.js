import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import dropdownReducer from './dropdownSlice';
export const store = configureStore({
  reducer: {
    cardReducer: cardReducer,
    dropdownReducer: dropdownReducer,
  },
});
