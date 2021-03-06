import axios from 'axios'
import { SET_TOKEN, UNSET_TOKEN, SET_RESETOKEN } from './types'
import { SET_PROFILE_REQUEST, SET_PROFILE_PERSONAL, RESET_PROFILE } from '../profile/types'
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
    
            if (data.user.role !== 'a') {
                throw new Error('Unable to login.')
            }

            dispatch({
                type: SET_TOKEN,
                payload: {
                    token: data.token,
                    _id: data.user._id
                }
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
            throw new Error(e.response.message)
        }
    }
}

export const doLogout = () => {
    return dispatch => {
        dispatch({
            type: UNSET_TOKEN
        })
        dispatch({
            type: RESET_PROFILE
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
                payload: {
                    _id: data._id,
                    token: data.token
                }
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

export const getResetToken = (email) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${keys.API}/auth/password`,
                data: {
                    email
                }
            })
    
            dispatch({
                type: SET_RESETOKEN,
                payload: {
                    resetToken: data.token,
                    code: data.code
                }
            })

            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export const setNewPassword = (token, password) => {
    return async dispatch => {
        try {
            await axios({
                method: 'PATCH',
                url: `${keys.API}/auth/password/new`,
                headers: {
                    'Authorization': token
                },
                data: {
                    password
                }
            })
            return true
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                   message: e.response.data.message,
                   error: '' 
                }
            })
            return false
        }
    }
}