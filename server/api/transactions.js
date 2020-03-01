const {Transaction} = require('../db/models')
const router = require('express').Router()
module.exports = router

router.post('/:userId', async (req, res, next) => {
  try {
    const newTransaction = {
      stockSymbol: req.body.symbol,
      numOfShares: req.body.numOfShares,
      pricePerShare: req.body.price,
      amountPaid: req.body.total,
      userId: req.params.userId
    }
    await Transaction.create(newTransaction)
    const userTransactions = await Transaction.findAll({
      where: {userId: req.params.userId}
    })
    res.json(userTransactions)
  } catch (err) {
    next(err)
  }
})
