import React from 'react';
import { useState } from 'react';

const Input = () => {

    let [value, setValue] = useState('');

    function changeInputValue() {
        setValue(value = document.getElementById('input').value);
    }
    return (
        <div>
            <h2>String in input: {value}</h2>
            <input id='input' onChange={changeInputValue} value = {value} placeholder='write something'/>
        </div>
    );
};

export default Input;