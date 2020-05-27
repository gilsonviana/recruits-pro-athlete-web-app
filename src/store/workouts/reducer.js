import * as types from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WORKOUTS:
            return [
                ...action.payload
            ] 
        case types.RESET_WORKOUTS:
            return initialState
        default:
            return state
    }
}