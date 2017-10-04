import React, { Component } from 'react'

class PostDetails extends Component{

    state = {
        postTitle: '',
        postAuthor: '',
        postBody: ''
    }

    componentWillReceiveProps = props => {
        this.setState({
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

    render () {
        const { readOnly } = this.props
        const { postTitle, postAuthor, postBody } = this.state
        return (
            <div className="post-details">
                <input name="post-title" type="text" value={postTitle} readOnly={readOnly} onChange={this.handleOnChangePostTitle} />
                <input name="post-author" type="text" value={postAuthor} readOnly={readOnly} onChange={this.handleOnChangePostAuthor} />
                <textarea name="post-body" value={postBody} readOnly={readOnly} onChange={this.handleOnChangePostBody} />
            </div>
        )
    }
}

export default PostDetails