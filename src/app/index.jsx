import React from 'react'
import ReactDOM from 'react-dom'
import Container from './containers/Container'
import '../index.html'

const start = () => {
  /* eslint-disable no-console */
  console.log('app.js started')
  /* eslint-enable */

  ReactDOM.render(
    <Container />,
    document.getElementById('app')
  )
}

start()
