import reducer from './reducer'
import * as types from './types'

const initialState = []

describe('Evaluation reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(initialState, {})).toEqual([...initialState]);
    })

    it('Should set evaluations', () => {
        expect(reducer(initialState, {type: types.SET_EVALUATIONS, payload: [{id: 1}, {id: 2}]})).toHaveLength(2)
    })
    it('Should update list of evaluations', () => {
        expect(reducer([
            {
                id: '1'
            },
            {
                id: '2'
            }
        ], {type: types.UPDATE_EVALUATIONS_LIST, payload: {
            evaluations: [{id: '3'}]
        }})).toHaveLength(3)
    })
})