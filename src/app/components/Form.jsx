import React, { PropTypes } from 'react'
import TextBox from '../components/TextBox'

const Form = ({ textFromState, textFromStore, onChange, onSubmit }) =>
  <form onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
    <input
      type="text"
      value={textFromState}
      onChange={e => onChange(e.target.value)}
    />
    <input
      type="submit"
      value="Submit"
    />
    <TextBox text={`Text from store: [${textFromStore}]`} />
  </form>

Form.propTypes = {
  textFromState: PropTypes.string,
  textFromStore: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Form

