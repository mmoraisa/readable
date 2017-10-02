import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component{
    render () {
        return (
            <div className="post-list">
                PostList
                <Post />
            </div>
        )
    }
}

export default PostList