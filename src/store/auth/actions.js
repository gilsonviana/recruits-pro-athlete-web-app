import axios from 'axios'
import { SET_TOKEN, UNSET_TOKEN } from './types'
import { SET_PROFILE_REQUEST, SET_PROFILE_PERSONAL } from '../profile/types'
import { SET_ERROR_MESSAGE } from '../error/types'
import keys from '../../config/keys'

export const doLogin = (credentials) => {
    return async dispatch => {
        try {   
            const { data } = await axios({
                method: "POST",
                url: `${keys.API}/auth/login`,
                data: {
                    email: credentials.email,
                    password: credentials.password
                }
            })
    
            dispatch({
                type: SET_TOKEN,
                payload: data.token
            })
    
            dispatch({
                type: SET_PROFILE_REQUEST,
                payload: data.athlete
            })
            
            return data
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Could not login',
                    error: e.response.data
                }
            })
            return false
        }
    }
}

export const doLogout = () => {
    return dispatch => {
        dispatch({
            type: UNSET_TOKEN
        })
    }
}

export const signUp = (credentials) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: "POST",
                url: `${keys.API}/auth/signup`,
                data: {
                    email: credentials.email,
                    password: credentials.password,
                    role: 'a',
                    fullName: credentials.username
                }
            })

            dispatch({
                type: SET_TOKEN,
                payload: data.token
            })

            dispatch({
                type: SET_PROFILE_PERSONAL,
                payload: {
                    fullName: credentials.username,
                    email: credentials.email
                }
            })

            return true
        } catch (e) {
            console.log(e.response)
            return false
        }
    }
}