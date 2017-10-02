import React from 'react'

const Post = ({ post }) => {
    return (
        <div className="post">
            <header>
                <h3 className="post-title">{post.title}</h3>
                <h4 className="post-author">{post.author}</h4>
            </header>
            <p className="post-body">{post.body}</p>
        </div>
    )
}

export default Post