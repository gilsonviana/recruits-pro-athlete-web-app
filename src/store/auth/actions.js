import axios from 'axios'
import { SET_TOKEN, UNSET_TOKEN, SET_RESETOKEN } from './types'
import { SET_PROFILE_REQUEST, SET_PROFILE_PERSONAL, RESET_PROFILE } from '../profile/types'
import { SET_ERROR_MESSAGE } from '../error/types'
import { SET_SUBSCRIPTION, RESET_SUBSCRIPTION } from '../subscription/types'
import { SET_EVALUATIONS, RESET_EVALUATIONS } from '../evaluations/types'
import { SET_VIDEO_EVALUATIONS, RESET_VIDEO_EVALUATIONS } from '../videoEvaluations/types'
import { SET_VIDEOS, RESET_VIDEOS } from '../videos/types'
import { SET_WORKOUTS, RESET_WORKOUTS } from '../workouts/types'
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
                }
            })
            dispatch({
                type: SET_SUBSCRIPTION,
                payload: data.athlete.subscription
            })
            dispatch({
                type: SET_EVALUATIONS,
                payload: data.athlete.evaluations
            })
            dispatch({
                type: SET_VIDEO_EVALUATIONS,
                payload: data.athlete.videoEvaluations
            })
            dispatch({
                type: SET_VIDEOS,
                payload: data.athlete.videos
            })
            dispatch({
                type: SET_WORKOUTS,
                payload: data.athlete.workouts
            })
            dispatch({
                type: SET_PROFILE_REQUEST,
                payload: {
                    personal: { ...data.athlete.personal },
                    location: { ...data.athlete.location },
                    education: { ...data.athlete.education },
                    social: { ...data.athlete.social },
                    sports: { ...data.athlete.sports },
                    meta: { ...data.athlete.meta },
                    _id: data.athlete._id,
                    createdAt: data.athlete.createdAt,
                    updatedAt: data.athlete.updatedAt
                }
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
        dispatch({
            type: RESET_SUBSCRIPTION
        })
        dispatch({
            type:RESET_EVALUATIONS
        })
        dispatch({
            type: RESET_VIDEO_EVALUATIONS
        })
        dispatch({
            type: RESET_VIDEOS
        })
        dispatch({
            type: RESET_WORKOUTS
        })
    }
}

export const signUpSetPassword = (userId, credentials = { username: '', email: '', password: '' }) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${keys.API}/auth/password/${userId}`,
                data: {
                    password: credentials.password
                }
            })
            dispatch({
                type: SET_TOKEN,
                payload: {
                    _id: userId,
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

        } catch (e) {
            throw new Error(e)
        }
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
            throw new Error(e)
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