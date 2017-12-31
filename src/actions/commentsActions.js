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

export const updateComment = (commentId, body) => {
    return (dispatch) => {
        API.updateComment(commentId, body).then(comment => {
            dispatch({
                type: ActionsTypes.UPDATE_COMMENT,
                comment
            })
        })
    }
}

export const deleteComment = commentId => {
    return (dispatch) => {
        API.deleteComment(commentId).then(comment => {
            dispatch({
                type: ActionsTypes.DELETE_COMMENT,
                comment
            })
        })
    }
}