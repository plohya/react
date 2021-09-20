import React from 'react';
import { useState } from 'react';
import Post from "./Post";

const PostsList = ({title, setPosts, posts}) => {

    return (
        <div>
            <div className='title'>{title}</div>
            {
                posts.map (post => 
                    <Post post={post} key={post.id} posts={posts} setPosts={setPosts} />
                )
            }
        </div>
    );
};

export default PostsList;