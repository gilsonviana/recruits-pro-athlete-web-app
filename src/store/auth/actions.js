import { SET_TOKEN, UNSET_TOKEN } from './types'

export const doLogin = async (credentials) => {
    return dispatch => {
        //TODO make http call to API
        dispatch({
            type: SET_TOKEN,
            payload: 'USER_TOKEN'
        })
    }
}

export const doLogout = () => {
    return dispatch => {
        dispatch({
            type: UNSET_TOKEN
        })
    }
}