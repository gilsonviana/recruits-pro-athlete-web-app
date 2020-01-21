import axios from 'axios'
import { SET_PROFILE_SUBSCRIPTION } from './types'
import { SET_ERROR_MESSAGE } from '../error/types'
import keys from '../../config/keys'

export const updateProfileSubscription = (token, subscriptionId) => {
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
                type: SET_PROFILE_SUBSCRIPTION,
                payload: data
            })

            return data
        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: 'Error while trying to update profile subscription.'
            })

            return false
        }
    }
}