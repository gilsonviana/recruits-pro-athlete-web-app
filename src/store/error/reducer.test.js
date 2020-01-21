import reducer from './reducer'
import * as types from './types'

const initialState = {
    message: ''
}

describe('The error reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({...initialState})
    })

    it('should set message', () => {
        expect(reducer(initialState, {type: types.SET_ERROR_MESSAGE, payload: 'this is an error'})).toEqual({
            ...initialState,
            message: 'this is an error'
        })
    })
})