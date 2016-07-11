import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeams } from './selectors'

function getState(appState) {
  const { rightTeams, leftTeams } = getTeams(appState)
  return { rightTeams, leftTeams}
}

class Results extends Component {
  render() {
    const { rightTeams, leftTeams } = this.props
    return (
      <div className='results'>
        <ThreeTeams teams={leftTeams}/>
        <span className='vs'>VS</span>
        <ThreeTeams teams={rightTeams}/>
      </div>
    )
  }
}

class ThreeTeams extends Component {
  render() {
    const { teams } = this.props
    return (
      <div className='teams'>
        {teams.map(t => {
          return <div className='team' key={t.name}>{t.name}<span style={{fontSize: '.5em'}}>{`(${t.league})`}</span></div>
        })}
      </div>
    )
  }
}

export default connect(getState)(Results)