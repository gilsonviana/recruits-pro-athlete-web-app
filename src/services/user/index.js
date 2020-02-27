import axios from "axios"
import keys from '../../config/keys'

export const getAthleteByName = async (name = "") => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${keys.API}/profile/${name}/athlete`
        })
        console.log(data)
        return data
    } catch (e) {
        console.log(e)
        return false
    }
}

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