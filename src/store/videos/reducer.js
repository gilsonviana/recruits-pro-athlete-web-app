import { ADD_VIDEO, DELETE_VIDEO, SET_VIDEOS, RESET_VIDEOS } from './types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return [
                ...action.payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ]
        case ADD_VIDEO:
            return [
                action.payload,
                ...state
            ]
        case DELETE_VIDEO: 
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