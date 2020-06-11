import * as types from './types'
import keys from '../../config/keys'
import axios from 'axios'

export const addNotification = (notification) => dispatch => {
    dispatch({
        type: types.NOTIFICATION_ADD,
        payload: {
            notification
        }
    })
}

export const markAllNotification = (token) => async dispatch => {
    dispatch({
        type: types.NOTIFICATION_MARK_ALL
    })
    try {
        await axios({
            url: `${keys.API}/notification`,
            method: 'DELETE',
            headers: {
                "Authorization": token
            }
        })
    } catch (e) {
        throw new Error(e)
    }
}

export const clearNotification = () => dispatch => {
    dispatch({
        type: types.NOTIFICATION_SET_IS_READ
    })
}