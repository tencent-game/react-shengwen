import axios from 'axios'

axios.defaults.timeout = 5000

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token') // 获取token缓存
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url, params
    })
      .then(result => {
        resolve(result)
      })
      .then(error => {
        reject(error)
      })
    })
  }
  
 const post =  ({url, data})=> {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
export {
  get,
  post
}