import { TEAMS, LEAGUES } from './constants.js'
import { shuffle } from 'lodash'

export function getTeams(appState) {
  const { minimumStarLevel, useInternational } = appState.options
  const shuffled = shuffle(TEAMS.filter(t => useInternational ? t : t.league !== LEAGUES.INT)
    .filter(t => t.stars >= minimumStarLevel))

  const rightTeams = shuffled.slice(0, 3)
  const leftTeams = shuffled.slice(3, 6)

  return { rightTeams, leftTeams}
}