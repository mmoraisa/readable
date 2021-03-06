import * as ActionsTypes from '../actions/types'

function postReducer(state = {}, action) {
    const { post, type } = action

    switch(type){
        case ActionsTypes.FETCH_POST:
            return post
        case ActionsTypes.UPDATE_POST:
            return post
        case ActionsTypes.CREATE_POST:
            return post
        case ActionsTypes.VOTE_POST_GET_POST:
            return post
        default:
            return state
    }
}

export default postReducer