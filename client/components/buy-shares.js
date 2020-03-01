import React from 'react'

const BuyShares = props => {
  const {state, tickerSym, handleChange, handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <label name="numOfShares">Number of shares you would like to buy:</label>
      <input
        name="numOfShares"
        value={state.numOfShares}
        onChange={handleChange}
        required
      />
      <h4>Paying Price:</h4>
      <p>{Number(state.numOfShares) * Number(tickerSym['05. price'])}</p>
      <button style={{margin: '5px 0px 0px 0px'}} type="submit">
        Buy Shares
      </button>
    </form>
  )
}

export default BuyShares
