import * as API from '../utils/integrations'
import * as ActionsTypes from './types'

export const fetchComments = postId => {
    return (dispatch) => {
        API.fetchComments(postId).then(comments => {
            dispatch({
                type: ActionsTypes.FETCH_COMMENTS,
                comments
            })
        })
    }
}