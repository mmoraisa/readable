import * as ActionsTypes from '../actions/types'

function categoriesReducer(state = [], action) {
    const { categories, type } = action

    switch(type){
        case ActionsTypes.FETCH_CATEGORIES:
            return categories
        default:
            return state
    }
}

export default categoriesReducer