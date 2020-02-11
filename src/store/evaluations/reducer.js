import { GET_EVALUATIONS_REQUEST } from './types'

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EVALUATIONS_REQUEST:
            return [
                ...action.payload
            ]
        default:
            return state
    }
}