import * as types from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EVALUATIONS:
            return [
                ...action.payload
            ]
        case types.RESET_EVALUATIONS:
            return initialState
        case types.UPDATE_EVALUATIONS_LIST:
            return [
                ...state,
                ...action.payload.evaluation
            ]
        default:
            return state;
    }
}