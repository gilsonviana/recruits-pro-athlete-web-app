import reducer from './reducer'
import * as types from './types'

const initialState = []

describe('Videos reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(initialState, {})).toEqual([...initialState]);
    })

    it('Should set videos', () => {
        expect(reducer(initialState, {type: types.SET_VIDEOS, payload: [{id: 1}, {id: 2}]})).toHaveLength(2)
    })
})