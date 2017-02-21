import { connect } from 'react-redux'
import Container from './Container'
import { SET_TEXT } from '../../actions'

const mapStateToProps = state => ({
  textFromStore: state.text,
})

const mapDispatchToProps = dispatch => ({
  textChanged: value => dispatch({
    type: SET_TEXT,
    payload: {
      text: value,
    },
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
