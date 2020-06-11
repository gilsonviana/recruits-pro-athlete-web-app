import * as types from './types'

const listItem = {
    _id: '',
    type: '',
    senderName: '',
    date: '',
    read: false
}

const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.NOTIFICATION_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.notification
                ]
            }
        case types.NOTIFICATION_MARK_ALL:
            return {
                ...state,
                list: []
            }
        case types.NOTIFICATION_SET_IS_READ:
            return {
                ...state,
                list: [
                    ...state.list.map(item => ({
                        ...item,
                        read: true
                    }))
                ]
            }
        case types.NOTIFICATION_RESET:
            return initialState
        default:
            return state
    }
}