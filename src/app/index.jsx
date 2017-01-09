import React from 'react'
import ReactDOM from 'react-dom'
import Container from './containers/Container'

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
