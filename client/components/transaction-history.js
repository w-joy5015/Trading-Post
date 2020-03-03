import React from 'react'
import {connect} from 'react-redux'
import {getTransactionsThunk} from '../store/transaction'
import SingleTransaction from './single-transaction'

class TransactionHistory extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getTransactionsThunk(id)
  }

  render() {
    const transactionArr = this.props.transactions
    return (
      <div>
        <h3>Your Transaction History:</h3>
        {transactionArr
          ? transactionArr.map(current => {
              return (
                <SingleTransaction
                  key={current.id}
                  currentTransaction={current}
                />
              )
            })
          : null}
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

export default connect(mapState, mapDispatch)(TransactionHistory)
