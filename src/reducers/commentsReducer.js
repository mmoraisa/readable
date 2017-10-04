import * as ActionsTypes from '../actions/types'

function commentsReducer(state = [], action) {
    const { comments, type } = action

    switch(type){
        case ActionsTypes.FETCH_COMMENTS:
            return comments
        default:
            return state
    }
}

export default commentsReducer