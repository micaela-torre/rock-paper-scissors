import { memo } from 'react';
import { GAME_ITEMS } from '../constants';
import styles from './styles.module.css';
import Option from './Option';

const GameOptions = ({  setVisible , verifyOption}) => {
    return (
        <div className={styles.container_options}>
            {GAME_ITEMS.map(({id, color, image, name}) => (
                <Option
                    key={`GameOptions_${id}`}
                    color={color}
                    image={image}
                    name={name}
                    setVisible={setVisible}
                    items={GAME_ITEMS}
                    verifyOption={verifyOption}
                />
            ))}
        </div>
    );
};

export default memo(GameOptions);
