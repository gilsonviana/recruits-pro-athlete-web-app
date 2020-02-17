import axios from "axios"
import keys from '../../config/keys'

export const getAthleteById = async (id = '') => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${keys.API}/profile/athlete/${id}`,
        })

        return data
    } catch (e) {
        console.log(e.response)
        return false
    }
}