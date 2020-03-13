import * as types from './types'
import axios from 'axios'
import config from '../../config/keys'

export const addVideo = (token, videoDetails = { platform: '', title: '', url: '' }) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${config.API}/video`,
                headers: {
                    'Authorization': token
                },
                data: videoDetails
            })
            dispatch({
                type: types.ADD_VIDEO,
                payload: data.video
            })
            return true
        } catch (e) {
            throw e
        }
    }
}

export const deleteVideo = (token, id) => {
    return async dispatch => {
        try {  
            await axios({
                method: 'DELETE',
                url: `${config.API}/video/${id}`,
                headers: {
                    "Authorization": token
                }
            })

            dispatch({
                type: types.DELETE_VIDEO,
                payload: id
            })
        } catch (e) {
            throw e
        }
    }
}

export const getVideos = (token) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `${config.API}/video`,
                headers: {
                    'Authorization': token
                }
            })

            dispatch({
                type: types.GET_VIDEOS,
                payload: data.videos
            })

            return data.videos
        } catch (e) {
            throw e
        }
    }
}