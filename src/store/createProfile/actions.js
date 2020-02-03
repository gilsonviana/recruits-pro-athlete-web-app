import axios from 'axios'
import { SET_CREATE_PROFILE_PERSONAL, SET_CREATE_PROFILE_LOCATION, SET_CREATE_PROFILE_EDUCATION } from './types'

export const setCreateProfilePersonal = (token, personal = {
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
}) => {
    return dispatch => {
        dispatch({
            type: SET_CREATE_PROFILE_PERSONAL,
            payload: personal
        })
    }
}
export const setCreateProfileLocation = (token, location = {
    country: {
        name: 'USA',
        foreigner: false
    },
    zipCode: '',
    state: '',
    city: ''
}) => {
    return dispatch => {
        dispatch({
            type: SET_CREATE_PROFILE_LOCATION,
            payload: location
        })
    }
}

export const setCreateProfileEducation = (token, education = {
    skillLevel: '',
    schoolName: '',
    graduated: false,
    graduationYear: '',
    gpa: ''
}) => {
    return dispatch => {
        dispatch({
            type: SET_CREATE_PROFILE_EDUCATION,
            payload: education
        })
    }
}