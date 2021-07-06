// import { func } from "prop-types";
import React from "react";
// import { useState } from 'react';
import './todo.css'
import Header from './components/headerToDo'
import Body from './components/bodyToDo'
import Footer from './components/footerToDo'


const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App;