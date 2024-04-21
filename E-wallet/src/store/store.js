import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/reducers'

export const store = configureStore({
  reducer: {
    Card: cardReducer,
  },
});

export default store;