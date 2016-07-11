import React, { Component } from 'react'
import { randomize } from './actions'
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <BigButton { ...this.props }/>
      </div>
    )
  }
}

class BigButton extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className='button big-button' onClick={() => dispatch(randomize())}>Randomize</div>
    )
  }
}

export default connect()(Footer)