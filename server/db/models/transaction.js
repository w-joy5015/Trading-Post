const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  stockSymbol: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numOfShares: {
    type: Sequelize.INTEGER
  },
  pricePerShare: {
    type: Sequelize.INTEGER
  },
  amountPaid: {
    type: Sequelize.INTEGER
  }
})

module.exports = Transaction
