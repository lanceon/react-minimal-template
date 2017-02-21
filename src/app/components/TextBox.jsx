import React, { PropTypes } from 'react'

const TextBox = ({ text }) =>
  <div style={{ width: '300px', margin: '1em', padding: '1em', backgroundColor: 'orange' }}>
    {text}
  </div>

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextBox
