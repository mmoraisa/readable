import * as ActionsTypes from '../actions/types'

function postReducer(state = {}, action) {
    const { post, type } = action

    switch(type){
        case ActionsTypes.FETCH_POST:
            return post
        default:
            return state
    }
}

export default postReducer