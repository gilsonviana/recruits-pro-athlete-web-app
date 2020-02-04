import axios from 'axios'
import { CREATE_PROFILE_REQUEST, RESET_CREATE_PROFILE } from './types'

export const createProfileRequest = (token, profile = {
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
}) => {
    return dispatch => {
        dispatch({
            type: CREATE_PROFILE_REQUEST,
            payload: profile
        })

        // TODO if HTTP request successful, dispatch RESET_CREATE_PROFILE
    }
}