import * as types from './types'
import axios from 'axios'
import keys from '../../config/keys'

export const setSubscriptionRequest = (token, subscriptionId) => {
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
                type: types.SET_SUBSCRIPTION,
                payload: data.subscription
            })
        } catch (e) {
            throw new Error(e)
        }
    }
}

export const unsubscribeRequest = (token, subscriptionId) => {
    return async dispatch => {
        try {
            dispatch({
                type: types.RESET_SUBSCRIPTION
            })
            await axios({
                method: 'POST',
                url: `${keys.API}/subscription/${subscriptionId}/cancel`,
                headers: {
                    "Authorization": token
                }
            })
        } catch (e) {  
            throw new Error(e)
        }
    }
}