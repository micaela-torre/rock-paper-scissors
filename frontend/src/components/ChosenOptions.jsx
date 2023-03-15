import { memo } from 'react';
import Option from './Option';
import styles from './styles.module.css';

const ChosenOptions = ({ chosenOption, isWinner, tryAgainHandler, houseOption }) => {
    return (
        <div className={styles.chosen_options}>
            <div>
                <p>You picked</p>
                <Option color={chosenOption?.color} image={chosenOption?.image} isWinner={isWinner} />
            </div>

            <div className={styles.container_try_again}>
                {chosenOption?.name === houseOption?.name ? <p> it's a tie! </p> : <p> {isWinner ? 'You Win!' : 'You Lose!'}</p>}

                <button onClick={tryAgainHandler}>Play Again</button>
            </div>
            <div>
                <p>The house picked</p>
                <Option color={houseOption?.color} image={houseOption?.image} isWinner={!isWinner && !(chosenOption?.name === houseOption?.name)} />
            </div>
        </div>
    );
};

export default memo(ChosenOptions);
