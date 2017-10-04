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