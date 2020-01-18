import { SET_SUBSCRIPTION_PLANS } from './types'

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_SUBSCRIPTION_PLANS:
            return [...action.payload]
        default:
            return state
    }
}