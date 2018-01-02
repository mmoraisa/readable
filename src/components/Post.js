import React, { Component } from 'react'
import { votePost } from '../actions/postsActions'
import { connect } from 'react-redux'

import { withRouter } from 'react-router'

class Post extends Component{

    redirectToPost = (categoryPath,postId) => {
        this.props.history.push(`/${categoryPath}/${postId}`)
    }

    render () {
        const { post, votePost, callDeletePost } = this.props

        return (
            <div className="post" onClick={() => { this.redirectToPost(post.category,post.id) }}>
                <header>
                    <div className="post-info">
                        <h3 className="post-title">{post.title}</h3>
                        <h4 className="post-author">{post.author}</h4>
                    </div>
                    <button className="post-remove" onClick={evt => { callDeletePost(post.id,evt) }}><span className="fa fa-trash"></span></button>
                    <div className="post-score">
                        <button onClick={() => { votePost(post.id,'downVote') }}><span className="fa fa-thumbs-o-down"></span></button>
                        <span className="post-vote-score">{post.voteScore}</span>
                        <button onClick={() => { votePost(post.id,'upVote') }}><span className="fa fa-thumbs-o-up"></span></button>
                    </div>
                </header>
                <p className="post-body">{post.body}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return { posts }
}

export default withRouter(connect(mapStateToProps, {
    votePost
})(Post));