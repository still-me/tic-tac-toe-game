import { createAction } from '@reduxjs/toolkit';

export const changeSquares = createAction('board/changeSquares');
export const resetSquares = createAction('board/resetSquares');

export const toggleXTurn = createAction('board/toggleXTurn');
export const resetXTurn = createAction('board/resetXTurn');
