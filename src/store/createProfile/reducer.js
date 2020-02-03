import { SET_CREATE_PROFILE_PERSONAL, SET_CREATE_PROFILE_LOCATION, SET_CREATE_PROFILE_EDUCATION } from './types'

const initialState = {
    personal: {
        avatarUrl: '',
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
        country: {
            name: 'USA',
            foreigner: false
        },
        zipCode: '',
        state: '',
        city: ''
    },
    education: {
        skillLevel: '',
        schoolName: '',
        graduated: false,
        graduationYear: '',
        gpa: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CREATE_PROFILE_PERSONAL:
            return {
                ...state,
                personal: action.payload
            }
        case SET_CREATE_PROFILE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case SET_CREATE_PROFILE_EDUCATION:
            return {
                ...state,
                education: action.payload
            }
        default:
            return state
    }
}