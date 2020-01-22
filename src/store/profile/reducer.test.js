import reducer from './reducer'
import * as types from './types'

const initialState = {
    subscription: {
        id: "",
        status: "",
        createTime: "",
        startTime: "",
        linkSelf: ""
    },
    interests: [],
    isCompleted: false,
    email: "",
    createdAt: "",
    name: ""
}

describe('The profile reducer', () => {
    it('should return initial state', () => {
        expect(reducer(initialState, {})).toEqual({ ...initialState })
    })

    it('should set profile', () => {
        expect(reducer(initialState, {type: types.SET_PROFILE, payload: {
            email: "test@test.com",
            name: "John Doe",
            isCompleted: true
        }})).toEqual({
            ...initialState,
            email: "test@test.com",
            name: "John Doe",
            isCompleted: true
        })
    })

    it('should set profile subscription', () => {
        expect(reducer(initialState, {type: types.SET_PROFILE_SUBSCRIPTION, payload: {
            status: "ACTIVE"
        }})).toEqual({
            ...initialState,
            subscription: {
                ...initialState.subscription,
                status: "ACTIVE"
            }
        })        
    })

    it('should set profile is completed', () => {
        expect(reducer(initialState, {type: types.SET_PROFILE_IS_COMPLETED})).toEqual({
            ...initialState,
            isCompleted: true
        })
    })
})