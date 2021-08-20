import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './board-reducer';

export const store = configureStore({
  reducer: { board: boardReducer },
});
