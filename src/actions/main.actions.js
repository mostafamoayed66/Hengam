import {mainContants} from './constants'
import axios from '../helpers/axios'

export const getDashboardInfo = payload => async dispatch => {
  console.log('dashboard request')
  const {page, workspace} = payload
  dispatch({type: mainContants.GET_MAIN_PAGE_REQUEST})
  try {
    const res = await axios.get(
      `/time_tracking/time_entries/?page=${page}&&workspace=${workspace}`,
    )
    if (res.status === 200) {
      dispatch({
        type: mainContants.GET_MAIN_PAGE_SUCCESS,
        payload: res.data,
      })
    } else {
      dispatch({
        type: mainContants.GET_MAIN_PAGE_FAILURE,
        payload: res.data.error,
      })
    }
  } catch (error) {
    console.log('main.actions.js \n', error)
  }
}
