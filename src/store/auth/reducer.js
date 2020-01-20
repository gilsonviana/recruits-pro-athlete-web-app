import { SET_TOKEN, UNSET_TOKEN } from "./types";

const initialState = {
    token: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case UNSET_TOKEN:
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}