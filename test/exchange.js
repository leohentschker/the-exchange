const expectThrow = require('./expectThrow')

var ExchangeTicker = artifacts.require('./ExchangeTicker.sol')
var ExchangeToken = artifacts.require('./ExchangeToken.sol')
var Exchange = artifacts.require('./Exchange.sol')

const SYMBOL = "AAPL"

contract('Exchange', async (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  it('Test interactions with the stock ticker', async () => {
    let exchange = await Exchange.deployed()
    let ticker = await ExchangeTicker.deployed()

    // check that we set the ticker correctly
    assert.equal(ticker.address, await exchange.ticker.call(), "Didn't set ticker address")
  })
})