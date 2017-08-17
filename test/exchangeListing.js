import expectThrow from '../helpers/expectThrow';
import 'regenerator-runtime/runtime'

var ExchangeListing = artifacts.require('./ExchangeListing.sol')

const SYMBOL = "ETSLA"

contract('ExchangeListing', async (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  it('Addresses should initially be empty', async () => {
    let exchange = await ExchangeListing.deployed()
    let emptyAddr = await exchange.getAddress(SYMBOL)
    assert.equal(emptyAddr, 0, "Incorrect empty address")    
  })

  it('Only the owner should be able to update addresses', async () => {
    let exchange = await ExchangeListing.deployed()
    await expectThrow(exchange.addToken(SYMBOL, user1, { from: user2 }))
  })

  it('Make sure the creator can add a token', async () => {
    let exchange = await ExchangeListing.deployed()
    await exchange.addToken(SYMBOL, user1, { from: user1 })
    let tokenAddress = await exchange.getAddress(SYMBOL)
    assert.equal(user1, tokenAddress, "Set incorrect address")
  })
})
