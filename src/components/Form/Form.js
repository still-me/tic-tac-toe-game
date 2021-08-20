import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ onSubmit }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleChange = e => {
    e.target.name === 'player1'
      ? setPlayer1(e.target.value)
      : setPlayer2(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(player1, player2);
    setPlayer1('');
    setPlayer2('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.head}>Enter your names</p>

      <label>
        <p className={styles.labelSignature}>Player 1</p>
        <input
          className={styles.field}
          type="text"
          name="player1"
          value={player1}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={styles.labelSignature}>Player 2</p>
        <input
          className={styles.field}
          type="text"
          name="player2"
          value={player2}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Go play
      </button>
    </form>
  );
}
