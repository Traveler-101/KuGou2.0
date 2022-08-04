import * as actionTypes from './constants'
import { findIndex } from '../../../api/utils';

const defaultState = {
    playList: [],
}
const handleDeleteSong = (state, song) => {
    const newPlayList = JSON.parse(JSON.stringify(state.playList));
    const fpIndex = findIndex(song, newPlayList)
    newPlayList.splice(fpIndex, 1)
    return {
        ...state,
        playList: newPlayList
    }
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_PLAY_LIST:
            return {
                ...state,
                playList: action.data
            }
        case actionTypes.DELETE_SONG:
            return handleDeleteSong(state, action.data)
        case actionTypes.DELETE_ALL_SONG:
            return {
                ...state,
                playList: []
            }
        default:
            return state
    }
}
