import { ADD_VIDEO, DELETE_VIDEO, SET_VIDEOS, RESET_VIDEOS } from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return [
                ...action.payload
            ]
        case ADD_VIDEO:
            return [
                ...state,
                action.payload
            ]
        case DELETE_VIDEO: 
            // return [
            //     ...state.slice(0, state.filter(i => i._id === action.payload)[0]),
            //     ...state.slice(state.filter(i => i._id === action.payload[0]) + 1)
            // ]
            return [
                ...state.filter(video => video._id !== action.payload.id)
            ]
        case RESET_VIDEOS: {
            return initialState
        }
        default:
            return state
    }
}