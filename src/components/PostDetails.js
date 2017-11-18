import React, { Component } from 'react'
import './PostDetails.css'

import history from '../history';

class PostDetails extends Component{

    state = {
        postId: '',
        postTitle: '',
        postAuthor: '',
        postBody: ''
    }

    componentWillReceiveProps = props => {
        this.setState({
            postId: props.post.id,
            postTitle: props.post.title,
            postAuthor: props.post.author,
            postBody: props.post.body
        })
    }
    
    handleOnChangePostTitle = e => {
        this.setState({
            postTitle: e.target.value
        })
    }

    handleOnChangePostAuthor = e => {
        this.setState({
            postAuthor: e.target.value
        })
    }

    handleOnChangePostBody = e => {
        this.setState({
            postBody: e.target.value
        })
    }

    savePost = () => {
        const { postId, postTitle, postAuthor, postBody } = this.state
        this.props.updatePost(postId, postTitle, postAuthor, postBody)
    }

    redirectToPosts = () => {
        history.push('/')
    }

    render () {
        const { readOnly } = this.props
        const { postTitle, postAuthor, postBody } = this.state
        return (
            <div className="post-details">
                <button onClick={this.redirectToPosts} className="btn btn-back"><span className="fa fa-angle-left"></span>Back to posts</button>
                <header>
                    <input name="post-title" type="text" value={postTitle} readOnly={readOnly} onChange={this.handleOnChangePostTitle} />
                    <input name="post-author" type="text" value={postAuthor} readOnly={readOnly} onChange={this.handleOnChangePostAuthor} />
                </header>
                <hr/>
                <textarea name="post-body" value={postBody} readOnly={readOnly} onChange={this.handleOnChangePostBody} />
                {!readOnly && (
                    <button onClick={this.savePost} className="btn btn-save"><span className="fa fa-save"></span>Save Post</button>
                )}
            </div>
        )
    }
}

export default PostDetails