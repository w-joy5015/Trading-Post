import React from 'react'
import {connect} from 'react-redux'
import {tickerThunk} from '../store/stock'

class CompanyShare extends React.Component {
  componentDidMount() {
    let id = this.props.ticker
    this.props.tickerThunk(id)
  }

  render() {
    let status
    const sharesOwned = this.props.sharesOwned
    const ticker = this.props.ticker
    const tickerPrice = this.props.tickerSymbol['05. price']
    const openingPrice = this.props.tickerSymbol['02. open']
    if (tickerPrice > openingPrice) {
      status = 'up'
    } else if (tickerPrice < openingPrice) {
      status = 'down'
    } else status = 'same'

    return (
      <div data-status={status} className="portfolio-share">
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
