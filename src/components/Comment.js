import React, { Component } from 'react'

import { voteComment } from '../actions/commentsActions'
import { connect } from 'react-redux'

import './Comment.css'

const initialState = {
    commentAuthor: '',
    commentBody: '',
    edit: false
}

class Comment extends Component{

    state = initialState

    handleSave = () => {
        const { commentAuthor, commentBody } = this.state
        const { comment, endNewComment, callCreateComment, callSaveComment } = this.props

        if(commentBody.length > 0){
            if(comment === undefined){
                if(commentAuthor.length > 0){
                    callCreateComment(commentAuthor,commentBody)
                    endNewComment()
                    this.setState(initialState)
                } else{
                    alert('You need to fill the author\'s name to proceed.')
                }
            }
            else{
                callSaveComment(comment.id,commentBody)
                this.setState(initialState)
            }
        } else{
            alert('You need to fill the comment\'s body name to proceed.')
        }
    }

    componentDidMount = () => {
        const { edit } = this.props
        let { comment } = this.props

        if(comment === undefined){
            comment = {
                author: '',
                body: ''
            }
        }

        this.setState({
            edit,
            commentAuthor: comment.author,
            commentBody: comment.body
        })
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

    enterEditMode = () => {
        this.setState({
            edit: true
        })
    }
        
    render () {
        const { comment = { body: 'Content', author: 'Author Name', voteScore: 0 }, voteComment, callDeleteComment } = this.props
        const { edit } = this.state

        return (
            <div className="comment">
                <div className="body">
                    <textarea defaultValue={comment.body} onChange={this.handleOnChangeCommentBody} disabled={!edit}></textarea>
                </div>
                <div className="author">by <input type="text" defaultValue={comment.author} onChange={this.handleOnChangeCommentAuthor} disabled={comment.id !== undefined}/></div>
                { comment.id && 
                (
                    <div className="controls">
                        <div className="comment-score">
                            <button onClick={() => { voteComment(comment.id,'downVote') }}><span className="fa fa-thumbs-o-down"></span></button>
                            <span className="comment-vote-score">{comment.voteScore}</span>
                            <button onClick={() => { voteComment(comment.id,'upVote') }}><span className="fa fa-thumbs-o-up"></span></button>
                        </div>
                        <button onClick={this.enterEditMode}><span className="fa fa-edit"></span></button>
                        <button onClick={() => { callDeleteComment(comment.id) }}><span className="fa fa-trash"></span></button>
                    </div>
                )}
                { edit &&
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