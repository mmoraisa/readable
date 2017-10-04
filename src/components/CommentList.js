import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            <h2>Comments ({comments.length})</h2>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentList