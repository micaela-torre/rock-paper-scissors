import { GAMES_RULES } from "../constants";


export const useVerify = ({ setChosenOption, setHouseOption, setIsWinner, score }) => {
    const verifyOption = (chosenOptionUser, chosenOptionHouse) => {
        localStorage.setItem('score', JSON.stringify(score));
        setIsWinner(GAMES_RULES[chosenOptionUser?.name][chosenOptionHouse?.name]);
        setChosenOption(chosenOptionUser);
        setHouseOption(chosenOptionHouse);
    };

    return { verifyOption };
};
