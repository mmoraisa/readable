import * as ActionsTypes from '../actions/types'

function postsReducer(state = [], action) {
    const { posts, type } = action

    switch(type){
        case ActionsTypes.FETCH_POSTS:
            return posts
        default:
            return state
    }
}

export default postsReducer