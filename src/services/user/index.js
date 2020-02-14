import axios from "axios"
import keys from '../../config/keys'

export const getAthleteById = async (id = '') => {
    try {
        const { data } = await axios({
            method: 'GET',
            // url: `${keys.API}/profile/athlete/${id}`,
            url: `http://localhost:3000/api/v2/profile/athlete/${id}`,
        })

        return data
    } catch (e) {
        console.log(e.response)
        return false
    }
}