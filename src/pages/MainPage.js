import React, { Component } from 'react'
import PostList from '../components/PostList'
import { fetchPosts } from '../actions/postsActions'
import { connect } from 'react-redux'

class MainPage extends Component{

    componentDidMount() {
        this.props.fetchPosts()
    }

    render () {
        const { posts } = this.props
        const categoryId = this.props.match.params['categoryId']
        
        let showingPosts = posts

        if(categoryId)
            showingPosts = posts.filter(post => post.category === categoryId)
        
        return (
            <div className="main-page">
                <PostList posts={showingPosts}/>
            </div>
        )
    }
}


function mapStateToProps({ posts }) {
    return {
        posts: posts
    }
}

export default connect(mapStateToProps, {
    fetchPosts
})(MainPage);