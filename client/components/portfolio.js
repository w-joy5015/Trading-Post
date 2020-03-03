import React from 'react'
import {connect} from 'react-redux'
import {getTransactionsThunk} from '../store/transaction'
import CompanyShare from './portfolio-company-share'
import reduceTransactions from '../../utilities/reduceTransactions'

class Portfolio extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getTransactionsThunk(id)
  }

  render() {
    const transactionArr = this.props.transactions
    const sharesObj = reduceTransactions(transactionArr)
    return !this.props.isLoggedIn ? (
      <NotFound />
    ) : (
      <div>
        <h2>Your Portfolio:</h2>
        <div className="portfolio-headings">
          <h3>Stock Symbol:</h3>
          <h3>Shares Owned:</h3>
          <h3>Current Value:</h3>
        </div>
        <div>
          {Object.entries(sharesObj).map(share => {
            return (
              <CompanyShare
                key={share[0]}
                ticker={share[0]}
                sharesOwned={share[1]}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  transactions: state.transactions,
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  getTransactionsThunk: id => dispatch(getTransactionsThunk(id))
})

export default connect(mapState, mapDispatch)(Portfolio)
