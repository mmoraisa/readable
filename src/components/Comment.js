import React from 'react'

const Comment = ({ comment }) => {
    return  (
        <div className="comment">{comment.body}</div>
    )
}

export default Comment