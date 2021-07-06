// import { func } from "prop-types";
import React from "react";
// import { useState } from 'react';

function Body() {
    return(
        <div className='wrapper'>
            <hr />
            <div className='input-place'>
                <label className='label' htmlFor='input'>What do you want to do?</label>
                <input id='input' className='input'></input>
            </div>
            <div id='todosPlace' className='place-todos'>
            </div>
        </div>
    )
}

export default Body;