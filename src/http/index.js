const BaseUrl = process.env.VUE_APP_BASE_URL
import axios from 'axios'

axios.defaults.baseURL = BaseUrl
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  })

export function get (url, query) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: query })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} query [请求时携带的参数] 
 */
export function post (url, query) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(query))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
