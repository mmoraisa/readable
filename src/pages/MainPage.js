import React, { Component } from 'react'

import PropTypes from 'prop-types'

import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

import '../../node_modules/font-awesome/css/font-awesome.min.css'

import { fetchPosts, fetchCategoryPosts } from '../actions/postsActions'
import { fetchCategories } from '../actions/categoriesActions'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainPage extends Component{
    static propTypes = {
        posts: PropTypes.array,
        categories: PropTypes.array
    }

    componentDidMount() {
        const { match, fetchPosts, fetchCategoryPosts, fetchCategories } = this.props
        const categoryPath = match.params['categoryPath']

        if(!categoryPath)
            fetchPosts()
        else
            fetchCategoryPosts(categoryPath)

        fetchCategories()
    }

    render () {
        const { posts, categories } = this.props
        
        return (
            <div className="main-page">
                <h1>Readable</h1>
                <CategoryList categories={categories}/>
                <PostList posts={posts}/>
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
    fetchCategoryPosts
})(MainPage))