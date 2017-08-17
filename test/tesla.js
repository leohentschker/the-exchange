// I performed sanity checks and testing on the Tesla
// stock token first

import expectThrow from '../helpers/expectThrow';

var TeslaCrowdsale = artifacts.require('./TeslaCrowdsale.sol')
var TeslaToken = artifacts.require('./TeslaToken.sol')

const SYMBOL = "ETSLA"
const NAME = "ETesla"
const RATE = 2
const CAP = 10000000000000000000000

const EXTENDED_RATE = 2
const EXTENDED_CAP = 2 * CAP

contract('TeslaCrowdsale', async (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  it('Check the initial balance of users in the crowdsale', async () => {
    let crowdsale = await TeslaCrowdsale.deployed()

    let tokenAddress = await crowdsale.token.call()
    let token = TeslaToken.at(tokenAddress)

    // check to see that we don't start out with any tokens
    let initialBalance = await token.balanceOf.call(user1)
  })

  it('Check that we can buy tokens', async () => {
    let crowdsale = await TeslaCrowdsale.deployed()

    let tokenAddress = await crowdsale.token.call()
    let token = TeslaToken.at(tokenAddress)

    await crowdsale.sendTransaction({
      value: 7,
      from: user2
    })

    let balance = await token.balanceOf(user2)
    console.log(balance, "THE BAL")
  })

  it('Check that the properties were set correctly on the crowdsale', async () => {
    let crowdsale = await TeslaCrowdsale.deployed()

    let rate = await crowdsale.rate.call()
    let cap = await crowdsale.cap.call()

    assert.equal(rate, RATE, "Rate isn't correct")
    assert.equal(cap, CAP, "Cap isn't correct")
  })

  it('Check that non-owners cannot update the exchange crowdsale', async () => {
    let crowdsale = await TeslaCrowdsale.deployed()
    await expectThrow(crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user2 }))
  })

  it('Check that owners can extend the crowdsale', async () => {
    let crowdsale = await TeslaCrowdsale.deployed()
    await crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user1 })

    let rate = await crowdsale.rate.call()
    let cap = await crowdsale.cap.call()

    assert.equal(rate, EXTENDED_RATE, "Extended rate isn't correct")
    assert.equal(cap, EXTENDED_CAP, "Extended cap isn't correct")

    // make sure that they increase the cap when extending
    await expectThrow(crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user1 }))
  })

  it('Check that the properties were set on the token', async () => {
    // get the corresponding token
    let crowdsale = await TeslaCrowdsale.deployed()
    let tokenAddress = await crowdsale.token.call()
    let token = TeslaToken.at(tokenAddress)

    // get the properties of the token
    let name = await token.name.call()
    let symbol = await token.symbol.call()

    // validate the properties
    assert.equal(name, NAME, "Name isn't correct")
    assert.equal(symbol, SYMBOL, "Symbol isn't correct")
  })
})

contract('TeslaToken', async (accounts) => {

  it('Check that the properties were set on the token', async () => {
    // get the corresponding token
    let crowdsale = await TeslaCrowdsale.deployed()
    let tokenAddress = await crowdsale.token.call()
    let token = TeslaToken.at(tokenAddress)

    // get the properties of the token
    let name = await token.name.call()
    let symbol = await token.symbol.call()

    // validate the properties
    assert.equal(name, NAME, "Name isn't correct")
    assert.equal(symbol, SYMBOL, "Symbol isn't correct")
  })
})