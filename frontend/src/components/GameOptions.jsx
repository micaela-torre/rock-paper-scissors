import { memo } from 'react';
import { GAME_ITEMS } from '../constants';
import styles from './styles.module.css';
import Option from './Option';

const GameOptions = ({  setVisible , verifyOption}) => {
    return (
        <div className={styles.container_options}>
            {GAME_ITEMS.map(item => (
                <Option
                    key={item.name}
                    color={item?.color}
                    image={item?.image}
                    name={item?.name}
                    setVisible={setVisible}
                    items={GAME_ITEMS}
                    verifyOption={verifyOption}
                />
            ))}
        </div>
    );
};

export default memo(GameOptions);
