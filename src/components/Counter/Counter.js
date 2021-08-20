import React from 'react';
import styles from './Counter.module.css';

export default function Counter({ players }) {
  return (
    <div className={styles.counter}>
      <h2 className={styles.title}>Score</h2>
      <p className={styles.name}>
        {players[0].name}: {players[0].score}
      </p>
      <p className={styles.name}>
        {players[1].name}: {players[1].score}
      </p>
    </div>
  );
}
