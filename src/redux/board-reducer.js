import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as boardActions from './board-actions';

const squares = createReducer(Array(9).fill(null), {
  [boardActions.changeSquares]: (_, { payload }) => payload,
  [boardActions.resetSquares]: (_state, _) => Array(9).fill(null),
});

const xTurn = createReducer(true, {
  [boardActions.toggleXTurn]: (state, _) => !state,
  [boardActions.resetXTurn]: (_state, _) => true,
});

export default combineReducers({ squares, xTurn });
