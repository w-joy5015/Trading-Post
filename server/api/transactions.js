const {Transaction} = require('../db/models')
const router = require('express').Router()
module.exports = router

//securty check function that will stop the router request if the user is not who they say they are
const isMe = (req, res, next) => {
  if (Number(req.params.userId) === Number(req.user.id)) {
    next()
  } else {
    res.status(403).send("Where do you think you're going?")
  }
}

router.post('/:userId', isMe, async (req, res, next) => {
  try {
    const newTransaction = {
      stockSymbol: req.body.symbol,
      numOfShares: Number(req.body.numOfShares),
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

router.get('/:userId', isMe, async (req, res, next) => {
  try {
    const userTransactions = await Transaction.findAll({
      where: {userId: req.params.userId}
    })
    res.json(userTransactions)
  } catch (err) {
    console.error(err)
  }
})
