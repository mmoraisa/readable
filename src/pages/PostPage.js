import React, { Component } from 'react'

import { fetchPost, updatePost, createPost } from '../actions/postActions'
import { deletePost } from '../actions/postsActions'
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
        
        if(match.params.categoryPath === 'category' || match.params.categoryPath === 'create') return false
        
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

        if(match.params.categoryPath === 'category' || match.params.categoryPath === 'create') return false
    
        return (
            <div className="post-page">
                <div className="post-info">
                    <PostDetails post={post} match={match} categories={categories} readOnly={readOnly} updatePost={updatePost} createPost={createPost} deletePost={deletePost}/>
                    {!isEditPage && (<CommentList comments={comments} postId={post.id}/>)}
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
    fetchCategories,
    deletePost
})(PostPage))