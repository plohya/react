import React from 'react';
import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    
    function increment() {
        setCount(++count);
    }

    function decrement() {
        setCount(--count);
    }
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick = {decrement}>
               Decrement
            </button>
            <button onClick = {increment}>
               Increment
            </button>
        </div>
    );
};

export default Counter;