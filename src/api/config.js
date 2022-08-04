// 配置请求对象
import axios from 'axios'

export const baseUrl = "https://www.fastmock.site/mock/1c47faebda5122a88aadb1bb5c0bbe51/music";
const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~~')
    }
)

export { axiosInstance }