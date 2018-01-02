import * as ActionsTypes from '../actions/types'

function postsReducer(state = [], action) {
    const { posts, post, type } = action

    switch(type){
        case ActionsTypes.FETCH_POSTS:
            return posts
        case ActionsTypes.FETCH_CATEGORY_POSTS:
            return posts
        case ActionsTypes.VOTE_POST:
            return state.map(_ => {
                if(_.id === post.id)
                    _.voteScore = post.voteScore
                return _
            })
        case ActionsTypes.DELETE_POST:
            return state.filter(_ => _.id !== post.id)
        default:
            return state
    }
}

export default postsReducer