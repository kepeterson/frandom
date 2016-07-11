import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Results from './Results.jsx'
import reducer from './reducer.js'

class App extends React.Component {
  render () {
    return (
      <div className='root'>
        <Header />
        <Results />
        <Footer />
      </div>
    )
  }
}

let store = createStore(reducer)


render(<Provider store={store}><App/></Provider>, document.getElementById('app'))