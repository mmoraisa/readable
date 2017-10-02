import React, { Component } from 'react'
import PostList from '../components/PostList'
import { fetchPosts } from '../actions/postsActions'
import { connect } from 'react-redux'

class MainPage extends Component{

    componentDidMount() {
        this.props.fetchPosts()
    }

    render () {
        const categoryId = this.props.match.params['categoryId']

        if(categoryId)
            console.log('todo: implement category filter')
        
        return (
            <div className="main-page">
                <PostList />
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