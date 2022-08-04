import {
    getBannerRequest,
    getRecommendRequest
} from '@/api/request'
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER_LIST,
    data: data
})

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: data
})

export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                // console.log(data)
                const action = changeBannerList(data.banners)
                // console.log(action)
                dispatch(action)
                
            })
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendRequest()
            .then(data => {
                if (!data.length) {
                    data = []
                }
                const action = changeRecommendList(data)
                dispatch(action)
                dispatch(changeEnterLoading(false))
            })
    }
}