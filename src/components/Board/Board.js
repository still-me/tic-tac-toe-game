import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Board.module.css';
import Square from '../Square';
import { getSquares } from '../../redux/board-selectors';
import { getXTurn } from '../../redux/board-selectors';
import { getWinnerCombination } from '../../redux/board-selectors';
import { changeSquares } from '../../redux/board-actions';
import { toggleXTurn } from '../../redux/board-actions';

export default function Board() {
  const squares = useSelector(getSquares);
  const xTurn = useSelector(getXTurn);
  const winnerCombination = useSelector(getWinnerCombination);

  const dispatch = useDispatch();

  const handleClick = index => {
    const squaresCopy = [...squares];
    if (winnerCombination || squaresCopy[index]) {
      return;
    }

    squaresCopy[index] = xTurn ? 'X' : 'O';
    dispatch(changeSquares(squaresCopy));
    dispatch(toggleXTurn());
  };

  const calculateLineStyle = () => {
    if (winnerCombination === null) {
      return styles.lineDefault;
    }
    const winnerCombinationString = winnerCombination.join('');
    switch (winnerCombinationString) {
      case '012':
        return styles.line012;
      case '345':
        return styles.line345;
      case '678':
        return styles.line678;
      case '036':
        return styles.line036;
      case '147':
        return styles.line147;
      case '258':
        return styles.line258;
      case '048':
        return styles.line048;
      case '246':
        return styles.line246;

      default:
        return styles.lineDefault;
    }
  };

  return (
    <div className={styles.board}>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          handleClick={() => handleClick(index)}
        />
      ))}
      <div className={calculateLineStyle()}></div>
    </div>
  );
}
