import React, { Component } from 'react'
import Form from '../components/Form'

class Container extends Component {
  state = {
    text: '',
  }

  onChange = text => this.setState({ text })

  // eslint-disable-next-line no-alert
  onSubmit = () => alert(JSON.stringify(this.state))

  render() {
    return (
      <Form
        text={this.state.text}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default Container
