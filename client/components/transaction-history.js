import React from 'react'
import {connect} from 'react-redux'
import {getTransactionsThunk} from '../store/transaction'

class TransactionHistory extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getTransactionsThunk(id)
  }

  render() {
    const transactionArr = this.props.transactions
    return (
      <div>
        {transactionArr
          ? transactionArr.map(current => {
              return (
                <div key={current.id}>
                  <h4>Date: {current.createdAt}</h4>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

const mapState = state => ({
  transactions: state.transactions
})

const mapDispatch = dispatch => ({
  getTransactionsThunk: id => dispatch(getTransactionsThunk(id))
})

export default connect(mapState, mapDispatch)(TransactionHistory)
