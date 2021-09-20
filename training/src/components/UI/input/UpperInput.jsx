import React from 'react';
import classes from './UpperInput.module.css';
const UpperInput = (props) => {
    return (
        <input className={classes.UpperInpt} {...props} />
    );
};

export default UpperInput;