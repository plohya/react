// import { func } from "prop-types";
import React from "react";
import { useState } from 'react';
import '../todo.css';

function Header() {
    let [pressed, getPressed] = useState(false);
    return(
        <div className='wrapper'>
            <h1>ToDo List</h1>
            <ul className='list'>
                <li><button className='list-header_item' onClick = {(e) => checkBtn(e.target)}>Add</button></li>
                <li><button className='list-header_item' onClick = {(e) => checkBtn(e.target, pressed, getPressed)}>Select</button></li>
                <li><button className='list-header_item' onClick = {(e) => checkBtn(e.target)}>Clear All</button></li>
                <li><button className='list-header_item' onClick = {(e) => checkBtn(e.target)}>Clear All Selected</button></li>
            </ul>
        </div>
    )
}

const checkBtn = (elem, pressed, getPressed) => {
    if(elem.textContent === 'Add') {
        addToDo();
    } else if (elem.textContent === 'Clear All') {
        document.getElementById('todosPlace').innerHTML = '';
        document.getElementById('input').value = '';
    } else if(elem.textContent === 'Select') {
        // Choise(pressed, getPressed, elem);
    }
}

const addToDo = () => {
    console.log('adding');
    const list = document.getElementById('todosPlace');
    let counter = document.getElementById('todosPlace').children.length;
    console.log(counter);
    list.innerHTML += `<div class='item'>${counter+1}. ${document.getElementById('input').value.trim()}</div>`;
}

const Choise = () => {
    const items = document.querySelectorAll('.item');
    console.log('choise!');
    console.log(items);

    // for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);
    //     items[i].onClick((e) => {
    //         e.target.classList.add('selected');
    //     })
    // }; 
}

export default Header;