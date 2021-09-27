import React from "react";
import { useState } from 'react';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import './styles/app.css';


function App() {

    const [posts, setPosts] = useState(
        [ ]
    );

    const [selectedSort, setselectedSort] = useState('');

    const sortPosts = (sort) => {
        setselectedSort(sort);
        console.log(sort);
        setPosts([...posts].sort({}));
    }

    return (
        <div className='App'> 
            <PostForm posts={posts} setPosts={setPosts} />

            <hr/> 
            <Select 
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Sorting by:' 
            options={[
                {value: 'title', name: 'By title'},
                {value: 'body', name: 'By description' },
            ]}
            
            />

            { posts.length
                ? <PostsList posts={posts} title='Posts list'  setPosts={setPosts} />
                : <h1 className='empty-list'> Your list is empty </h1> 
            }

        </div>
    );
}

export default App;