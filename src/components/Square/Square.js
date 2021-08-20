import React from 'react';

import styles from './Square.module.css';
import { ReactComponent as XIcon } from '../../img/cross.svg';
import { ReactComponent as ZeroIcon } from '../../img/zero.svg';

export default function Square({ value, handleClick }) {
  return (
    <button className={styles.square} onClick={handleClick}>
      {value === 'X' && <XIcon className={styles.xIcon} />}
      {value === 'O' && <ZeroIcon className={styles.zeroIcon} />}
    </button>
  );
}
