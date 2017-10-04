import React, { Component } from 'react'

import { fetchPost } from '../actions/postActions'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class PostPage extends Component{

    componentDidMount () {
        const { match, fetchPost } = this.props
        
        const postId = match.params['postId']

        if(postId)
            fetchPost(postId)
    }
    
    render () {
        const postId = this.props.match.params['postId']
        const isEditPage = this.props.match.url.split('/').includes('edit')

        return (
            <div className="post-page">
                {postId && ('Post Id: ' + postId)}
                {isEditPage && (' - Edit Page')}
                {!postId && ('Create Post')}
            </div>
        )
    }
}

function mapStateToProps({ post }){
    return { post }
}

export default withRouter(connect(mapStateToProps, {
    fetchPost
})(PostPage))