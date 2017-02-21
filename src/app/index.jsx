import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Container from './containers/Container'
import store from './store'
import '../index.html'

const start = () => {
  /* eslint-disable no-console */
  console.log('app.js started')
  /* eslint-enable */

  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    document.getElementById('app')
  )
}

start()
