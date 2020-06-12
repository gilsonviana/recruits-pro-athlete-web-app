import * as types from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WORKOUTS:
            return [
                ...action.payload
            ] 
        case types.DELETE_WORKOUT:
            return [
                ...state.filter(workout => workout._id !== action.payload.id)
            ]
        case types.WORKOUTS_UPDATE_LIST:
            return [
                ...state,
                action.payload.workout
            ]
        case types.RESET_WORKOUTS:
            return initialState
        default:
            return state
    }
}