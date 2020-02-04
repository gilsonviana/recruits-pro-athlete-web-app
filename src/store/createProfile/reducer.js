import { CREATE_PROFILE_REQUEST, RESET_CREATE_PROFILE } from './types'

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
        country: 'USA',
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
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROFILE_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        case RESET_CREATE_PROFILE:
            return {
                ...initialState
            }
        default:
            return state
    }
}