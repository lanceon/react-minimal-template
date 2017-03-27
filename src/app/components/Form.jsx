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
  textFromState: PropTypes.string.isRequired,
  textFromStore: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form

