import React, { Component } from 'react'

import { voteComment } from '../actions/commentsActions'
import { connect } from 'react-redux'

import './Comment.css'

const initialState = {
    commentAuthor: '',
    commentBody: ''
}

class Comment extends Component{

    state = initialState

    handleSave = () => {
        const { comment, callCreateComment, callSaveComment } = this.props
        const { commentAuthor, commentBody } = this.state

        if(comment){
            // save
            debugger;
        }
        else{
            callCreateComment(commentAuthor,commentBody)
            this.setState(initialState)
        }
    }
    
    handleOnChangeCommentAuthor = e => {
        this.setState({
            commentAuthor: e.target.value
        })
    }

    handleOnChangeCommentBody = e => {
        this.setState({
            commentBody: e.target.value
        })
    }
        
    render () {
        const { comment = { body: 'Content', author: 'Author Name', voteScore: 0 }, voteComment } = this.props

        return (
            <div className="comment">
                <div className="body">
                    <textarea defaultValue={comment.body} onChange={this.handleOnChangeCommentBody}></textarea>
                </div>
                <div className="author">by <input type="text" defaultValue={comment.author} onChange={this.handleOnChangeCommentAuthor}/></div>
                { comment.id && 
                (<div className="comment-score">
                    <button onClick={() => { voteComment(comment.id,'downVote') }}><span className="fa fa-thumbs-o-down"></span></button>
                    <span className="comment-vote-score">{comment.voteScore}</span>
                    <button onClick={() => { voteComment(comment.id,'upVote') }}><span className="fa fa-thumbs-o-up"></span></button>
                </div>)}
                { !comment.id &&
                (
                    <button onClick={this.handleSave} className="btn btn-save"><i className="fa fa-save"></i>Save</button>
                )}
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