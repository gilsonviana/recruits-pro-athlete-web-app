import * as types from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_VIDEO_EVALUATIONS:
            return [
                ...action.payload
            ]
        case types.RESET_VIDEO_EVALUATIONS:
            return initialState
        default:
            return state;
    }
}