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

export const voteComment = (commentId, option) => {
    return (dispatch) => {
        API.voteComment(commentId, option).then(comment => {
            dispatch({
                type: ActionsTypes.VOTE_COMMENT,
                comment
            })
        })
    }
}

export const createComment = (author, body, postId) => {
    return (dispatch) => {
        API.createComment(author, body, postId).then(comment => {
            dispatch({
                type: ActionsTypes.CREATE_COMMENT,
                comment
            })
        })
    }
}