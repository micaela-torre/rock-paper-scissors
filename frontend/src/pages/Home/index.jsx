import Score from '../../components/Score';
import styles from '../Home/styles.module.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import Alert from '../../components/Alert';
import GameOptions from '../../components/GameOptions';
import ChosenOptions from '../../components/ChosenOptions';
import { useVerify } from '../../hooks/useVerify';

export const Home = () => {
    const [visible, setVisible] = useState(false);
    const [chosenOption, setChosenOption] = useState({});
    const [isWinner, setIsWinner] = useState(false);
    const [houseOption, setHouseOption] = useState({});
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 0);

    const { verifyOption } = useVerify({ setChosenOption, setHouseOption, setIsWinner, score });

    const tryAgainHandler = () => {
        const newScore = JSON.parse(localStorage.getItem('score'));
        const isTie = chosenOption?.name === houseOption?.name;
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
                    <GameOptions verifyOption={verifyOption} setVisible={setVisible} />
                ) : (
                    <ChosenOptions chosenOption={chosenOption} isWinner={isWinner} tryAgainHandler={tryAgainHandler} houseOption={houseOption} />
                )}
            </div>
            <Alert />
        </div>
    );
};
