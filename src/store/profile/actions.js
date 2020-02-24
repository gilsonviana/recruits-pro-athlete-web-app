// Dependencies
import axios from 'axios'
import * as types from './types'
import { SET_ERROR_MESSAGE } from '../error/types'
import keys from '../../config/keys'

// @param opt false | true (false will not make use of http response)
export const setProfileRequest = (token, profile, opt = true) => {
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
            
            if (!opt) {
                dispatch({
                    type: types.SET_PROFILE_REQUEST,
                    payload: profile
                })

                return true
            }
 
            dispatch({
                type: types.SET_PROFILE_REQUEST,
                payload: data.athlete
            })
            return true

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
                    message: 'Error while trying to get profile subscription.',
                    error: e.response
                }
            })

            return false
        }
    }
}

export const setProfileUnsubscribeRequest = (token, subscriptionId) => {
    return dispatch => {
        dispatch({
            type: types.SET_PROFILE_UNSUBSCRIBE_REQUEST
        })
    }
}