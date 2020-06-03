// Dependencies
import axios from 'axios'
import * as types from './types'
import { SET_ERROR_MESSAGE } from '../error/types'
import keys from '../../config/keys'

// @param opt false | true (false will not make use of http response)
export const setProfileRequest = (token, profile, opt = true) => {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                method: 'PATCH',
                url: `${keys.API}/profile/athlete`,
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },
                data: profile
            })
            
            if (!opt) {
                dispatch({
                    type: types.SET_PROFILE_REQUEST,
                    payload: profile
                })

                return true
            }
 
            dispatch({
                type: types.SET_PROFILE_REQUEST,
                payload: data.athlete
            })
            return true

        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Error while trying to update profile.',
                    error: e.response
                }
            })

            return false
        }
    }
}

export const setProfileImagesRequest = (token, { avatar = null, cover = null }) => {
    return async dispatch => {
        try {
            const data = new FormData()

            if (avatar) {
                data.append('avatar', avatar)
            }

            if (cover) {
                data.append('cover', cover)
            }

            if (avatar || cover) {
                const { data: res } = await axios({
                    url: `${keys.API}/profile/athlete/images`,
                    method: 'POST',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/form-data'
                    },
                    data
                })
                dispatch({
                    type: types.SET_PROFILE_IMAGES_REQUEST,
                    payload: {
                        avatarUrl: res.avatarUrl,
                        coverImgUrl: res.coverImgUrl
                    }
                })
            }

        } catch (e) {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: {
                    message: 'Could not save your avatar.',
                    error: e.response.data || e
                }
            })
        }
    }
}

// export const getSelf = (token, fields) => async dispatch => {
//     try {
//         const { data } = await axios({
//             method: 'GET',
//             url: `${keys.API}/profile/self?fields=${fields}`,
//             headers: {
//                 "Authorization": token
//             }
//         })

//         if (data.athlete.length > 0) {

//         }
//     } catch (e) {
//         throw new Error(e)
//     }
// }