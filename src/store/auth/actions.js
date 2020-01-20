import { SET_TOKEN } from './types'

export const doLogin = async (credentials) => {
    return dispatch => {
        //TODO make http call to API
        dispatch({
            type: SET_TOKEN,
            payload: 'USER_TOKEN'
        })
    }
}