import React, { Component } from 'react'
import Comment from './Comment'

import { createComment, updateComment, deleteComment } from '../actions/commentsActions'
import { connect } from 'react-redux'

import sortBy from 'sort-by'

class CommentList extends Component{

    state = {
        addingNewComment: false
    }

    addNewComment = () => {
        this.setState({
            addingNewComment: true 
        })
    }

    endNewComment = () => {
        this.setState({
            addingNewComment: false
        })
    }

    callCreateComment = (author,body) => {
        const { createComment, postId } = this.props
        createComment(author,body,postId)
    }

    callSaveComment = (commentId, commentBody) => {
        const { updateComment } = this.props
        updateComment(commentId,commentBody)
    }

    callDeleteComment = commentId => {
        const { deleteComment } = this.props
        deleteComment(commentId)
    }

    render () {
        const { comments } = this.props
        const { addingNewComment } = this.state
        const sortedComments = comments.sort(sortBy('-voteScore'))

        return (
            <div className="comment-list">
                <h2>Comments ({comments.length})</h2>
                <button onClick={this.addNewComment} className="btn btn-add-comment"><i className="fa fa-plus"></i>Add new comment</button>
                {
                    addingNewComment && (<Comment callCreateComment={this.callCreateComment} endNewComment={this.endNewComment} edit={true}/>)
                }
                {sortedComments.map(comment => (
                    <Comment callSaveComment={this.callSaveComment} callDeleteComment={this.callDeleteComment} key={comment.id} comment={comment} />
                ))}
            </div>
        )
    }
}

export default connect(function(){ return {} }, {
    createComment,
    updateComment,
    deleteComment
})(CommentList);