import * as API from '../utils/integrations'
import * as ActionsTypes from './types'

export const fetchPost = postId => {
    return (dispatch) => {
        API.fetchPost(postId).then(post => {
            dispatch({
                type: ActionsTypes.FETCH_POST,
                post
            })
        })
    }
}

export const updatePost = (postId,title,author,body,category) => {
    return (dispatch) => {
        API.updatePost(postId,title,author,body,category).then(post => {
            dispatch({
                type: ActionsTypes.UPDATE_POST,
                post
            })
        })
    }
}

export const createPost = (title,author,body,category) => {
    return (dispatch) => {
        API.createPost(title,author,body,category).then(post => {
            dispatch({
                type: ActionsTypes.CREATE_POST,
                post
            })
        })
    }
}