import {mainContants} from '../actions/constants'

const initialMainInfo = {
  count: null,
  next: null,
  num_pages: null,
  prev: null,
  result: [],
  error: null,
  message: '',
}

export default (state = initialMainInfo, action) => {
  switch (action.type) {
    case mainContants.GET_MAIN_PAGE_REQUEST:
      state = {
        ...state,
      }
      break
    case mainContants.GET_MAIN_PAGE_SUCCESS:
      state = {
        ...state,
        count: action.payload.count,
        next: action.payload.next,
        num_pages: action.payload.num_pages,
        prev: action.payload.prev,
        result: action.payload.result,
      }
      break
    case mainContants.GET_MAIN_PAGE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      }
      break
    default:
      break
  }

  return state
}
