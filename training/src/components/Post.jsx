import React, { useRef } from 'react';
import { useState } from 'react';

const Post = ({posts, setPosts, ...props}) => {

    function deletePost() {

        if(posts.indexOf(props.post) > -1) {
            setPosts(posts.splice(posts.indexOf(props.post), 1));
            console.log(posts.splice(posts.indexOf(props.post), 1));
        }
    }

    return (
        <div className='post'>
        <div className='post__content'>
            <strong>{props.post.id} {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className='post__btns'>
            <button onClick={deletePost}>Delete posts</button>
        </div>
    </div>
    );
};

export default Post;