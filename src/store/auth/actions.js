import axios from 'axios'
import { SET_TOKEN, UNSET_TOKEN } from './types'
import { SET_PROFILE } from '../profile/types'
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
                type: SET_PROFILE,
                payload: {
                    interests: data.user.interests,
                    isCompleted: data.user.isCompleted,
                    email: data.user.email,
                    createdAt: data.user.createdAt,
                    name: data.user.name
                }
            })
            
            return data
        } catch (e) {
            console.log(e.response)
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
                    role: 'a'
                }
            })

            dispatch({
                type: SET_TOKEN,
                payload: data.token
            })

            await axios({
                method: "PUT",
                url: `${keys.API}/profile/self`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": data.token
                },
                data: {
                    name: credentials.username
                }
            })

            return true
        } catch (e) {
            console.log(e.response)
            return false
        }
    }
}