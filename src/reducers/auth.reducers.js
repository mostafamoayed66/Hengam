import {authConstants} from '../actions/constants'

const initialState = {
  messages: '',
  api_key: '',
  fernet_key: '',
  email: '',
  name: '',
  language: '',
  token: null,
  authenticate: false,
  loading: false,
  error: null,
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
        messages: action.payload.messages,
        api_key: action.payload.api_key,
        fernet_key: action.payload.fernet_key,
        email: action.payload.email,
        name: action.payload.name,
        language: action.payload.language,
        token: action.payload.token,
        authenticate: true,
      }
      break
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
      }
      break
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      }
      break
    default:
      break
  }

  return state
}
