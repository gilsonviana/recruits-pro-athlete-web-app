import * as types from './types'

export const addNotification = (notification) => dispatch => {
    dispatch({
        type: types.NOTIFICATION_ADD,
        payload: {
            notification
        }
    })
}

export const markAllNotification = () => dispatch => {
    dispatch({
        type: types.NOTIFICATION_MARK_ALL
    })
}