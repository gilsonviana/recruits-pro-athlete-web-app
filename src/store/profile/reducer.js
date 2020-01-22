import { SET_PROFILE, SET_PROFILE_SUBSCRIPTION, SET_PROFILE_IS_COMPLETED } from './types'

const initialState = {
    subscription: {
        id: "",
        status: "",
        createTime: "",
        startTime: "",
        linkSelf: ""
    },
    interests: [],
    isCompleted: false,
    email: "",
    createdAt: "",
    name: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        case SET_PROFILE_SUBSCRIPTION:
            return {
                ...state,
                subscription: {
                    ...state.subscription,
                    ...action.payload
                }
            }
        case SET_PROFILE_IS_COMPLETED:
            return {
                ...state,
                isCompleted: true
            }
        default:
            return state;
    }
}