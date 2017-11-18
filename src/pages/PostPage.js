import React, { Component } from 'react'

import { fetchPost, updatePost, createPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentsActions'
import { fetchCategories } from '../actions/categoriesActions'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'

import './PostPage.css'

class PostPage extends Component{

    componentDidMount () {
        const { match, fetchPost, fetchComments, fetchCategories } = this.props
        
        fetchCategories()

        const postId = match.params['postId']

        if(postId){
            fetchPost(postId)
            fetchComments(postId)
        }
    }
    
    render () {
        const { post, comments, match, updatePost, createPost, categories } = this.props
        const isEditPage = match.url.split('/').includes('edit') || match.path === '/create/post'
        const readOnly = !isEditPage
    
        return (
            <div className="post-page">
                <div className="post-info">
                    <PostDetails post={post} match={match} categories={categories} readOnly={readOnly} updatePost={updatePost} createPost={createPost}/>
                    {!isEditPage && (<CommentList comments={comments}/>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ post, comments, categories }){
    return { post, comments, categories }
}

export default withRouter(connect(mapStateToProps, {
    fetchPost,
    updatePost,
    fetchComments,
    createPost,
    fetchCategories
})(PostPage))