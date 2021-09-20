import React from 'react';
import Button from "./UI/button/UpperButton";
import UpperInput from "./UI/input/UpperInput";
import { useState } from 'react';

const PostForm = (props) => {
   
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    
    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id: props.posts.length + 1,
            title: title, 
            body: body,
        }
        props.setPosts([...props.posts, newPost]);
        setTitle('');
        setBody('');
    }

    return (
        <form>
            <UpperInput placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <UpperInput placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
            <Button onClick={addNewPost}>Add post</Button>
        </form>
    );
};

export default PostForm;