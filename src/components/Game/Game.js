import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import styles from './Game.module.css';
import modalTransition from '../../transitions/modal.module.css';
import Board from '../Board';
import Counter from '../Counter';
import Modal from '../Modal';
import Form from '../Form';
import { getWinnerCombination } from '../../redux/board-selectors';
import { getSquares } from '../../redux/board-selectors';
import { resetXTurn } from '../../redux/board-actions';
import { resetSquares } from '../../redux/board-actions';

export default function Game() {
  const squares = useSelector(getSquares);
  const dispatch = useDispatch();
  const winnerCombination = useSelector(getWinnerCombination);
  const winner =
    winnerCombination === null ? null : squares[winnerCombination[0]];

  const [players, setPlayers] = useState([
    { name: '', score: 0 },
    { name: '', score: 0 },
  ]);

  const handleButtonClick = () => {
    if (winnerCombination !== null) {
      setPlayers(prevState => {
        return winner === 'X'
          ? [
              { ...players[0], score: prevState[0].score + 1 },
              { ...players[1] },
            ]
          : [
              { ...players[0] },
              { ...players[1], score: prevState[1].score + 1 },
            ];
      });
    }

    dispatch(resetSquares());
    dispatch(resetXTurn());
  };

  const addPlyersName = (name1, name2) => {
    setPlayers([
      { ...players[0], name: name1 },
      { ...players[1], name: name2 },
    ]);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Board />
        <Counter players={players} />
      </div>

      {players[1].name === '' && players[1].name === '' && (
        <Modal>
          <Form onSubmit={addPlyersName} />
        </Modal>
      )}

      <CSSTransition
        in={winner === null && !squares.includes(null)}
        timeout={500}
        classNames={modalTransition}
        unmountOnExit
      >
        <Modal>
          <p className={styles.notifyText}>draw game. nobody won.</p>
          <button className={styles.button} onClick={handleButtonClick}>
            Play again
          </button>
        </Modal>
      </CSSTransition>

      <CSSTransition
        in={Boolean(winner)}
        timeout={6000}
        classNames={modalTransition}
        unmountOnExit
      >
        <Modal>
          <p className={styles.notifyText}>
            {`${winner === 'X' ? players[0].name : players[1].name} is winner`}
          </p>
          <button className={styles.button} onClick={handleButtonClick}>
            Play again
          </button>
        </Modal>
      </CSSTransition>
    </>
  );
}
