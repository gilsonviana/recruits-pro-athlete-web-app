import * as types from './types'

const initialState = {
    personal: {
        fullName: '',
        dob: '',
        avatarUrl: '',
        email: '',
        phone: {
            number: '',
            mobile: false
        },
        height: {
            feet: '',
            inches: ''
        },
        weight: ''
    },
    location: {
        country: '',
        zipcode: '',
        state: '',
        city: ''
    },
    education: {
        skillLevel: '',
        schoolName: '',
        graduated: false,
        graduationYear: '',
        gpa: ''
    },
    subscription: {
        id: '',
        status: '',
        createTime: '',
        linkSelf: '',
        startTime: '',
    },
    evaluations: [],
    meta: {
        isCompleted: false,
        lastVisit: ''
    },
    _id: '',
    createdAt: '',
    updatedAt: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SET_PROFILE_PERSONAL:
            return {
                ...state,
                personal: {
                    ...state.personal,
                    ...action.payload
                }
            }
        case types.SET_PROFILE_LOCATION:
            return {
                ...state,
                location: {
                    ...state.location,
                    ...action.payload
                }
            }
        case types.SET_PROFILE_EDUCATION:
            return {
                ...state,
                education: {
                    ...state.education,
                    ...action.payload
                }
            }
        case types.SET_PROFILE_SUBSCRIPTION:
            return {
                ...state,
                subscription: {
                    ...state.subscription,
                    ...action.payload
                }
            }
        case types.SET_PROFILE_META:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    ...action.payload
                }
            }
        case types.SET_PROFILE_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        case types.SET_PROFILE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                subscription: {
                    ...state.subscription,
                    ...action.payload
                }
            }
        default:
            return state
    }
}