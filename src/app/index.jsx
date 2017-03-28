import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Container from './containers/Container'
import store from './store'
import '../index.html'

const notify = () => {
  // eslint-disable-next-line
  console.log('app.js started')
}

const start = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    document.getElementById('app')
  )
}

notify()
start()
