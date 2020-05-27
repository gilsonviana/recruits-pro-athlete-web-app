import axios from "axios"
import keys from '../../config/keys'

export const getAthleteByName = async (query) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${keys.API}/profile/public/athlete${query}`
        })
        return data
    } catch (e) {
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
        return false
    }
}

export const getAthletePublicProfile = async (id = '') => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `${keys.API}/profile/athlete/public/${id}`
        })

        return data
    } catch (e) {
        throw new Error(e)
    }
}