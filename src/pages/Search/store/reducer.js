import * as actionTypes from './constants'

const defaultState = {
    hotList: [],
    songsList: [],
    enterLoading: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOTLIST:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.CHANGE_SONGSLIST:
            return {
                ...state,
                songsList: action.data
            }
        case actionTypes.CHANGE_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}