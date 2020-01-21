import axios from "axios";
import keys from '../../config/keys'

export const createSubscription = async (token, planId) => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: `${keys.API}/subscription`,
            headers: {
                "Authorizaiton": token
            },
            data: {
                planId
            }
        })

        return data
    } catch (e) {
        console.log(e.response)
        return false
    }
}