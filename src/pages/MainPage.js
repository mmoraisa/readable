import React, { Component } from 'react'

import PropTypes from 'prop-types'

import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

import { fetchPosts, fetchCategoryPosts } from '../actions/postsActions'
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

class MainPage extends Component{
    static propTypes = {
        posts: PropTypes.array,
        categories: PropTypes.array
    }

    componentWillMount() {
        const categoryPath = this.props.match.params['categoryPath']

        if(!categoryPath)
            this.props.fetchPosts()
        else
            this.props.fetchCategoryPosts(categoryPath)

        this.props.fetchCategories()
    }

    render () {
        const { posts, categories } = this.props
        
        return (
            <div className="main-page">
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
})(MainPage));