import React, { Component } from 'react'

import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentsActions'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostDetails from '../components/PostDetails'
import CommentList from '../components/CommentList'

class PostPage extends Component{

    componentDidMount () {
        const { match, fetchPost, fetchComments } = this.props
        
        const postId = match.params['postId']

        if(postId){
            fetchPost(postId)
            fetchComments(postId)
        }
    }
    
    render () {
        const { post, comments, match } = this.props
        const isEditPage = match.url.split('/').includes('edit')
        const readOnly = !isEditPage

        return (
            <div className="post-page">
                <div className="post-info">
                    <PostDetails post={post} readOnly={readOnly}/>
                    <CommentList comments={comments} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ post, comments }){
    return { post, comments }
}

export default withRouter(connect(mapStateToProps, {
    fetchPost,
    fetchComments
})(PostPage))