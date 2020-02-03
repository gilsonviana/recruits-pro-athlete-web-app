import reducer from './reducer'
import * as types from './types'

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

describe('Create profile reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({...initialState})
    })

    it('should set personal state', () => {
        expect(reducer(initialState, {type: types.SET_CREATE_PROFILE_PERSONAL, payload: {
            avatarUrl: 'http://',
            phone: {
                number: '012-345-6789',
                mobile: true
            },
            height: {
                feet: '5',
                inches: '9'
            },
            weight: '180'
        }})).toEqual({
            ...initialState,
            personal: {
                avatarUrl: 'http://',
                phone: {
                    number: '012-345-6789',
                    mobile: true
                },
                height: {
                    feet: '5',
                    inches: '9'
                },
                weight: '180'
            }
        })
    })

    it('should set location state', () => {
        expect(reducer(initialState, {type: types.SET_CREATE_PROFILE_LOCATION, payload: {
            country: {
                name: 'Brazil',
                foreigner: true
            },
            zipCode: '',
            state: '',
            city: ''
        }})).toEqual({
            ...initialState,
            location: {
                country: {
                    name: 'Brazil',
                    foreigner: true
                },
                zipCode: '',
                state: '',
                city: ''
            }
        })
    })

    it('should set education state', () => {
        expect(reducer(initialState, {type: types.SET_CREATE_PROFILE_EDUCATION, payload: {
            skillLevel: 'pro',
            schoolName: 'affonso',
            graduated: true,
            graduationYear: '2009',
            gpa: '555'
        }})).toEqual({
            ...initialState,
            education: {
                skillLevel: 'pro',
                schoolName: 'affonso',
                graduated: true,
                graduationYear: '2009',
                gpa: '555'
            }
        })
    })
})