const reduceTransactions = transactionArr => {
  let sharesObj = {}
  transactionArr.map(current => {
    if (sharesObj[current.stockSymbol]) {
      sharesObj[current.stockSymbol] += current.numOfShares
    } else {
      sharesObj[current.stockSymbol] = current.numOfShares
    }
  })
  return sharesObj
}

module.exports = reduceTransactions
