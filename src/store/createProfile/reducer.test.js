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

describe('Create profile reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({...initialState})
    })

    it('should create profile', () => {
        expect(reducer(initialState, {type: types.CREATE_PROFILE_REQUEST, payload: {
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

    it('should reset create profile', () => {
        expect(reducer(initialState, {type: types.RESET_CREATE_PROFILE})).toEqual({
            ...initialState
        })
    })
})