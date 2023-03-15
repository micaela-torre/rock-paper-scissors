import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import React, { memo, useState } from 'react';
import rules from '../assets/image-rules.svg';
import styles from './styles.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = () => {
    const [openAlert, setOpenAlert] = useState(false);

    return (
        <>
            <button onClick={() => setOpenAlert(prev => !prev)} className={styles.rules_button}>
                Rules
            </button>
            <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenAlert(prev => !prev)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <img className={styles.rules_image} src={rules} alt="game_rules" />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default memo(Alert);
