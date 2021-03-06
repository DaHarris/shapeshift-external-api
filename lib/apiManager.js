const Btce = require('./btce/index')
const Poloniex = require('./poloniex/index')
const Bittrex = require('./bittrex/index')

const updateTickers = function (exchange, symbols, callback) {
  switch (exchange) {
    case ('BTC-E'):
      Btce.updateTickers(exchange, symbols, callback)
      break
    case ('Poloniex'):
      Poloniex.updateTickers(exchange, symbols, callback)
      break
    case ('Bittrex'):
      Bittrex.updateTickers(exchange, symbols, callback)
      break
    default:
      let newError = new Error('The exchange: ' + exchange + ' has not been configured.')
      callback(newError, null)
  }
}

module.exports = {
  updateTickers
}
