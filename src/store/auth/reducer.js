import { SET_TOKEN, UNSET_TOKEN, SET_RESETOKEN } from "./types";

const initialState = {
    _id: '',
    token: '',
    resetToken: '',
    code: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                _id: action.payload._id,
                token: action.payload.token
            }
        case UNSET_TOKEN:
            return {
                ...state,
                token: ''
            }
        case SET_RESETOKEN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}