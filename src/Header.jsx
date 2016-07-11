import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeStarLevel, toggleInternational } from './actions'
import Toggle from 'react-toggle'


class Header extends Component {
  render() {
    const { dispatch, useInternational } = this.props
    return (
      <div className='header'>
        <Button {...this.props} starLevel={9}>4 star</Button>
        <Button {...this.props} starLevel={10}>5 star</Button>
        <Toggle checked={useInternational} onChange={() => dispatch(toggleInternational())}/>
        <span>Include International</span>
      </div>
    )
  }
}

class Button extends Component {
  render() {
    const { children, starLevel, dispatch } = this.props
    return <div className='button' onClick={() => dispatch(changeStarLevel(starLevel))}>{children}</div>
  }
}

export default connect((appState) => appState.options)(Header)