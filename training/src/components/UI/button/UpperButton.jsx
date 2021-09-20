import React from 'react';
import classes from './UpperButton.module.css';

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={classes.UpperBtn}>
            {children}
        </button>
    );
};

export default Button;