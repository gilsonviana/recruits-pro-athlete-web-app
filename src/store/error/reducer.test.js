import reducer from './reducer'
import * as types from './types'

const initialState = {
    message: '',
    error: ''
}

describe('The error reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({...initialState})
    })

    it('should set message', () => {
        expect(reducer(initialState, {type: types.SET_ERROR_MESSAGE, payload: {message: 'this is an error', error: ''}})).toEqual({
            ...initialState,
            message: 'this is an error'
        })
    })
})