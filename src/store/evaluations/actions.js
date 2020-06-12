import * as types from './types'
import axios from 'axios'
import keys from '../../config/keys'

export const updateEvaluationList = (evaluation) => dispatch => {
    dispatch({
        type: types.UPDATE_EVALUATIONS_LIST,
        payload: {
            evaluation
        }
    })
}