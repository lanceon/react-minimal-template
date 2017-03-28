import React, { PropTypes } from 'react'
import Form from '../../components/Form'

class Container extends React.Component {
  static propTypes = {
    textFromStore: PropTypes.string.isRequired,
    textChanged: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  onChange = (text) => {
    this.setState({ text })
    this.props.textChanged(text)
  }

  // eslint-disable-next-line no-alert
  onSubmit = () => alert(JSON.stringify(this.state))

  render() {
    return (
      <Form
        textFromState={this.state.text}
        textFromStore={this.props.textFromStore}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default Container
