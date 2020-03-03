const expect = require('chai').expect
const reduceTransactions = require('./reduceTransactions')
const should = require('chai').should()

//---TEST DATA:---

const transactionsArr = [
  {
    id: 1,
    stockSymbol: 'MSFT',
    numOfShares: 1,
    pricePerShare: 16201,
    amountPaid: 16201,
    createdAt: '2020-03-02T00:56:05.200Z',
    updatedAt: '2020-03-02T00:56:05.200Z',
    userId: 1
  },
  {
    id: 2,
    stockSymbol: 'MSFT',
    numOfShares: 2,
    pricePerShare: 16201,
    amountPaid: 32402,
    createdAt: '2020-03-02T00:58:57.553Z',
    updatedAt: '2020-03-02T00:58:57.553Z',
    userId: 1
  },
  {
    id: 3,
    stockSymbol: 'AGIO',
    numOfShares: 2,
    pricePerShare: 4934,
    amountPaid: 9868,
    createdAt: '2020-03-02T21:09:59.107Z',
    updatedAt: '2020-03-02T21:09:59.107Z',
    userId: 1
  },
  {
    id: 4,
    stockSymbol: 'F',
    numOfShares: 4,
    pricePerShare: 720,
    amountPaid: 2160,
    createdAt: '2020-03-03T01:18:16.368Z',
    updatedAt: '2020-03-03T01:18:16.368Z',
    userId: 1
  },
  {
    id: 5,
    stockSymbol: 'AGIO',
    numOfShares: 1,
    pricePerShare: 4934,
    amountPaid: 4934,
    createdAt: '2020-03-03T01:27:05.441Z',
    updatedAt: '2020-03-03T01:27:05.441Z',
    userId: 1
  }
]

const transactionsArrResult = {
  MSFT: 3,
  AGIO: 3,
  F: 4
}

//---TEST SPECS:---

describe('reduces an array of objects to an object with tickers as keys and numOfShares as values', () => {
  it('returns the correct number of shares per ticker', () => {
    expect(reduceTransactions(transactionsArr)).to.deep.equal(
      transactionsArrResult
    )
  })
})
