import {mainContants} from '../actions/constants'

const initialMainInfo = {
  count: null,
  next: null,
  num_pages: null,
  prev: null,
  result: [],
  allData: [],
  error: null,
  message: '',
  splash_flag: false,
}

function getDatails(datails) {
  const allData = []
  datails.result.map(oneDepth => {
    const element = {}
    const detailData = []
    element.date = oneDepth.date
    return (
      oneDepth.time_entries.map(twoDepth => {
        return twoDepth.time_entries.map(detail => {
          detailData.push(detail)
          element.data = detailData
          return detail
        })
      }),
      allData.push(element)
    )
  })
  return allData
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
        allData: getDatails(action.payload),
      }
      break
    case mainContants.GET_MAIN_PAGE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      }
      break
    case mainContants.VISIT_SPLASH_PAGE_SUCCESS:
      state = {
        ...state,
        splash_flag: true,
      }
      break
    case mainContants.VISIT_SPLASH_PAGE_FAILURE:
      state = {
        ...state,
        splash_flag: false,
      }
      break
    default:
      break
  }

  return state
}
