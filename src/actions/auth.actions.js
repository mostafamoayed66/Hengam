import {authConstants} from './constants'
// import axios from "../helpers/axios";

export const login = user => dispatch => {
  dispatch({type: authConstants.LOGIN_REQUEST})
  dispatch({
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      user,
    },
  })
}
