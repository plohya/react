import React from 'react';
import { useState } from 'react';
import Post from "./Post";

const PostsList = ({title, setPosts, posts}) => {

    return (
        <div>
            <div className='title'>{title}</div>
            {
                posts.map ((post, index) => 
                    <Post post={post} key={post.id} posts={posts} number={index + 1} setPosts={setPosts} />
                )
            }
        </div>
    );
};

export default PostsList;