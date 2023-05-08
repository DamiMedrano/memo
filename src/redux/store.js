import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './CardSlice';
import dropdownReducer from './dropdownSlice';
export const store = configureStore({
  reducer: {
    cardReducer: cardReducer,
    dropdownReducer: dropdownReducer,
  },
});
