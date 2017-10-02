import * as API from '../utils/integrations'
import * as ActionsTypes from './types'

export const fetchPosts = () => {
    return (dispatch) => {
        API.fetchPosts().then(posts => {
            dispatch({
                type: ActionsTypes.FETCH_POSTS,
                posts
            })
        })
    }
}

export const fetchCategoryPosts = (categoryPath) => {
    return (dispatch) => {
        API.fetchCategoryPosts(categoryPath).then(posts => {
            dispatch({
                type: ActionsTypes.FETCH_CATEGORY_POSTS,
                posts
            })
        })
    }
}