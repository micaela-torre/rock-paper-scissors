import { memo } from 'react';
import styles from './styles.module.css';

const Score = ({ score }) => {
    return (
        <div className={styles.score_box}>
            <p>Score</p> <p className={styles.score}>{score}</p>
        </div>
    );
};

export default memo(Score);
