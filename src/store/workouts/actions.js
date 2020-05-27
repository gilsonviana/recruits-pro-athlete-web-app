import axios from 'axios'
import { DELETE_WORKOUT } from './types'
import config from '../../config/keys'

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