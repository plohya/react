import React from 'react';
import UpperButton from "./UI/button/UpperButton";
import UpperInput from "./UI/input/UpperInput";
import { useState } from 'react';

const PostForm = (props) => {
   
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    
    function addNewPost(e) {
        e.preventDefault();
        if(title !== '' & body !== '') {
            const newPost = {
                id: Date.now(),
                title: title, 
                body: body,
            }
            props.setPosts([...props.posts, newPost]);
            setTitle('');
            setBody('');
        } else {
            alert('Check entered data, please :)');
        }
    }

    return (
        <form>
            <UpperInput placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <UpperInput placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
            <UpperButton onClick={addNewPost}>Add post</UpperButton>
        </form>
    );
};

export default PostForm;