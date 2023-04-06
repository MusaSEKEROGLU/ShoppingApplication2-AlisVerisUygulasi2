import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseByTwocounter } from "../redux/actions/counterActions"

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={e => { this.props.dispatch(increaseByTwocounter()) }}>
          2 Arttir
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwocounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);