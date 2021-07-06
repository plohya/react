import { func } from "prop-types";
import React from "react";
import { useState } from 'react';
import './index.css'

// играю с state

function BlockBtn(props) {
  let [counter, setCounter] = useState(0);
  let [isClicked, changePosition] = useState(false);
 
  return (
    <button className='black-block' onClick={(e) => 
            changeDetected(e.target, isClicked, changePosition, setCounter, counter)}>
      {counter}
    </button>
  )
}

function changeDetected(elem, isClicked, changePosition, setCounter, counter) {
  setCounter(counter + 1);
  if(isClicked === false) {
    changePosition(true);
    elem.classList.add('redBtn');
  } else if(isClicked === true) {
    changePosition(false);
    elem.classList.remove('redBtn');
  }
}

  // объект списка. принимает свойства, чтобы вывести их из объекта историй
const List = (props) => 
  (
    <div>
      {props.list.map(item => (  
        <div key={item.objectID}>
          <span className='list_item'>{item.title}</span>
          <span className='list_item'>{item.author}</span>
          <span className='list_item'>{item.points}</span>
        </div>
    ))}
    </div>
  );

  // объект формы. принимает свойсвта, чтобы отобразить измененное состояние в инпуте
const Search = (props) => {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} value={props.search}/>
     </div>
  )
}

// приложнние 
const App = () => {

  // массив объектов, содержит информацию
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    ];


    // объявление переменной searchterm, в которой хранятся данные и функции setSearchTerm, для её обновления
    const [searchTerm, setSearchTerm] = React.useState('react');
    // объявление функции для обновления состояния переменной searchTerm
    const handleSearch = e => {
      setSearchTerm(e.target.value);
    };

    // сортировка объектов из stories по введенным в инпут значениям
    const searchedStories = stories.filter( story => 
      story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );

  // отрисовка и передача в Search() обновленных данных searchTerm, а в List() того, что надо отобразить
  return (
    <div className='wrapper'>
      <h1>Hello</h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <hr />
      <List list={searchedStories}/>
      <BlockBtn />
    </div>
  );
};


export default App;