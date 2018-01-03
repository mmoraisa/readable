import React, { Component } from 'react'
import timestampToDayMonthYear from '../utils/date'
import { withRouter } from 'react-router'

class Post extends Component{

    redirectToPost = (categoryPath,postId) => {
        this.props.history.push(`/${categoryPath}/${postId}`)
    }

    callEditPost = evt => {
        const { post } = this.props
        this.props.history.push(`/${post.category}/${post.id}/edit`)
        evt.stopPropagation()
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
                    <button className="post-edit" onClick={evt => { this.callEditPost(evt) }}><span className="fa fa-edit"></span></button>
                    <div className="post-score">
                        <button onClick={evt => { votePost(post.id,'downVote',evt) }}><span className="fa fa-thumbs-o-down"></span></button>
                        <span className="post-vote-score">{post.voteScore}</span>
                        <button onClick={evt => { votePost(post.id,'upVote',evt) }}><span className="fa fa-thumbs-o-up"></span></button>
                    </div>
                    <div className="post-comments"><span className="fa fa-comments"></span>{post.commentCount}</div>
                    <div className="post-date"><span className="fa fa-calendar"></span>{timestampToDayMonthYear(post.timestamp)}</div>
                </header>
                <p className="post-body">{post.body}</p>
            </div>
        )
    }
}

export default withRouter(Post)