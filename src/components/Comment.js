import React, { Component } from 'react'

import { voteComment } from '../actions/commentsActions'
import { connect } from 'react-redux'

import './Comment.css'

class Comment extends Component{
    render () {
        const { comment, voteComment } = this.props

        return (
            <div className="comment">
                <div className="body">
                    {comment.body}
                </div>
                <div className="author">by {comment.author}</div>
                <div className="comment-score">
                    <button onClick={() => { voteComment(comment.id,'downVote') }}><span className="fa fa-thumbs-o-down"></span></button>
                    <span className="comment-vote-score">{comment.voteScore}</span>
                    <button onClick={() => { voteComment(comment.id,'upVote') }}><span className="fa fa-thumbs-o-up"></span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return { comments }
}

export default connect(mapStateToProps, {
    voteComment
})(Comment);