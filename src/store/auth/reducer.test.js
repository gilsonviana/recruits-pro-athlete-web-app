import reducer from './reducer'
import * as types from './types'

const initialState = {
    token: ''
}

describe('Auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({
            ...initialState
        })
    })

    it('should set token', () => {
        expect(reducer(initialState, {type: types.SET_TOKEN, payload: 'ACCESS_TOKEN'})).toEqual({
            ...initialState,
            token: 'ACCESS_TOKEN'
        })
    })

    it('should unset token', () => {
        expect(reducer(initialState, {type: types.UNSET_TOKEN})).toEqual({
            ...initialState,
            token: ''
        })
    })
})