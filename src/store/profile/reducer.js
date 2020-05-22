import * as types from './types'
import { GET_WORKOUTS, DELETE_WORKOUT } from '../workouts/types'

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
    videoEvaluations: [],
    videos: [],
    workouts: [],
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
        case types.SET_PROFILE_VIDEOS:
            return {
                ...state,
                videos: [
                    ...state.videos,
                    action.payload
                ]
            }
        case types.REMOVE_PROFILE_VIDEOS:
            return {
                ...state,
                videos: [
                    ...state.videos.slice(0, state.videos.indexOf(action.payload)),
                    ...state.videos.slice(state.videos.indexOf(action.payload) + 1)
                ]
            }
        case types.RESET_PROFILE:
            return {
                ...initialState
            }
        case GET_WORKOUTS:
            return {
                ...state,
                workouts: [...action.payload]
            }
        case DELETE_WORKOUT:
            return {
                ...state,
                workouts: [
                    ...state.workouts.slice(0, action.payload.index),
                    ...state.workouts.slice(action.payload.index + 1)
                ]
            }
        default:
            return state
    }
}