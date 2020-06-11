import reducer from './reducer'
import * as types from './types'

const initialState = {
    isRead: false,
    list: [{
        type: 'EVALUATION',
        senderName: 'Gilson Viana',
        date: '2020-06-09T21:11:26.099Z',
        read: false
    }]
}

describe('Notification reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({
            ...initialState
        })
    })

    it('Should add a notification to the list array', () => {
        expect(reducer(initialState, {type: types.NOTIFICATION_ADD, payload: {
            notification: {
                type: 'EVALUATION',
                senderName: 'Gilson Viana',
                date: '2020-06-09T21:11:26.099Z',
                read: false
            }
        }})).toEqual({
            ...initialState,
            isRead: false,
            list: [
                ...initialState.list,
                {
                    type: 'EVALUATION',
                    senderName: 'Gilson Viana',
                    date: '2020-06-09T21:11:26.099Z',
                    read: false
                }
            ]
        })
    })

    it('Should mark all notifications as read', () => {
        expect(reducer(initialState, {type: types.NOTIFICATION_MARK_ALL})).toEqual({
            ...initialState,
            list: []
        })
    })

    it('Should set is read to true', () => {
        expect(reducer(initialState, {type: types.NOTIFICATION_SET_IS_READ})).toEqual({
            ...initialState,
            isRead: true
        })
    })
})