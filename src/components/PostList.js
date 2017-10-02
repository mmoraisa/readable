import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

import sortBy from 'sort-by'

class PostList extends Component{

    state = {
        reverse: true
    }

    revertOrder = () => {
        this.setState(prev => {
            return {
                reverse: !prev.reverse
            }
        })
    }

    render () {
        const { posts } = this.props
        const sortedPosts = posts.sort(sortBy((this.state.reverse ? '-' : '') + 'voteScore'))

        return (
            <div className="post-list">
                <div className="order-control">
                    <button onClick={this.revertOrder}>
                        {this.state.reverse && (<span className="fa fa-sort-amount-asc"></span>)}
                        {!this.state.reverse && (<span className="fa fa-sort-amount-desc"></span>)}
                    </button>
                </div>
                {sortedPosts.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        )
    }
}

export default PostList