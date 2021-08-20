import { createSelector } from '@reduxjs/toolkit';
import { calculateWinner } from '../utils/calculateWinner';

export const getSquares = state => state.board.squares;
export const getXTurn = state => state.board.xTurn;
export const getWinnerCombination = createSelector([getSquares], squares =>
  calculateWinner(squares),
);
