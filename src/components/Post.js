import React, { Component } from 'react'
import { votePost } from '../actions/postsActions'
import { connect } from 'react-redux'

class Post extends Component{
    render () {
        const { post, votePost } = this.props

        return (
            <div className="post">
                <header>
                    <div className="post-info">
                        <h3 className="post-title">{post.title}</h3>
                        <h4 className="post-author">{post.author}</h4>
                    </div>
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

export default connect(mapStateToProps, {
    votePost
})(Post);