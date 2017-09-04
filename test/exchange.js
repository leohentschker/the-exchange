const expectThrow = require('./expectThrow')

var ExchangeTicker = artifacts.require('./ExchangeTicker.sol')
var ExchangeToken = artifacts.require('./ExchangeToken.sol')
var Exchange = artifacts.require('./Exchange.sol')

const SYMBOL = "FB"
const RATE = 10
const TO_SPEND = 7

contract('Exchange', (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  it('Test the stock ticker address', async () => {
    assert.equal(
      (await ExchangeTicker.deployed()).address,
      await (await Exchange.deployed()).ticker.call(),
      "Didn't set ticker address")
  })

  it('Make sure only the owner can update the ticker', async () => {
    let exchange = await Exchange.deployed()

    // make sure it throws coming from the incorrect user
    expectThrow(exchange.updateTicker(ExchangeTicker.address, { from: user2 }))

    // make sure it goes through coming from the owner
    exchange.updateTicker(Exchange.address, { from: user1 })
  })

  it('Test exchange permissioning', async () => {
    let exchange = await Exchange.deployed()

    // make sure we can't buy symbols that haven't been deployed
    expectThrow(exchange.buy(SYMBOL, { from: user1, value: 10 }))

    // make sure we can't get the address before it's set
    expectThrow(exchange.lookup.call(SYMBOL))
  })
})