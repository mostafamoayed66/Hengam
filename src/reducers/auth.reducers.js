import {authConstants} from '../actions/constants'

const initialState = {
  token: null,
  user: {
    email: '',
    password: '',
  },
  authenticate: false,
  loading: false,
  error: null,
  message: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
      }
      break
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        user: action.payload.user,
      }
      break
    default:
      break
  }

  return state
}
