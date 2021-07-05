import { func } from "prop-types";
import React from "react";
import './index.css'

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

const App = () => {

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

    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearch = e => {
      setSearchTerm(e.target.value);
    };

    const searchedStories = stories.filter( story => 
      story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );

  return (
    <div className='wrapper'>
      <h1>Hello</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories}/>
    </div>
  );
};

  const Search = (props) => {
 
    return (
       <div>
         <label htmlFor="search">Search: </label>
         <input id="search" type="text" onChange={props.onSearch} />
         <div>Watch: {props.searchTerm}</div>
       </div>
    )
   }

export default App;