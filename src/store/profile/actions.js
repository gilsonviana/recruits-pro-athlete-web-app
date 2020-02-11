// Dependencies
import axios from 'axios'
import * as types from './types'
import { SET_ERROR_MESSAGE } from '../error/types'
import { GET_EVALUATIONS_REQUEST } from '../evaluations/types'
import keys from '../../config/keys'

export const setProfilePersonal = (personal) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_PROFILE_PERSONAL,
            payload: personal
        })
    }
}

export const setProfileMeta = (meta) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_PROFILE_META,
            payload: meta
        })
    }
}

export const setProfileSubscription = (subscription) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_PROFILE_SUBSCRIPTION,
            payload: subscription
        })
    }
}

export const setProfileRequest = (token, profile) => {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'PATCH',
                url: `${keys.API}/profile/athlete`,
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },
                data: profile
            })
            dispatch({
                type: types.SET_PROFILE_REQUEST,
                payload: data.athlete
            })
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Error while trying to update profile.',
                    error: e.response
                }
            })

            return false
        }
    }
}

export const setProfileSubscriptionRequest = (token, subscriptionId) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `${keys.API}/subscription/${subscriptionId}`,
                headers: {
                    "Authorization": token
                }
            })
            
            dispatch({
                type: types.SET_PROFILE_SUBSCRIPTION_REQUEST,
                payload: data.subscription
            })

            return data
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Error while trying to update profile subscription.',
                    error: e.response
                }
            })

            return false
        }
    }
}

export const getMetricFlush = (token) => {
    console.log("getMetricFlush getMetricFlush getMetricFlush getMetricFlush")
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `${keys.API}/profile/athlete/metricflush`,
                headers: {
                    'Authorization': token
                }
            })
            dispatch({
                type: GET_EVALUATIONS_REQUEST,
                payload: data.evaluations
            })
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Could not get metric flush.',
                    error: e.response.data
                }
            })
        }
    }
}