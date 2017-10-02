import * as API from '../utils/integrations'
import * as ActionsTypes from './types'

export const fetchCategories = () => {
    return (dispatch) => {
        API.fetchCategories().then(response => {
            dispatch({
                type: ActionsTypes.FETCH_CATEGORIES,
                categories: response.categories
            })
        })
    }
}