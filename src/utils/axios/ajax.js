// 封装ajax模块
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = process.env.VUE_APP_AXIOS_URL
axios.defaults.withCredentials = true
// 对响应数据进行处理
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 设置请求头信息
axios.interceptors.request.use(
  config => {
    let xstreamId = sessionStorage.getItem('token')
    if (xstreamId) {
      config.headers['x-stream-id'] = xstreamId
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()
      reject(error)
    })
  })
}
