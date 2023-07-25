import * as actionTypes from './constants'
import { getPlayRequest } from '@/api/request'

export const changePlayList = (data) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    data
})

export const deleteSong = (data) => ({
    type: actionTypes.DELETE_SONG,
    data
})

export const deleteAllSong = (data) => ({
    type: actionTypes.DELETE_ALL_SONG,
    data
})

export const getPlayList = () => {
    return dispatch => {
        getPlayRequest()
            .then(data => {               
                dispatch(changePlayList(data.data))
            })
    }
}
