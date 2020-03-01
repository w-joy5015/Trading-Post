import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TRANSACTIONS = 'GET_TRANSACTIONS'

/**
 * INITIAL STATE
 */
const transactions = []

/**
 * ACTION CREATORS
 */
export const getTransaction = arr => ({
  type: GET_TRANSACTIONS,
  transactions: arr
})

/**
 * THUNK CREATORS
 */
export const getTransactionsThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/transactions/${id}`)
    dispatch(getTransaction(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = transactions, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.transactions
    default:
      return state
  }
}
