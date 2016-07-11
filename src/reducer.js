import * as ATs from './actionTypes'

export default function reducer(state=initialState(), action) {
  switch (action.type) {
    case ATs.RANDOMIZE:
      return Object.assign({}, state)

    case ATs.CHANGE_STAR_LEVEL: {
      const options = Object.assign({}, state.options, action.payload)
      return Object.assign({}, state, {options})
    }

    case ATs.TOGGLE_INTERNATIONAL: {
      const { useInternational } = state.options
      const options = Object.assign({}, state.options, {useInternational: !useInternational})
      return Object.assign({}, state, {options})
    }
  }
  return state
}

function initialState() {
  const options = { minimumStarLevel: 9, useInternational: false}
  return {options}
}