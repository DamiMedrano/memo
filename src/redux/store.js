import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardsSlice';
import dropdownReducer from './dropdownSlice';
export const store = configureStore({
  reducer: {
    cardReducer: cardReducer,
    dropdownReducer: dropdownReducer,
  },
});
