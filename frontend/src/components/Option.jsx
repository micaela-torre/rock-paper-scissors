import styles from './styles.module.css';

const Option = ({ image, color, setVisible, name, verifyOption, items, isWinner }) => {
    const chooseOptionHandler = () => {
        setVisible(true);
        verifyOption({ color: color, image: image, name: name }, items[Math.floor(Math.random() * 3)]);
    };

    return (
        <div
            className={`${styles.container_option} ${isWinner ? styles.is_winner : ''}`}
            style={{ background: color }}
            onClick={() => chooseOptionHandler(color, image, name)}
        >
            <div className={styles.container_image}>
                <img className={styles.image} src={image} alt={'option-' + name} />
            </div>
        </div>
    );
};

export default Option;
