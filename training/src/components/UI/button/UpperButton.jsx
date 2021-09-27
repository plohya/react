import React from 'react';
import classes from './UpperButton.module.css';

const UpperButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.UpperBtn}>
            {children}
        </button>
    );
};

export default UpperButton;