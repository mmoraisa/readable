import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component{
    render () {
        const { posts } = this.props
        return (
            <div className="post-list">
                {posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        )
    }
}

export default PostList