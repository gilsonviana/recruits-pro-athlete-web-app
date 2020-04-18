import axios from 'axios'
import { GET_WORKOUTS, DELETE_WORKOUT } from './types'
import config from '../../config/keys'

export const getWorkouts = (token = '') => {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `${config.API}/workout`,
                headers: {
                    'Authorization': token
                }
            })

            dispatch({
                type: GET_WORKOUTS,
                payload: data.workouts
            })

            return data.workouts
        } catch (e) {
            throw new Error(e)
        }
    }
}

export const deleteWorkout = (token = '', id = '', index = null) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_WORKOUT,
            payload: {
                index
            }
        })

        try {
            await axios({
                method: 'DELETE',
                url: `${config.API}/workout/${id}`,
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {
            throw new Error(e)
        }
    }
}