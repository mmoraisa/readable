import React, { Component } from 'react'

import PropTypes from 'prop-types'

import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

import '../../node_modules/font-awesome/css/font-awesome.min.css'

import { fetchPosts, fetchCategoryPosts, deletePost } from '../actions/postsActions'
import { fetchCategories } from '../actions/categoriesActions'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainPage extends Component{
    static propTypes = {
        posts: PropTypes.array,
        categories: PropTypes.array
    }

    callDeletePost = postId => {
        const { deletePost } = this.props
        deletePost(postId)
    }

    componentWillReceiveProps = nextProps => {
        const { match, fetchPosts, fetchCategoryPosts, fetchCategories } = this.props
        const categoryPath = nextProps.match.params['categoryPath']

        if(match === nextProps.match) return false;
        
        if(nextProps.match.url === '/'){
            fetchPosts()
        } else{
            fetchCategoryPosts(categoryPath)
        }

        fetchCategories()
    }

    render () {
        const { posts, categories } = this.props
        
        return (
            <div className="main-page">
                <h1>Readable</h1>
                <CategoryList categories={categories}/>
                <PostList posts={posts} callDeletePost={this.callDeletePost}/>
            </div>
        )
    }
}

function mapStateToProps({ posts, categories }) {
    return {
        posts: posts,
        categories: categories
    }
}

export default withRouter(connect(mapStateToProps, {
    fetchPosts,
    fetchCategories,
    fetchCategoryPosts,
    deletePost
})(MainPage))