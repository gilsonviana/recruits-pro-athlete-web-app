import { SET_SUBSCRIPTION_PLANS } from './types'

export const getSubscriptionPlans = () => {
    return dispatch => {
        dispatch({
            type: SET_SUBSCRIPTION_PLANS,
            payload: [{ plan_id: '123', name: 'Monthly' }, { plan_id: '456', name: 'Yearly' }]
        })
    }
}