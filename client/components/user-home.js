import React from 'react'
import axios from 'axios'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickerSymbol: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      const stock = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
          this.state.tickerSymbol
        }&apikey={process.env.ALPHA_VANTAGE_KEY}`
      )
      console.log(stock.data['Global Quote'])
      this.props.history.push(`/stock-details/${this.state.tickerSymbol}`)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div>
        <h3>Welcome, looking to buy or sell some shares?</h3>
        <h4>Enter a stock's ticker symbol to search it up:</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="tickerSymbol"
            value={this.state.tickerSymbol}
            onChange={this.handleChange}
            required
            type="text"
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default UserHome
