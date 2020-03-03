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
        weight: '',
        references: {
            first: {
                name: '',
                email: ''
            },
            second: {
                name: '',
                email: ''
            },
            third: {
                name: '',
                email: ''
            }
        }
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
        primary: {
            name: '',
            positions: []
        },
        secondary: {
            name: '',
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
        case types.SET_PROFILE_IMAGES_REQUEST: 
            return {
                ...state,
                personal: {
                    ...state.personal,
                    avatarUrl: action.payload.avatarUrl,
                    coverImgUrl: action.payload.coverImgUrl
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