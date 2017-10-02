import React from 'react'

const Post = ({ post }) => {
    return (
        <div className="post">
            <header>
                <div className="post-info">
                    <h3 className="post-title">{post.title}</h3>
                    <h4 className="post-author">{post.author}</h4>
                </div>
                <div className="post-score">
                    <button><span className="fa fa-thumbs-o-down"></span></button>
                    <span className="post-vote-score">{post.voteScore}</span>
                    <button><span className="fa fa-thumbs-o-up"></span></button>
                </div>
            </header>
            <p className="post-body">{post.body}</p>
        </div>
    )
}

export default Post