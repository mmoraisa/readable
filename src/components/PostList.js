import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'
import { withRouter } from 'react-router'

import sortBy from 'sort-by'

class PostList extends Component{

    state = {
        reverse: true,
        selectedSortBy: 'voteScore'
    }

    changeSelectedSortBy = e => {
        this.setState({
            selectedSortBy: e.target.value            
        })
    }

    revertOrder = () => {
        this.setState(prev => {
            return {
                reverse: !prev.reverse
            }
        })
    }

    createPost = () => {
        this.props.history.push('/create/post')
    }

    callDeletePost = (postId,evt) => {
        this.props.callDeletePost(postId)
        evt.stopPropagation()
    }

    render () {
        const { posts } = this.props
        const { selectedSortBy } = this.state

        const sortedPosts = posts.sort(sortBy((this.state.reverse ? '-' : '') + selectedSortBy))

        return (
            <div className="post-list">
                <div className="order-control">
                <button onClick={this.createPost} className="btn btn-create"><span className="fa fa-plus"></span>Create Post</button>
                    <select name="select-sort-by" onClick={this.changeSelectedSortBy} defaultValue={selectedSortBy}>
                        <option value="voteScore">Vote Score</option>
                        <option value="timestamp">Creation Date</option>
                    </select>
                    <button onClick={this.revertOrder}>
                        {this.state.reverse && (<span className="fa fa-sort-amount-asc"></span>)}
                        {!this.state.reverse && (<span className="fa fa-sort-amount-desc"></span>)}
                    </button>
                </div>
                {sortedPosts.map(post => (
                    <Post key={post.id} post={post} callDeletePost={this.callDeletePost}/>
                ))}
            </div>
        )
    }
}

export default withRouter(PostList)