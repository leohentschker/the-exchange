const expectThrow = require('./expectThrow')

var ExchangeTicker = artifacts.require('./ExchangeTicker.sol')

const SYMBOL = "AAPL"

contract('ExchangeTicker', async (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  it('Test permissioning', async () => {
    let ticker = await ExchangeTicker.deployed()

    // make sure that we can't get the symbol if no
    // rate has been set
    expectThrow(ticker.getRate(SYMBOL))

    // make sure that non-owners can't set the symbol
    expectThrow(ticker.setRate(SYMBOL, 2, { from: user2 }))

    // make sure that the owner can set the rate
    ticker.setRate(SYMBOL, 2, { from: user1 })
    assert.equal(await ticker.getRate.call(SYMBOL), 2, "Couldn't update rate")
  })
})