import { SET_ERROR_MESSAGE } from './types'

const initialState = {
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}