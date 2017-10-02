import React, { Component } from 'react'
import Category from './Category'
import './CategoryList.css'

class CategoryList extends Component{
    render () {
        const { categories } = this.props

        const showingCategories = [{ name: 'all', path: '/' }]
            .concat(categories.map(_ => { return { ..._, path: `/category/${_.path}` } }))

        return (
            <div className="categories-list">
                {showingCategories.map(category => (
                    <Category key={category.path} category={category} />
                ))}
            </div>
        )
    }
}

export default CategoryList