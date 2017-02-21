import { createStore } from 'redux'
import {
  SET_TEXT,
  CLEAR_TEXT,
} from '../actions'

const initialState = {
  text: '',
}

function data(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload.text,
      }
    case CLEAR_TEXT:
      return {
        ...state,
        text: action.payload.text,
      }
    default:
      return state
  }
}

const store = createStore(data)

export default store
