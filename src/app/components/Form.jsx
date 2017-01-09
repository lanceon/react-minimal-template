import React, { PropTypes } from 'react'

const Form = ({ text, onChange, onSubmit }) =>
  <form onSubmit={(e) => { e.preventDefault(); onSubmit() }}>
    <input
      type="text"
      value={text}
      onChange={e => onChange(e.target.value)}
    />
    <input
      type="submit"
      value="Submit"
    />
  </form>

Form.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Form

