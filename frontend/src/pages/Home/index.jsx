import Score from '../../components/Score';
import styles from '../Home/styles.module.css';
import logo from '../../assets/logo.svg';
import Option from '../../components/Option';
import { useState } from 'react';
import { GAMES_RULES, GAME_ITEMS } from '../../constants';
import Alert from '../../components/Alert';

export const Home = () => {
    const [visible, setVisible] = useState(false);
    const [chosenOption, setChosenOption] = useState({});
    const [isWinner, setIsWinner] = useState(false);
    const [houseOption, setHouseOption] = useState({});
    const [openAlert, setOpenAlert] = useState(false);
    const [score, setScore] = useState(0);
    const isTie = chosenOption?.name === houseOption?.name;
    const verifyOption = (chosenOptionUser, chosenOptionHouse) => {
        localStorage.setItem('score', JSON.stringify(score));
        setIsWinner(GAMES_RULES[chosenOptionUser?.name][chosenOptionHouse?.name]);
        setChosenOption(chosenOptionUser);
        setHouseOption(chosenOptionHouse);
    };
    const tryAgainHandler = () => {
        const newScore = JSON.parse(localStorage.getItem('score'));
        isWinner ? setScore(newScore + 1) : setScore(newScore > 0 && !isTie ? newScore - 1 : newScore);
        setVisible(false);
        setChosenOption({});
    };
    return (
        <div className={styles.container_home}>
            <div className={styles.container_logo}>
                <img src={logo} alt="logo" />
                <Score score={score} />
            </div>
            <div className={styles.main_container}>
                {!visible ? (
                    <div className={styles.container_options}>
                        {GAME_ITEMS.map(item => (
                            <Option
                                key={item.image}
                                color={item?.color}
                                image={item?.image}
                                name={item?.name}
                                setVisible={setVisible}
                                items={GAME_ITEMS}
                                verifyOption={verifyOption}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.chosen_options}>
                        <div>
                            <p>You picked</p>
                            <Option color={chosenOption?.color} image={chosenOption?.image} isWinner={isWinner} />
                        </div>

                        <div className={styles.container_try_again}>
                            {isTie ? <p> it's a tie! </p> : <p> {isWinner ? 'You Win!' : 'You Lose!'}</p>}

                            <button onClick={tryAgainHandler}>Play Again</button>
                        </div>
                        <div>
                            <p>The house picked</p>
                            <Option color={houseOption?.color} image={houseOption?.image} isWinner={!isWinner && !isTie} />
                        </div>
                    </div>
                )}
            </div>

            <button onClick={() => setOpenAlert(prev => !prev)} className={styles.rules_button}>
                Rules
            </button>
            {openAlert && <Alert open={openAlert} onClose={setOpenAlert} />}
        </div>
    );
};
