import AsyncStorage from '@react-native-async-storage/async-storage'
import {authConstants} from './constants'
import axios from '../helpers/axios'

export const login = user => async dispatch => {
  console.log('signin request')
  dispatch({type: authConstants.LOGIN_REQUEST})
  const res = await axios.post(`/users/login/`, {
    ...user,
  })
  if (res.status === 200) {
    const {access, refresh} = res.data.token
    try {
      await AsyncStorage.setItem('@access_Key', access)
      await AsyncStorage.setItem('@refresh_Key', refresh)
    } catch (error) {
      console.log('AsyncStorage', 'AsyncStorage SetItem failed!')
    }

    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: res.data,
    })
  }
}
