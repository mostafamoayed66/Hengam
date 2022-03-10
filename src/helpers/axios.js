import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {api} from '../urlConfig'
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
    const accessKey = await AsyncStorage.getItem('@access_Key')
    if (accessKey && accessKey.length > 10) {
      req.headers.Authorization = `Bearer ${accessKey}`
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
    if (status && status === 401) {
      store.dispatch({type: authConstants.LOGOUT_SUCCESS})
    }
    return Promise.reject(error)
  },
)

export default axiosIntance
