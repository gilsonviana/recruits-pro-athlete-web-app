import * as types from './types'

const initialState = {
    personal: {
        heading: '',
        fullName: '',
        dob: '',
        avatarUrl: '',
        coverImgUrl: '',
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
    social: {
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
    },
    sports: {
        baseball: {
            positions: []
        },
        basketball: {
            positions: []
        },
        football: {
            positions: []
        },
        soccer: {
            positions: []
        }
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
        case types.SET_PROFILE_UNSUBSCRIBE_REQUEST:
            return {
                ...state,
                subscription: {
                    ...initialState.subscription
                }
            }
        case types.RESET_PROFILE:
            return {
                ...initialState
            }
        default:
            return state
    }
}