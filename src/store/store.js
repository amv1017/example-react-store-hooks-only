import {
  INC_HEIGHT,
  DEC_HEIGHT,
  INC_WIDTH,
  DEC_WIDTH,
} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case INC_HEIGHT: {
      return {
        ...state,
        height: state.height + action.payload
      }
    }
    case DEC_HEIGHT: {
      return {
        ...state,
        height: state.height - action.payload
      }
    }
    case INC_WIDTH: {
      return {
        ...state,
        width: state.width + action.payload
      }
    }
    case DEC_WIDTH: {
      return {
        ...state,
        width: state.width - action.payload
      }
    }
    default: {
      return state
    }
  }
}
