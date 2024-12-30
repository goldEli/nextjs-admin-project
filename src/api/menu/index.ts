

import request from "@/utils/http/request"
import axios from "axios"

const instance = axios.create({
    baseURL: '', // 后端接口的基础 URL
    timeout: 5000, // 请求超时时间
    headers: {
      'Content-Type': 'application/json', // 请求头类型
    },
    withCredentials: true, // 是否发送跨域请求时携带 Cookies
  });
  


export const getMenu = () => {
    const res = instance.get('/api')
    return res
}