import React from 'react'
import {connect} from 'react-redux'
import {tickerThunk} from '../store/stock'
import BuyShares from './buy-shares'
import {updateBalanceThunk} from '../store/user'
import axios from 'axios'

class StockDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numOfShares: '0'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.tickerThunk(id)
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const numOfShares = Number(this.state.numOfShares)
    const price = Number(this.props.tickerSymbol['05. price'])
    const total = numOfShares * price
    const symbol = this.props.tickerSymbol['01. symbol']
    let newBalance = Number(this.props.user.balance) - total * 100
    if (newBalance >= 0) {
      await this.props.updateBalanceThunk(newBalance, this.props.user.id)
      await axios.post(`/api/transactions/${this.props.user.id}`, {
        price: price * 100,
        symbol,
        total: total * 100,
        numOfShares
      })
      alert(
        `Payment successul. Your new balance is $${this.props.user.balance /
          100}`
      )
    } else {
      alert('Not enough funds')
    }
  }

  render() {
    const balance = this.props.user.balance
    const ticker = this.props.tickerSymbol
    return (
      <div>
        <h1>{ticker['01. symbol']}</h1>
        {ticker['05. price'] ? (
          <h3>
            Price per share: ${ticker['05. price'].slice(
              0,
              ticker['05. price'].length - 2
            )}
          </h3>
        ) : null}

        <BuyShares
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
          tickerSym={ticker}
        />

        {/* <SellShares
          ticker = {ticker}
          balace = {balance}
        /> */}
      </div>
    )
  }
}

const mapState = state => ({
  tickerSymbol: state.tickerSymbol,
  user: state.user
})

const mapDispatch = dispatch => ({
  tickerThunk: str => dispatch(tickerThunk(str)),
  updateBalanceThunk: (value, id) => dispatch(updateBalanceThunk(value, id))
})

export default connect(mapState, mapDispatch)(StockDetails)
