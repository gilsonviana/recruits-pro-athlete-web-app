import * as types from './types'
import axios from 'axios'
import keys from '../../config/keys'

export const getLatestEvaluations = (token = '', last = '') => async dispatch => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${keys.API}/evaluation/recent/${last}`,
            headers: {
                "Authorization": token
            }
        })
        
        if (data.evaluations.length > 0) {
            dispatch({
                type: types.UPDATE_EVALUATIONS_LIST,
                payload: {
                    evaluations: data.evaluations
                }
            })
        }
    } catch (e) {
        throw new Error(e)
    }
}