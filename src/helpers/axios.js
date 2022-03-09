import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {api} from '../UrlConfig'
import store from '../Store'
import {authConstants} from '../actions/constants'

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosIntance.interceptors.request.use(
  async req => {
    const auth = await AsyncStorage.getItem('token')
    if (auth && auth.token) {
      req.headers.Authorization = `Bearer ${auth.token.access}`
    }
    return req
  },
  error => Promise.reject(error),
)

axiosIntance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    const status = error.response ? error.response.status : undefined
    if (status && status === 500 && status === 401 && status === undefined) {
      store.dispatch({type: authConstants.LOGOUT_SUCCESS})
    }
    return Promise.reject(error)
  },
)

export default axiosIntance
