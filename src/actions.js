import * as ATs from './actionTypes'

export function randomize() {
  return {
    type: ATs.RANDOMIZE
  }
}

export function changeStarLevel(minimumStarLevel) {
  return {
    type: ATs.CHANGE_STAR_LEVEL,
        payload: { minimumStarLevel }
  }
}

export function toggleInternational() {
  return {
    type: ATs.TOGGLE_INTERNATIONAL,
  }
}