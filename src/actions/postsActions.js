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

export const votePost = (postId, option, getPost) => {
    const type = getPost ? ActionsTypes.VOTE_POST_GET_POST : ActionsTypes.VOTE_POST
    return (dispatch) => {
        API.votePost(postId, option).then(post => {
            dispatch({
                type,
                post
            })
        })
    }
}

export const deletePost = postId => {
    return (dispatch) => {
        API.deletePost(postId).then(post => {
            dispatch({
                type: ActionsTypes.DELETE_POST,
                post
            })
        })
    }
}