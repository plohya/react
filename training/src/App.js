import React from "react";
import { useState } from 'react';
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import './styles/app.css';


function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'JavaScript', body: 'JS is a programming language'},
            {id: 2, title: 'Book', body: 'Book is for reading'},
            {id: 3, title: 'Ghost', body: 'Ghost is for blogs'},
        ]
    )

    return (
        <div className='App'>
            <PostForm posts={posts} setPosts={setPosts} />

            { posts.length > 0
                ? <PostsList posts={posts} title='Posts list'  setPosts={setPosts} />
                : <h1> Your list is empty </h1> 
            }

        </div>
    );
}

export default App;