import { SET_SUBSCRIPTION_PLANS } from './types'

export const getSubscriptionPlans = () => {
    //TODO make http call to API
    return dispatch => {
        dispatch({
            type: SET_SUBSCRIPTION_PLANS,
            payload: [{ plan_id: 'P-9W02681611507760NL2PCOHA', name: 'Monthly' }, { plan_id: 'P-3NX85101N61441605L2PCOZI', name: 'Yearly' }]
        })
    }
}