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

export const updatePost = (postId, title, author, body) => {
    return (dispatch) => {
        API.updatePost(postId,title,author,body).then(post => {
            dispatch({
                type: ActionsTypes.UPDATE_POST,
                post
            })
        })
    }
}