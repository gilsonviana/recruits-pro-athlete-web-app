import { SET_ERROR_MESSAGE } from './types'

export const setErrorMessage = (message = "") => {
    return dispatch =>{
        dispatch({
            type: SET_ERROR_MESSAGE,
            payload: message
        })
    }
}