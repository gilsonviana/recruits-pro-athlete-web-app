import axios from "axios";
import keys from '../../config/keys'

// TODO call recruits-pro API to obtain PAYPAL's authorization token

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    'Authorization': 'Bearer A21AAEATey6vKu5okSEadfkJdsJ6ZFAaRz9AbCw5YG2thG5vwKZ4OD9_LpHSi3ILy3KZqJb8zyERc9DgNdVlcv4iL1K12An0Q'
}

/**
 * planId: string
 * subscriber: { givenName: string, surname: string, email: string }
 */
export const createSubscription = async (planId, subscriber) => {
    const requestBody = {
        "plan_id": planId,
        "subscriber": {
            "name": {
                "given_name": subscriber.givenName,
                "surname": subscriber.surname
            },
            "email_address": subscriber.email
        },
        "application_context": {
            "brand_name": "Recruits Pro Athletes",
            "locale": "en-US",
            "shipping_preference": "NO_SHIPPING",
            "user_action": "SUBSCRIBE_NOW",
            "payment_method": {
                "payer_selected": "PAYPAL",
                "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
            },
            "return_url": "http://192.168.0.3:3000/process-payment",
            "cancel_url": "http://192.168.0.3:3000/choose-plan"
        }
    };

    try {
        const { data } = await axios({
            method: 'post',
            url: 'https://api.sandbox.paypal.com/v1/billing/subscriptions',
            headers,
            data: requestBody
        })

        return data
    } catch (e) {
        console.log(e.response.status, e.response.data)
    }
}