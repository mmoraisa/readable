import React from 'react'
import Comment from './Comment'

import sortBy from 'sort-by'

const CommentList = ({ comments }) => {

    const sortedComments = comments.sort(sortBy('-voteScore'))

    return (
        <div className="comment-list">
            <h2>Comments ({comments.length})</h2>
            {sortedComments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentList