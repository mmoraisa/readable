import React, { Component } from 'react'
import './PostDetails.css'

import { withRouter } from 'react-router'

import timestampToDayMonthYear from '../utils/date.js'

class PostDetails extends Component{

    state = {
        postId: '',
        postTitle: '',
        postAuthor: '',
        postBody: '',
        postCategory: ''
    }

    componentWillReceiveProps = props => {
        this.setState({
            postId: props.post.id,
            postTitle: props.post.title,
            postAuthor: props.post.author,
            postBody: props.post.body,
            postCategory: props.post.category
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

    handleOnChangePostCategory = e => {
        this.setState({
            postCategory: e.target.value
        })
    }

    savePost = () => {
        const { postId, postTitle, postAuthor, postBody, postCategory } = this.state

        if(postId === undefined){
            this.props.createPost(postTitle, postAuthor, postBody, postCategory);
        } else{
            this.props.updatePost(postId, postTitle, postAuthor, postBody, postCategory)
        }

        this.redirectToPosts()
    }

    redirectToPosts = () => {
        this.props.history.push('/')
    }

    redirectToEdit = (postId, postCategory) => {
        this.props.history.push(`/${postCategory}/${postId}/edit`)
    }

    removePost = () => {
        const { postId } = this.state
        const { deletePost } = this.props
        deletePost(postId)
    }

    render () {
        const { post, readOnly, categories, match } = this.props
        const { postId, postTitle, postAuthor, postBody, postCategory } = this.state

        return (
            <div className="post-details">
                <button onClick={this.redirectToPosts} className="btn btn-back"><span className="fa fa-angle-left"></span>Back to posts</button>
                {match.path.indexOf('edit') === -1 && match.path !== '/create/post' && (
                    <div className="post-controls">
                        <button onClick={this.removePost} className="btn btn-remove"><span className="fa fa-trash"></span>Remove post</button>
                        <button onClick={() => { this.redirectToEdit(postId,postCategory) }} className="btn btn-edit"><span className="fa fa-edit"></span>Edit post</button>
                    </div>
                )}
                <header>
                    <input name="post-title" type="text" placeholder="Title" value={postTitle} readOnly={readOnly} onChange={this.handleOnChangePostTitle} />
                    <input name="post-author" type="text" placeholder="Post Author" value={postAuthor} readOnly={readOnly} onChange={this.handleOnChangePostAuthor} />
                </header>
                <hr/>
                <textarea name="post-body" placeholder="Content" value={postBody} readOnly={readOnly} onChange={this.handleOnChangePostBody} />
                {
                    readOnly && (
                        <div>
                            <div>Creation Date: {post.timestamp && timestampToDayMonthYear(post.timestamp)}</div>
                            <div>Vote Score: {post.voteScore}</div>
                        </div>
                    )
                }
                {!readOnly && (
                    <div>
                        <select onChange={this.handleOnChangePostCategory} defaultValue={postCategory}>
                            <option value="" disabled>Select a category</option>
                            {categories.map(category => (
                                <option value={category.path} key={category.path}>{category.name}</option>
                            ))}
                        </select>
                        <button onClick={this.savePost} className="btn btn-save"><span className="fa fa-save"></span>Save Post</button>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(PostDetails)