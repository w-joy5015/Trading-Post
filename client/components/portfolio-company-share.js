import React from 'react'
import {connect} from 'react-redux'
import {tickerThunk} from '../store/stock'

class CompanyShare extends React.Component {
  componentDidMount() {
    let id = this.props.ticker
    this.props.tickerThunk(id)
  }

  render() {
    const sharesOwned = this.props.sharesOwned
    const ticker = this.props.ticker
    const tickerPrice = this.props.tickerSymbol['05. price']

    return (
      <div className="share-owned">
        <h4>{ticker}</h4>
        <h4>{sharesOwned}</h4>
        <h4>${tickerPrice * sharesOwned}</h4>
      </div>
    )
  }
}

const mapState = state => ({
  tickerSymbol: state.tickerSymbol
})

const mapDispatch = dispatch => ({
  tickerThunk: str => dispatch(tickerThunk(str))
})

export default connect(mapState, mapDispatch)(CompanyShare)
