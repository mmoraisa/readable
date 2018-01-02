import React from 'react'
import './CategoryList.css'
import { Link } from 'react-router-dom'

const CategoryList = props => {
    const { categories } = props
    
    const showingCategories = [{ name: 'all', path: '/' }]
        .concat(categories.map(_ => { return { ..._, path: `/category/${_.path}` } }))

    return (
        <div className="categories-list">
            {showingCategories.map(category => (
                <Link to={category.path}>{category.name}</Link>
            ))}
        </div>
    )
}

export default CategoryList