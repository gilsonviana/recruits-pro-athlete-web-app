import { SET_SUBSCRIPTION_PLANS } from './types'

export const getSubscriptionPlans = () => {
    //TODO make http call to API
    return dispatch => {
        dispatch({
            type: SET_SUBSCRIPTION_PLANS,
            payload: [{ plan_id: 'P-45B07154RC979151KLYUFWEY', name: 'Monthly' }, { plan_id: 'P-9K0363792J872453WLYUFVGY', name: 'Yearly' }]
        })
    }
}