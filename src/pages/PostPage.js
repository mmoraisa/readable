import React, { Component } from 'react'

class PostPage extends Component{
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

export default PostPage