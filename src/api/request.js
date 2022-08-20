import axios from "axios"
import { axiosInstance } from "./config"

// 专属推荐数据
export const getRecommendRequest = 
    () => axiosInstance.get('/commend')
     
// 播放列表数据
export const getPlayRequest = 
    () => axiosInstance.get('/playlist')
    
// 轮播图
export const getBannerRequest = 
    () => axiosInstance.get('/banner')
    
// 排行榜
export const getRankRequest = 
    () => axiosInstance.get('/rank')


export const getResultSongsListRequest = (keyword) => {
    let url = `https://mu-api.yuk0.com/search?offset=0&limit=30&keywords=${keyword}`
    console.log(url)
    return axios.get(`https://mu-api.yuk0.com/search?offset=0&limit=30&keywords=${keyword}`)
    
}

export const getHotListRequest = () =>
    axios.get('https://mu-api.yuk0.com/search/hot')