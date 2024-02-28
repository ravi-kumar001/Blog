import React from 'react';
import PostItem from './PostItem'
import classes from './posts-grid.module.css'

const PostGrid = (props) => {
    const { posts } = props;
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <PostItem key={Math.random()} post={post} />
            ))}
        </ul>
    );
};

export default PostGrid;