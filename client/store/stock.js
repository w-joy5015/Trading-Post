import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TICKER = 'GET_TICKER'

/**
 * INITIAL STATE
 */
const tickerData = {}

/**
 * ACTION CREATORS
 */
export const getTicker = string => ({
  type: GET_TICKER,
  tickerSymbol: string
})

/**
 * THUNK CREATORS
 */
export const tickerThunk = symbol => async dispatch => {
  try {
    const {data} = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey={process.env.ALPHA_VANTAGE_KEY}`
    )
    dispatch(getTicker(data['Global Quote']))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = tickerData, action) {
  switch (action.type) {
    case GET_TICKER:
      return action.tickerSymbol
    default:
      return state
  }
}
