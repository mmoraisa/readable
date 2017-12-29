import React, { Component } from 'react'
import Comment from './Comment'

import { createComment } from '../actions/commentsActions'
import { connect } from 'react-redux'

import sortBy from 'sort-by'

class CommentList extends Component{

    addNewComment = () => {
        document.querySelector('.comment-list').classList.add('add-new-post');
    }

    callCreateComment = (author,body) => {
        const { createComment, postId } = this.props
        createComment(author,body,postId)
    }

    callSaveComment = comment => {
        // update a comment
    }

    render () {
        const { comments } = this.props
        const sortedComments = comments.sort(sortBy('-voteScore'))

        return (
            <div className="comment-list">
                <h2>Comments ({comments.length})</h2>
                <button onClick={this.addNewComment} className="btn btn-add-comment"><i className="fa fa-plus"></i>Add new comment</button>
                <Comment callCreateComment={this.callCreateComment}/>
                {sortedComments.map(comment => (
                    <Comment callSaveComment={this.callSaveComment} key={comment.id} comment={comment} />
                ))}
            </div>
        )
    }
}

export default connect(function(){ return {} }, {
    createComment
})(CommentList);