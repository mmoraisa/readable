import { combineReducers } from 'redux'

import postReducer from './postReducer'
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
    post: postReducer,
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentsReducer
})