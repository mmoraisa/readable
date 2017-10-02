import React, { Component } from 'react'

import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

import { fetchPosts } from '../actions/postsActions'
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux'

class MainPage extends Component{

    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchCategories()
    }

    render () {
        const { posts, categories } = this.props
        const categoryPath = this.props.match.params['categoryPath']
        
        let showingPosts = posts

        if(categoryPath)
            showingPosts = posts.filter(post => post.category === categoryPath)
        
        return (
            <div className="main-page">
                <CategoryList categories={categories}/>
                <PostList posts={showingPosts}/>
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

export default connect(mapStateToProps, {
    fetchPosts,
    fetchCategories
})(MainPage);