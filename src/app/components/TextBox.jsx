import React, { PropTypes } from 'react'

const TextBox = ({ text }) =>
  <p>
    {text}
  </p>

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextBox
