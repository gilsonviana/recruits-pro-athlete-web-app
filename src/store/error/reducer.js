import { SET_ERROR_MESSAGE } from './types'

const initialState = {
    message: '',
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                error: action.payload.error
            }
        default:
            return state
    }
}