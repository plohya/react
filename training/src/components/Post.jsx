import React, { useRef } from 'react';
import { useState } from 'react';

const Post = ({posts, setPosts, ...props}) => {

    function removePost() {
        setPosts(posts.filter(post => post.id !== props.post.id));
        console.log(posts);
    }

    return (
        <div className='post'>
        <div className='post__content'>
            <strong className='post-title'>{props.number} {props.post.title}</strong>
            <div className='post-subtitle'>
                {props.post.body}
            </div>
        </div>
        <div className='post__btns'>
            <button className='post-btn' onClick={removePost}>Delete posts</button>
        </div>
    </div>
    );
};

export default Post;