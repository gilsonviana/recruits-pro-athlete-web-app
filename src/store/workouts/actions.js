import axios from 'axios'
import { DELETE_WORKOUT, WORKOUTS_UPDATE_LIST } from './types'
import config from '../../config/keys'

export const updateWorkoutList = (workout) => dispatch => {
    dispatch({
        type: WORKOUTS_UPDATE_LIST,
        payload: {
            workout
        }
    })
}

export const deleteWorkout = (token = '', id = '') => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_WORKOUT,
            payload: {
                id
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