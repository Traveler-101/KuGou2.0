import * as actionTypes from './constants'
import { getRankRequest } from '@/api/request'

export const changeRankList = (data) => ({
    type: actionTypes.CHANGE_RANK_LIST,
    data
})
export const changeLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})

export const getRankList = () => {
    return dispatch => {
        getRankRequest()
            .then(data => {
                let list = data && data.list;
                dispatch(changeRankList(list))
                dispatch(changeLoading(false))
            })
    }
}
