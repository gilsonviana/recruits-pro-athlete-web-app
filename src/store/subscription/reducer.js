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
                ...action.payload
            }
        case types.RESET_SUBSCRIPTION:
            return initialState
        default:
            return state
    }
}