import * as types from './types'

const initialState = {
    id: '',
    status: '',
    createTime: '',
    linkSelf: '',
    startTime: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SUBSCRIPTION:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}