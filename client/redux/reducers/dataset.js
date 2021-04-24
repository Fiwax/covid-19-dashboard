import axios from 'axios'

const GET_DATA = 'GET_DATA'
const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'

const initialState = {
  data: [],
  globalNumbers: {},
  searchTerm: '',
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        data: action.data,
        globalNumbers: action.globalNumbers,
        isLoading: action.loading
      }
    }
    case GET_SEARCH_TEXT: {
      return { ...state, searchTerm: action.text }
    }
    default:
      return state
  }
}

export function getData() {
  return async (dispatch) => {
    const { data } = await axios('https://api.covid19api.com/summary')
    dispatch({ type: GET_DATA, data: data.Countries, globalNumbers: data.Global, loading: false })
  }
}

export function getSearchText(text) {
  return { type: GET_SEARCH_TEXT, text }
}
