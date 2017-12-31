import * as ActionsTypes from '../actions/types'

function commentsReducer(state = [], action) {
    const { comments, comment, type } = action

    switch(type){
        case ActionsTypes.FETCH_COMMENTS:
            return comments
        case ActionsTypes.VOTE_COMMENT:
            return state.map(_ => {
                if(_.id === comment.id)
                    _.voteScore = comment.voteScore
                return _
            })
        case ActionsTypes.CREATE_COMMENT:
            return state.concat([comment])
        case ActionsTypes.UPDATE_COMMENT:
            return state.filter(_ => _.id !== comment.id).concat([comment])
        default:
            return state
    }
}

export default commentsReducer