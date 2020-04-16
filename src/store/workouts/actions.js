import axios from 'axios'
import { GET_WORKOUTS } from './types'
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