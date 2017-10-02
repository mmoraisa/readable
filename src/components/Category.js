import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ category }) => (
    <Link to={category.path}>{category.name}</Link>
)

export default Category