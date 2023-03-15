import paper from '../assets/icon-paper.svg';
import scissors from '../assets/icon-scissors.svg';
import rock from '../assets/icon-rock.svg';

export const GAME_ITEMS = [
    { image: paper, color: 'rgb(88,110,222)', name: 'paper' },
    { image: scissors, color: 'rgb(235,169,37)', name: 'scissors' },
    { image: rock, color: 'rgb(217,62,91)', name: 'rock' },
];

export const GAMES_RULES = {
    paper: { rock: true, scissors: false },
    scissors: { rock: false, paper: true },
    rock: { paper: false, scissors: true },
};
