import axios from "axios"
import keys from '../../config/keys'

export const getRankingByFormId = async (token = '', formId = '') => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: `${keys.API}/ranking`,
            headers: {
                "Authorization": token
            },
            data: {
                formId
            }
        })

        return data
    } catch (e) {
        throw new Error(e)
    }
}