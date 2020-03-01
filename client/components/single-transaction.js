import React from 'react'

const SingleTransaction = props => {
  const currentTransaction = props.currentTransaction

  return (
    <div className="single-transaction-container">
      <div className="transaction-field">
        <h4>Stock Symbol: </h4>
        <p>{currentTransaction.stockSymbol}</p>
      </div>
      <div className="transaction-field">
        <h4>Number of Shares bought:</h4>
        <p>{currentTransaction.numOfShares}</p>
      </div>
      <div className="transaction-field">
        <h4>Price per share at time of purchase:</h4>
        <p>${currentTransaction.pricePerShare / 100}</p>
      </div>
      <div className="transaction-field">
        <h4>Amount Paid:</h4>
        <p>${currentTransaction.amountPaid / 100}</p>
      </div>
      <div className="transaction-field">
        <h4>Traded at:</h4>
        <p>{currentTransaction.createdAt}</p>
      </div>
    </div>
  )
}

export default SingleTransaction
